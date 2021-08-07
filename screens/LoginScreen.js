import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import {GOOGLE_OAUTH_CLIENT_ID} from './credentials';

const LoginScreen = () => {
  const signInAsync = async () => {
    console.log('LoginScreen.js 6 | loggin in');
    try {
      const { type } = await Google.logInAsync({
        iosClientId: '<YOUR_IOS_CLIENT_ID>',
        androidClientId: GOOGLE_OAUTH_CLIENT_ID,
      });
      if (type === 'success') {
        // Then you can use the Google REST API
        console.log('LoginScreen.js 17 | success, navigating to profile');
        // navigation.navigate('LoginScreen', { user });
      }
    } catch (error) {
      console.log('LoginScreen.js 19 | error with login', error);
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Login with Google" onPress={signInAsync} />
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({});