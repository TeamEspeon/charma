import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Text,
  Heading,
  Box,
  Stack,
  HStack,
  VStack,
  Badge,
  Divider,
  ScrollView,
  Center,
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { urlPrefix } from './Utils/ipAddress';
import StripeApp from './StripeApp';

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

const categories = {
  'Labor Organization': 'account-hard-hat',
  'Religious Organization': 'church',
  'Business League': 'card-account-details-outline',
  'Educational Organization': 'school',
  'Social Welfare Organization': 'account-group',
  'Charitable Organization': 'charity',
};

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
  };

  const Item = ({
    charityName,
    classification,
    streetAddress1,
    city,
    stateOrProvince,
    website,
    id,
  }) => (
    <TouchableOpacity
      onPress={() => {
        displayDetails(id);
      }}
    >
      {/* <Stack space={3} alignItems="flex-start"> */}
      <HStack space={1} alignItems="flex-start">
        <Box
          alignItems="center"
          justify="center"
          paddingTop="25px"
          paddingLeft="10px"
        >
          <MaterialCommunityIcons
            name={categories[classification] || 'account'}
            size={24}
            color="red"
          />
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
      streetAddress1={item.streetAddress1}
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
        <ScrollView height={1000}>
          <VStack>
            <TouchableOpacity onPress={() => setChecked(false)}>
              <HStack>
                <MaterialCommunityIcons
                  name="arrow-left"
                  color="red"
                  size={15}
                  marginTop="10px"
                />
                <Text top="-3px">Back</Text>
              </HStack>
            </TouchableOpacity>
            <Divider marginBottom={2} marginTop={1} />
            <Center>
              <HStack paddingTop="1">
                <MaterialCommunityIcons
                  name={categories[selectedCharity.irsClassification.classification] || 'account'}
                  color="red"
                  size={15}
                  top={5}
                />
                <Heading size="sm" padding={1} top="-7px">
                  {selectedCharity.charityName}
                </Heading>
              </HStack>
            </Center>
            <HStack paddingLeft={3}>
              <Text fontSize="sm" bold width={100}>
                Affiliation:{' '}
              </Text>
              <Text fontSize="sm" width={270}>
                {selectedCharity.irsClassification.affiliation}
              </Text>
            </HStack>
            <HStack paddingLeft={3}>
              <Text fontSize="sm" bold width={100}>
                Classification:{' '}
              </Text>
              <Text fontSize="sm" width={270}>
                {selectedCharity.irsClassification.classification}
              </Text>
            </HStack>
            <HStack paddingLeft={3}>
              <Text fontSize="sm" bold width={100}>
                Address:{' '}
              </Text>
              <Text fontSize="sm" width={270}>
                {selectedCharity.mailingAddress.streetAddress1} -{' '}
                {selectedCharity.mailingAddress.city} -{' '}
                {selectedCharity.mailingAddress.stateOrProvince}
              </Text>
            </HStack>
            <Divider marginBottom={2} marginTop={1} />
            <Center>
              <Heading size="sm" padding={1}>
                Pay with Stripe
              </Heading>
            </Center>
            <StripeApp />
          </VStack>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    height: '60%',
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
    width: 330,
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
