import React from 'react';
import GMap from './Map';
import { StyleSheet } from 'react-native';
import CharityList from './CharityList';
import Search from './SearchBar'

export default function Charities() {
  return (
    <>
      <GMap style={styles.map} />
      <Search />
      <CharityList style={styles.list} />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '30%',
  },
  list: {
    height: '70%',
  },
});
