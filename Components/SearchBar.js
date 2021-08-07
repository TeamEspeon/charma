import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, TextInput } from 'react-native';
import { Input, Icon } from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Search( { getZipCode }) {
  const [searchVal, updateSearchVal] = useState('');
  const placeholder = 'Search Charities by Zip Code';

  const submitted = (e) => {
    updateSearchVal(e.nativeEvent.text);
    getZipCode(e.nativeEvent.text);
  }

  return (
    <View
      style={{
        position: 'absolute',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        width: '100%',
        top: 0,
      }}
    >
      <Input
        w= "80%"
        variant="filled"
        mx={3}
        placeholder={placeholder}
        bg="#fff"
        borderColor="#ccc"
        InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.400" as={<Ionicons name="ios-search" />} />}
        onSubmitEditing={submitted}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//   },
// });
