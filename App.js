import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Charities from './Components/Charities';
import TabNavigator from './Components/Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './Components/SignIn/SignIn';
const Tab = createBottomTabNavigator();
=======
import TabNavigator from './Components/Navigation/TabNavigator';
>>>>>>> c39334a5a452a4b8c554d550dcc40543503421a1

export default function App() {
  return (
    <>
      <TabNavigator/>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // wrapper: {
  //   flexGrow: 1,
  //   backgroundColor: '#ccc',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
