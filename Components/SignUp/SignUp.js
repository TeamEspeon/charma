// import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
// import { Button } from 'react-native-elements/dist/buttons/Button';
import { urlPrefix } from '../Utils/ipAddress';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
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
import axios from 'axios';
import deviceStorage from '../Utils/deviceStorage';

const SignUp = ({navigation}) => {
    const [fName, setFname] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPW, setConfirmPW] = useState('');

const handleSignUp = () => {
    console.log(fName, lName,email, password, confirmPW);
    if (password === confirmPW){
        axios.post(`${urlPrefix}api/createUser`, {
            firstName: fName,
            lastName: lName,
            email: email,
            password: password
            })
            .then(res => {
                console.log(res.data) // access response data with res.data
                if (res.status === 200) {
                    deviceStorage.saveItem("id_token", res.data.token);
                    navigation.navigate('User Profile', {
                        user: res.data.user,
                    });
                }
                })
            .catch(error => {
                console.log(error)
            })
    }
}


    return (
        <NativeBaseProvider>
            <ScrollView>
        <Box safeArea flex={1} p={2} w="90%" mx="auto">
            <Heading size="lg" color="primary.500">
            Charma
            </Heading>
            <Heading color="muted.400" size="xs">
            Sign up to continue!
            </Heading>

            <VStack space={2} mt={5}>
            <FormControl>
                <FormControl.Label
                _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}
                >
                First Name
                </FormControl.Label>
                <Input bg="#fff"  onChangeText={setFname}/>
            </FormControl>

            <FormControl>
                <FormControl.Label
                _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}
                >
                Last Name
                </FormControl.Label>
                <Input bg="#fff" onChangeText={setlName} />
            </FormControl>

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

            <FormControl mb={5}>
                <FormControl.Label
                _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}
                >
                Confirm Password
                </FormControl.Label>
                <Input type="password" bg="#fff" onChangeText={setConfirmPW} />
            </FormControl>

            <VStack space={2}>
                <Button
                colorScheme="cyan"
                _text={{ color: 'white' }}
                onPress={() => handleSignUp()}
                >
                Submit
                </Button>
                
            </VStack>
            </VStack>
        </Box>
        </ScrollView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    textInput: {
        paddingLeft: 5,
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

export default SignUp;
