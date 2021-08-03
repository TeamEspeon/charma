import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SignIn = ({ naavigation }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');


  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>   
      <TextInput
        style={styles.input}
        placeholder='email'
        onChangeText = {(val) => setEmail(val)}
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        onChangeText = {(val) => setPassword(val)}
      />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    margin: '3px',
    // flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding:10,
    borderWidth: 1,
    borderColor: '#777',
// flex: 4,
justifyContent:'center'
  },
});

export default SignIn;
