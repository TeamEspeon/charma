import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Charities from '../Charities';
import SUSIPrompt from '../SUSIPrompt/SUSIPrompt';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../SignIn/SignIn'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={SignIn} />
      {/* <Tab.Screen name="Me" component={SUSIPrompt} /> */}
      <Tab.Screen name="Settings" component={Charities} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;