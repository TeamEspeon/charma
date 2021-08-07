import React, { useState, useEffect } from 'react';
import GMap from './Map';
import { StyleSheet } from 'react-native';
import CharityList from './CharityList';
import Search from './SearchBar';
import { View } from 'react-native';
import { urlPrefix } from './Utils/ipAddress'

export default function Charities() {
  const [zipCode, setZipCode] = useState('');
  const [DATA, setData] = useState([]);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    if (DATA.length > 0) {
      const getAllCoords = [];
      const tempCoords = [];
      for (let charity of DATA) {
        getAllCoords.push(
          new Promise((resolve, reject) => {
            const encodedCharity = `${charity.streetAddress1.replace(
              / /g,
              '+'
            )},+${zipCode}`;
            fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedCharity}&key=AIzaSyDM6KzC5_yNd_18ZlLrxsB3DY6Lbg4ldIo`
            )
              .then((response) => response.json())
              .then((response) => {
                if (response.status === 'OK') {
                  tempCoords.push({
                    latitude: response.results[0].geometry.location.lat,
                    longitude: response.results[0].geometry.location.lng,
                    name: charity.charityName,
                  });
                  resolve('done');
                } else {
                  resolve('could not find but done')
                }
              });
          })
        );
      }
      Promise.all(getAllCoords).then(() => {
        setCoords([...tempCoords]);
      });
    }
  }, [DATA]);

  const getZipCode = (zipCode) => {
    const tempData = [];
    fetch(`${urlPrefix}charity-organizations?zip=${zipCode}`)
      .then((response) => response.json())
      .then((response) => {
        for (let data of response) {
          tempData.push({
            id: data.ein,
            charityName: data.charityName,
            classification: data.irsClassification.classification,
            streetAddress1: data.mailingAddress.streetAddress1,
            city: data.mailingAddress.city,
            stateOrProvince: data.mailingAddress.stateOrProvince,
            website: data.websiteURL,
          });
        }
        setData([...tempData]);
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.wrapper}>
      <GMap style={styles.map} coords={coords} />
      <Search getZipCode={getZipCode} />
      <CharityList style={styles.list} DATA={DATA} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    // height: '30%',
    flex: 1,
  },
  list: {
    // height: '70%',
    flex: 1,
  },
});
