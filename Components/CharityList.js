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


const Item = ({
  charityName,
  classification,
  streetAdress1,
  city,
  stateOrProvince,
  website,
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

export default function CharityList({ DATA }) {
  // const [DATA, setData] = useState([]);
  // useEffect(() => {
  //   const tempData = []
  //   if (zipCode) {
  //     fetch(`http://192.168.1.222:3030/charity-organizations?zip=${zipCode}`)
  //       .then((response) => response.json())
  //       .then((response) => {
  //         for (let data of response) {
  //           tempData.push({
  //             id: data.ein,
  //             charityName: data.charityName,
  //             classification: data.irsClassification.classification,
  //             streetAddress1: data.mailingAddress.streetAddress1,
  //             city: data.mailingAddress.city,
  //             stateOrProvince: data.mailingAddress.stateOrProvince,
  //             website: data.websiteURL,
  //           });
  //         }
  //         setData([...tempData]);
  //         console.log(DATA);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }, [zipCode]);

  // console.log('ZIPCODE INSIDE OF THE CHARITYLIST', zipCode);
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
      {DATA.length > 0 && (
        <FlatList
          data={DATA}
          extraData={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    height: '55%',
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
  },
});
