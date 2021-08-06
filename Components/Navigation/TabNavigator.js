import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../SignIn/SignIn';
import Charities from '../Charities';
import SUSIPrompt from '../SUSIPrompt/SUSIPrompt';

const Tabs = createBottomTabNavigator();


const Navigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator >
        <Tabs.Screen name="Search" component={Charities} />
        <Tabs.Screen name="Me" component={SUSIPrompt} />
        <Tabs.Screen name="SignIn" component={SignIn} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;