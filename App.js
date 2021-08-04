import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './Components/Navigation/TabNavigator';
import Navigator from './Components/Navigation/TabNavigator';

export default function App() {
  return (
    <>
      <Navigator />
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
