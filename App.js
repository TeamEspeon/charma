import 'react-native-gesture-handler';
<<<<<<< HEAD
import React from 'react';
import { StyleSheet } from 'react-native';
import TabNavigator from './Components/Navigation/TabNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './Components/Navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './Components/SignIn/SignIn';
>>>>>>> Svrchi-CH-13
const Tab = createBottomTabNavigator();

export default function App() {
  return (
<<<<<<< HEAD
=======

>>>>>>> Svrchi-CH-13
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
