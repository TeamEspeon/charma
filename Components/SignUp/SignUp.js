import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { TextInput } from 'react-native-gesture-handler'

const SignUp = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <TextInput placeholder='Email'/>
            <TextInput placeholder='Password'/>
            <TextInput placeholder='Confirm Password'/>
            <Button />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ccc',
        justifyContent:'space-around',
        alignItems:'center',
    }
})
export default SignUp
