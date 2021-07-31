import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './components/Navigation/Navigation';

export default function App() {
  return (

    <View style={styles.container}>
      <Text>Charma baby!</Text>
      <StatusBar style="auto" />
      <TabNavigator />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
