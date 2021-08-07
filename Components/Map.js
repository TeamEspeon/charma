import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  useWindowDimensions,
} from 'react-native';

export default function GMap({ coords }) {
  const [markers, setMarkers] = useState([]);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0822,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: coords[0] && coords[0].latitude || 37.78825,
          longitude: coords[0] && coords[0].longitude || -122.4324,
          latitudeDelta: 0.0822,
          longitudeDelta: 0.0421,
        }}
      >
        {coords.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.name}
          />
        ))}
        {/* <Marker key={2} coordinate={region2} /> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
    height: '35%',
  },
  map: {
    width: Dimensions.get('window').width,
    height:
      Dimensions.get('window').height - Dimensions.get('window').height * 0.55,
  },
});
