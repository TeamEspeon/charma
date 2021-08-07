import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../SignIn/SignIn';
import Charities from '../Charities';
import SUSIPrompt from '../SUSIPrompt/SUSIPrompt';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="MyProfile"
        options={{ headerShown: false }}
      > 
        {/* <Tabs.Screen name="SignIn" component={SignIn} /> */}
        <Tabs.Screen name="Search" component={Charities} options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="map-search" color={color} size={size} />
          )
        }} />
        <Tabs.Screen name="MyProfile" component={SUSIPrompt} options={{
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};



export default Navigator;