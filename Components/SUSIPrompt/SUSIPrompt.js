import React from 'react';
import {StyleSheet, TextInput, View, Text, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../SignIn/SignIn';
import UserProfile from '../UserProfile';

const SUSIStack = createStackNavigator();

const SUSIPrompt = ({ navigation }) => {
  return (
    <SUSIStack.Navigator 
      initialRouteName="Sign In"
      options={{ headerShown: false }}
    >
      <SUSIStack.Screen name='Sign In' component={SignIn} />
      <SUSIStack.Screen name='User Profile' component={UserProfile} />
    </SUSIStack.Navigator>
  )
};

const styles = StyleSheet.create({
wrapper: {
    justifyContent:'center',
    alignItems: 'center',
}
});


export default SUSIPrompt;
