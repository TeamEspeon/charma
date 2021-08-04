import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../SignIn/SignIn';
import Charities from '../Charities';

const Stack = createBottomTabNavigator();
const Login = createStackNavigator();

const Navigator = () => {
  const [loggedIn, setAuthStatus] = useState(true);

  return (
    <NavigationContainer>
      {!loggedIn
      ?
      <Login.Navigator
        initialRouteName="SignIn"
      >
        <Login.Screen name="SignIn" component={SignIn} />
        {/* <Login.Screen name="SignUp" component={SignUp} /> */}
      </Login.Navigator>
      :
      <Stack.Navigator>
        <Stack.Screen name="Charities" component={Charities} />
      </Stack.Navigator>}
    </NavigationContainer>
  );
};

export default Navigator;