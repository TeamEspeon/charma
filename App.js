import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './Components/Navigation/TabNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './Components/SignIn/SignIn';

const BottomTabs = createBottomTabNavigator();
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <View>
      <NavigationContainer>
        <BottomTabs.Navigator>
          <BottomTabs.Screen name="SignIn" component={SignIn}></BottomTabs.Screen>
        </BottomTabs.Navigator>
      </NavigationContainer>
    </View>
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
