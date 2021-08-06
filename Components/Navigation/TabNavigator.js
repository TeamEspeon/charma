import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../SignIn/SignIn';
import Charities from '../Charities';
import SUSIPrompt from '../SUSIPrompt/SUSIPrompt';
import StripeApp from '../StripeApp';

const Tabs = createBottomTabNavigator();


const Navigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="SignIn"
      >
        <Tabs.Screen name="Search" component={Charities} />
        <Tabs.Screen name="Me" component={SUSIPrompt} />
        <Tabs.Screen name="SignIn" component={SignIn} />
        <Tabs.Screen name="StripeApp" component={StripeApp} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;