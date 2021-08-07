import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../SignIn/SignIn';
import Charities from '../Charities';
import SUSIPrompt from '../SUSIPrompt/SUSIPrompt';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
// import StripeApp from '../StripeApp';
import UserProfile from '../UserProfile';

const Tabs = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="MyProfile"
      > 
        {/* <Tabs.Screen name="SignIn" component={SignIn} /> */}
        <Tabs.Screen name="Search" component={Charities} options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="map-search" color={color} size={size} />
          )
        }} />
        <Tabs.Screen name="My Profile" component={SUSIPrompt} options={{
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }}/>
        {/* <Tabs.Screen name="MyProfile" component={UserProfile} /> */}
      </Tabs.Navigator>
    </NavigationContainer>
  );
};



export default Navigator;