import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from '../SignIn/SignIn';
import Charities from '../Charities';
import SUSIPrompt from '../SUSIPrompt/SUSIPrompt';
const Tabs = createBottomTabNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="SignIn"
      >
        <Tabs.Screen name="Search" component={Charities} />
        <Tabs.Screen name="Me" component={SUSIPrompt} />
        <Tabs.Screen name="more" component={SignIn} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;