import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import Charities from '../Charities';
import More from '../More/More';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="My Profile"
      > 
        <Tabs.Screen name="Search" component={Charities} options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="map-search" color={color} size={size} />
          )
        }} />
        <Tabs.Screen name="My Profile" component={StackNavigator} options={{
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }}/>
        <Tabs.Screen name="More" component={More} options={{
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="menu" color={color} size={size} />
          )
        }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;