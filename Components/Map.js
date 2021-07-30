import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function GMap() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const [region2, setRegion2] = useState({
    latitude: 37.4215069,
    longitude: -122.0831144,
  });

  const [markers, setMarkers] = useState([]);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker key={1} coordinate={region} />
        {/* <Marker key={2} coordinate={region2} /> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
