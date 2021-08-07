import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Alert, Button} from 'react-native';
import {StripeProvider, CardField, useConfirmPayment} from '@stripe/stripe-react-native';
import {ipPrefix} from './Utils/ipAddress';
import { stripeKey, urlPrefix } from './Utils/ipAddress'


export default function StripeApp() {
  const [email, setEmail] = useState('');
  const [cardDetails, setCardDetails] = useState({});
  const {confirmPayment, loading} = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    // 'https://api.stripe.com/v1/payment_intents/client_secret'
    const response = await fetch(`${urlPrefix}create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const {clientSecret, error} = await response.json();
    return {clientSecret, error};
  };

  const handlePayPress = async () => {
    if (!cardDetails?.complete || !email) {
      Alert.alert('Please enter complete card details and email');
      return;
    }

    const billingDetails = { 
      email: email
    };

    try {
      const {clientSecret, error} = await fetchPaymentIntentClientSecret();
      if (error) {
        console.log("Unable to process payment");
      } else {
        const {paymentIntent, error} = await confirmPayment(clientSecret, {
          type: 'Card',
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert(`Payment Successful!`);
          console.log('Payment Successful ', paymentIntent);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StripeProvider publishableKey={stripeKey}>
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          keyboardType="email-address"
          onChange={value => setEmail(value.nativeEvent.text)}
          style={styles.input}
          onCardChange={cardDetails => {
            setCardDetails(cardDetails);
          }}
        />
        <CardField 
          postalCodeEnabled={true}
          placeholder={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={styles.card}
          style={styles.cardContainer}
        />
        <Button onPress={handlePayPress} title="Pay" disabled={loading} />
      </View>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    backgroundColor: '#efefefef',
    height: 20,
    borderRadius: 8,
    fontSize: 14,
    height: 40,
    padding: 5,
  },
  card: {
    backgroundColor: '#efefefef',
  },
  cardContainer: {
    height: 40,
    marginVertical: 20,
  },
});