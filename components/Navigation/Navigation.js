import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Charities from '../Charities';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Charities} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      {/* <Tab.Screen name="Search" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;