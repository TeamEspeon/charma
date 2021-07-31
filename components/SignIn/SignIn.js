import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SignIn = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.Input}
        placeholder='email'
        onChangeText = {(val) => setEmail(val)}
      />
      <TextInput
        style={styles.Input}
        placeholder='password'
        onChangeText = {(val) => setPassword(val)}
      />
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignIn;
