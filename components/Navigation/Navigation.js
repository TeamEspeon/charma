import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      {/* <Tab.Screen name="Search" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;