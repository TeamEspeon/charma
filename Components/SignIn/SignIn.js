import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { urlPrefix } from '../Utils/ipAddress';
import deviceStorage from '../Utils/deviceStorage';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    axios
      .post(`${urlPrefix}/api/verifyUser`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log('success');
          deviceStorage.saveItem("id_token", res.data.jwt);
        }
      });
  };

  const signInWithGoogle = async () => {
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
    <NativeBaseProvider>
      <Box safeArea flex={1} p={2} w="90%" mx="auto">
        <Heading size="lg" color="primary.500">
          Charma
        </Heading>
        <Heading color="muted.400" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}
            >
              Email
            </FormControl.Label>
            <Input bg="#fff" onChangeText={setEmail} />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}
            >
              Password
            </FormControl.Label>
            <Input type="password" bg="#fff" onChangeText={setPassword} />
          </FormControl>
          <VStack space={2}>
            <Button
              colorScheme="cyan"
              _text={{ color: 'white' }}
              onPress={() => handleLogin()}
            >
              Submit
            </Button>
            <Button
              colorScheme="cyan"
              _text={{ color: 'white' }}
              onPress={signInWithGoogle}
            >
              Login with Google
            </Button>
          </VStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  textInput: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 15,
    width: 180,
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default SignIn;
