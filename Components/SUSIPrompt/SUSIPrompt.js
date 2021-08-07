import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import SignIn from '../SignIn/SignIn';
import UserProfile from '../UserProfile';

const SUSIPrompt = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonContainer} >
        <Button style={styles.signIn} title='Log In' onPress={()=> navigation.navigate('SignIn')}/>
        <Button style={styles.signUp} title='Sign Up' onPress={()=> navigation.navigate('SignUp')}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#ccc',
},
buttonContainer: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    height: 40,
  
  },
  signIn: {
    margin: 10,
},
  signUp: {
    margin: 10,
}
});


export default SUSIPrompt;
