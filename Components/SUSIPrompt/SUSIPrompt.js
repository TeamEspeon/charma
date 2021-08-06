import React from 'react';
import {StyleSheet, TextInput, View, Text, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../SignIn/SignIn';

const SUSIStack = createStackNavigator();

const SUSIPrompt = ({ navigation }) => {
  return (
    <SUSIStack.Navigator>
      <SUSIStack.Screen name='SignIn' component={SignIn} />
      {/* <SUSIStack.Screen name='MyModal' component={ModalScreen} /> */}
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
