import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import { urlPrefix } from '../Utils/ipAddress';
import deviceStorage from '../Utils/deviceStorage';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    axios.post(`${urlPrefix}/api/verifyUser`, {
      email: email,
      password: password,
    })
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        console.log('success');
        // deviceStorage.saveItem("id_token", res.data.jwt);
      }
    })
  };

  const signInWithGoogle = async () => {
    console.log('LoginScreen.js 6 | loggin in');
    try {
      const { type } = await Google.logInAsync({
        iosClientId: '<YOUR_IOS_CLIENT_ID>',
        androidClientId: GOOGLE_OAUTH_CLIENT_ID,
      });
      if (type === 'success') {
        // Then you can use the Google REST API
        console.log('LoginScreen.js 17 | success, navigating to profile');
        // navigation.navigate('LoginScreen', { user });
      }
    } catch (error) {
      console.log('LoginScreen.js 19 | error with login', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Charma</Text>
      <Text>Please Log in</Text>
      <TextInput 
        style={styles.textInput} 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail}>
      </TextInput>
      <TextInput 
        style={styles.textInput} 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
      />
      <Button
        title="Submit"
        onPress={() => handleLogin()}
      >Submit</Button>
      <Button title="Login with Google" onPress={signInWithGoogle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  textInput: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 15,
    width: 180,
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
  }
});

export default SignIn;
