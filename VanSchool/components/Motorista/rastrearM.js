import React, { useState, useEffect } from 'react'; 
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Polyline } from 'react-native-maps';

function RastrearM ({ navigation }) { 
  const [region, setRegion] = useState({
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [driverLocation, setDriverLocation] = useState({
    latitude: -23.551,
    longitude: -46.634,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return; 
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      });
    };

    fetchLocation();
  }, []); 

  const simulateDriverMovement = () => {
    setDriverLocation((prevLocation) => ({
      ...prevLocation,
      latitude: prevLocation.latitude + 0.0005,
      longitude: prevLocation.longitude + 0.0005,
    }));
  };

  const handleCall = () => {
    const phoneNumber = 'tel:+5511969639464'; 
    Linking.openURL(phoneNumber).catch((err) => console.error('An error occurred', err));
};


  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} title="Você" pinColor="blue" />
        <Marker coordinate={driverLocation} title="Luis Henrique" />
        <Polyline
          coordinates={[region, driverLocation]}
          strokeColor="#FFA500"
          strokeWidth={4}
        />
      </MapView>
      <View style={styles.driverInfo}>
        <View style={styles.infoRow}>
          <Image source={require('../../assets/motoristafoto.png')} style={styles.tio} />
          <View>
            <Text style={styles.driverName}>Luis Henrique</Text>
            <Text style={styles.plate}>Endereço: Painscreek 59</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCall}>
            <Text style={styles.buttonText}>Ligar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={() => navigation.goBack()} >
            <Text style={styles.buttonText1}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '66%',
  },
  driverInfo: {
    padding: 20,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 300,
    marginTop: -200
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 35
  },
  plate: {
    fontSize: 16,
    color: 'white',
    marginLeft: 35
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 13,
    width: '48%',
    marginTop: 50
  },
  button1: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 13,
    width: '48%',
    marginTop: 50
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  buttonText1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default RastrearM;