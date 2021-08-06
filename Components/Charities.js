import React from 'react';
import GMap from './Map';
import { StyleSheet } from 'react-native';
import CharityList from './CharityList';
import Search from './SearchBar'
import { View } from 'react-native';

export default function Charities() {
  const [zipCode, setZipCode] = React.useState('');
  const getZipCode = (zip) => {
    setZipCode(zip)
  }
  return (
    <View style={styles.wrapper}>
      <GMap style={styles.map} />
      <Search getZipCode={getZipCode}/>
      <CharityList style={styles.list} zipCode={zipCode}/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    // height: '30%',
    flex:1,
  },
  list: {
    // height: '70%',
    flex:1,
  },
});