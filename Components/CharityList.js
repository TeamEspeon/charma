import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

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

export default function CharityList({ DATA }) {
  const [checked, setChecked] = useState(false);
  const [selectedCharity, setSelectedCharity] = useState({});

  const displayDetails = (item) => {
    setChecked(true);
    fetch(`http://192.168.1.222:3030/charity-organizations/${item}`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setSelectedCharity(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const Item = ({
    charityName,
    classification,
    streetAdress1,
    city,
    stateOrProvince,
    website,
    id
  }) => (
    <TouchableOpacity
      onPress={() => {
        displayDetails(id)
      }}
    >
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

  const renderItem = ({ item }) => (
    <Item
      charityName={item.charityName}
      classification={item.classification}
      streetAdress1={item.streetAdress1}
      city={item.city}
      stateOrProvince={item.stateOrProvince}
      website={item.website}
      id={item.id}
    />
  );

  return (
    <View style={styles.container}>
      {DATA.length > 0 && !checked && (
        <FlatList
          data={DATA}
          extraData={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      )}
      {DATA.length > 0 && checked && selectedCharity && (
        <>
        <TouchableOpacity onPress={() => setChecked(false)}>
          <View style={styles.individual}>
            <Text>Back</Text>
          </View>
        </TouchableOpacity>
        <Text>{selectedCharity.charityName}</Text>
        <Text>{selectedCharity.irsClassification.affiliation}</Text>
        <Text>{selectedCharity.irsClassification.classification}</Text>
        <Text>{selectedCharity.mailingAddress.streetAddress1} - {selectedCharity.mailingAddress.city} - {selectedCharity.mailingAddress.stateOrProvince}</Text>
        <Text>{selectedCharity.irsClassification.nteeType}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    height: '55%',
    width: '100%',
    top: 60,
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
  individual: {},
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
  },
});
