import React from 'react';
import {StyleSheet, TextInput, View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../SignIn/SignIn';

const SUSIStack = createStackNavigator();


const SUSIPrompt = () => {
    return (
        <NavigationContainer independent={true}>
            <View style={styles.wrapper}>
        <SUSIStack.Screen name='signin' component={SignIn} />
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
wrapper: {
    justifyContent:'center',
    alignItems: 'center',
}
});


export default SUSIPrompt;
