import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text} from 'react-native';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    
    axios.post('/api/Authenticate/login', {
      email: email,
      password: password,
    })
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        console.log('success');
      }
    })
  };

  return (
    <View style={styles.container}>
      <Text>Charma</Text>
      <Text>Please Log in</Text>
      <TextInput 
        style={styles.textInput} 
        placeholder="email" 
        value={email} 
        onChangeText={setPassword}>
      </TextInput>
      <TextInput 
        style={styles.textInput} 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
      />
      <Button 
        mode="contained" 
        title='Submit'
        onPress={() => handleLogin()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  textInput: {
    paddingLeft: 5,
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
