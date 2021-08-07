import React from 'react';
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
      <Tabs.Navigator
        initialRouteName="MyProfile"
        options={{ headerShown: false }}
      > 
        {/* <Tabs.Screen name="SignIn" component={SignIn} /> */}
        <Tabs.Screen name="Search" component={Charities} />
        <Tabs.Screen name="MyProfile" component={SUSIPrompt} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};



export default Navigator;