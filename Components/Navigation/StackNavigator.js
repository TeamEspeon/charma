import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SUSIPrompt from '../SUSIPrompt/SUSIPrompt';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator  screenOptions={{headerShown: false}} >
            <Stack.Screen name="SUSIPrompt"  component={SUSIPrompt}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name='User Profile' component={UserProfile} />
        </Stack.Navigator>
    )
};

export default StackNavigator;
