import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './Components/Navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './Components/SignIn/SignIn';
const Tab = createBottomTabNavigator();

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
