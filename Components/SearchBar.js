import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, TextInput } from 'react-native';

export default function Search() {
  const [searchVal, updateSearchVal] = useState('');
  const placeholder = 'Search Charities';

  const submitted = () => {
    console.log(searchVal);
  }

  useEffect(() => {
    console.log('clicked')
  }, [searchVal]);


  return (
    <View
      style={{
        position: 'absolute',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        width: '100%',
        top: 0,
      }}
    >
      <TextInput
        onSubmitEditing={updateSearchVal}
        placeholder={placeholder}
        style={{
          height: 35,
          margin: 12,
          width: '80%',
          borderWidth: 1,
          padding: 10,
          backgroundColor: '#fff',
          // borderRadius: 25,
          // borderColor: 'black',
        }}
        textStyle={{ color: '#000' }}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//   },
// });
