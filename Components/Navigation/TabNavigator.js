import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../SignIn/SignIn';

const Stack = createStackNavigator();

const Navigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
        header: (props) => <CustomNavBar {...props} />,
      }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;