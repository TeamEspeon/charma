import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    charityName: 'Eun Sung Presbyterian Church',
    classification: 'Religious Organization',
    streetAdress1: '1234 Blvd',
    city: 'New York',
    stateOrProvince: 'NY',
    website: 'www.eunsung.org',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    charityName: 'Second Item',
    classification: 'Religious Organization',
    streetAdress1: '1234 Blvd',
    city: 'New York',
    stateOrProvince: 'NY',
    website: 'www.eunsung.org',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    charityName: 'Third Item',
    classification: 'Religious Organization',
    streetAdress1: '1234 Blvd',
    city: 'New York',
    stateOrProvince: 'NY',
    website: 'www.eunsung.org',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    charityName: 'Fourth Item',
    classification: 'Religious Organization',
    streetAdress1: '1234 Blvd',
    city: 'New York',
    stateOrProvince: 'NY',
    website: 'www.eunsung.org',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    charityName: 'Fifth Item',
    classification: 'Religious Organization',
    streetAdress1: '1234 Blvd',
    city: 'New York',
    stateOrProvince: 'NY',
    website: 'www.eunsung.org',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d63',
    charityName: 'Sixth Item',
    classification: 'Religious Organization',
    streetAdress1: '1234 Blvd',
    city: 'New York',
    stateOrProvince: 'NY',
    website: 'www.eunsung.org',
  },
];

const Item = ({
  charityName,
  classification,
  streetAdress1,
  city,
  stateOrProvince,
  website
}) => (
  <TouchableOpacity onPress={() => alert(charityName)}>
    <View style={styles.item}>
      <Text style={styles.charityName}>{charityName}</Text>
      <Text style={styles.classification}>{classification}</Text>
      <Text style={styles.address}>
        {streetAdress1} - {city}: {stateOrProvince}
      </Text>
      <Text style={styles.website}>{website}</Text>
    </View>
  </TouchableOpacity>
);

const renderSeparator = () => (
  <View
    style={{
      height: 1,
      width: '86%',
      backgroundColor: '#CED0CE',
      marginLeft: '5%',
    }}
  />
);

export default function CharityList() {
  const renderItem = ({ item }) => (
    <Item
      charityName={item.charityName}
      classification={item.classification}
      streetAdress1={item.streetAdress1}
      city={item.city}
      stateOrProvince={item.stateOrProvince}
      website={item.website}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    height: '65%',
    width: '100%',
    marginBottom: 10,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  charityName: {
    fontSize: 12,
  },
  classification: {
    fontSize: 10,
  },
  address: {
    fontSize: 10,
  },
  website: {
    fontSize: 10,
  }
});
