import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { Text, Heading, Box, Stack, HStack, VStack, Badge} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { urlPrefix } from './Utils/ipAddress'

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
    fetch(`${urlPrefix}charity-organizations/${item}`)
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
    streetAddress1,
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
      {/* <Stack space={3} alignItems="flex-start"> */}
      <HStack space={1} alignItems="flex-start">
      <Box alignItems="center" justify="center" paddingTop="25px" paddingLeft="10px">
        <MaterialCommunityIcons name="account" size={24} color="red"/>
      </Box>
      <View style={styles.item}>
        <Heading size="xs">{charityName}</Heading>
        <Text fontSize="sm">{classification}</Text>
        <Text fontSize="xs">
          {streetAddress1} - {city}: {stateOrProvince}
        </Text>
      </View>
      </HStack>
      {/* </Stack> */}
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item
      charityName={item.charityName}
      classification={item.classification}
      streetAddress1={item.streetAddress1 || 'Address unavailable'}
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
      {DATA.length > 0 && checked && Object.keys(selectedCharity).length > 0 && (
        <VStack>
        <TouchableOpacity onPress={() => setChecked(false)}>
          <Badge colorScheme="info" style={styles.badge}>
            Back
          </Badge>
        </TouchableOpacity>
        <Text>{selectedCharity.charityName}</Text>
        <Text>{selectedCharity.irsClassification.affiliation}</Text>
        <Text>{selectedCharity.irsClassification.classification}</Text>
        <Text>{selectedCharity.mailingAddress.streetAddress1} - {selectedCharity.mailingAddress.city} - {selectedCharity.mailingAddress.stateOrProvince}</Text>
        <Text>{selectedCharity.irsClassification.nteeType}</Text>
        </VStack>
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
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
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
