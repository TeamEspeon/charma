import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignIn from '../SignIn/SignIn';
import UserProfile from '../UserProfile';
import {
  NativeBaseProvider,
  Button,
  VStack
} from 'native-base';

const SUSIPrompt = ({navigation}) => {
  return (

      <View style={styles.wrapper}>
        <Button 
        colorScheme="cyan"
        _text={{ color: 'white' }}
        style={styles.signIn} 
        // title='Log In' 
        onPress={()=> navigation.navigate('SignIn')}>
          Log in
          </Button>
        <Button 
        colorScheme="cyan"
        _text={{ color: 'white' }}
        style={styles.signUp} 
        // title='Sign Up' 
        onPress={()=> navigation.navigate('SignUp')}>
          Sign Up
          </Button>
    </View>
  )
};

const styles = StyleSheet.create({
wrapper: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'flex-end',
    justifyContent:'flex-end',
    // backgroundColor: '#ccc',
},
  signIn: {
    margin: 10,
},
  signUp: {
    margin: 10,
}
});


export default SUSIPrompt;
