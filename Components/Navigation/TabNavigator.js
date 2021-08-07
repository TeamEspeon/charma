import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import Charities from '../Charities';
import More from '../More/More';

const Tabs = createBottomTabNavigator();

const Navigator = () => {
  return (
      <NavigationContainer>
        <Tabs.Navigator  options={{ headerShown: false }}>
        <Tabs.Screen name="Search" component={Charities} /> 
        <Tabs.Screen name="MyProfile" component={StackNavigator} />
        <Tabs.Screen name="More" component={More} />
        </Tabs.Navigator>
      </NavigationContainer>
  );
};



export default Navigator;