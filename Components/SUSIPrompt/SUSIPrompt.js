import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, Button} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../SignIn/SignIn';



const SUSIPrompt = () => {

    return (
<View style={styles.wrapper}>
<Button
style={styles.button}
title='Sign in'
onPress = {() => console.log('sign in pressed!')}
/>
<Button
style={styles.button}
title='create account'
onPress = {() => console.log('sign in pressed!')}
/>
</View>
    )
}

const styles = StyleSheet.create({
wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
},
button: {
    flex:1,
    marginRight: 3,
}
});


export default SUSIPrompt;
