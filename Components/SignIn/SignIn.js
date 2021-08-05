import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

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
        placeholder="Username" 
        value={username} 
        onChangeText={setUsername}>
      </TextInput>
      <TextInput 
        style={styles.textInput} 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
      />
      <Button 
        mode="contained" 
        onPress={() => handleLogin()}
      >Submit</Button>
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
