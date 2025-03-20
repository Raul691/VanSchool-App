import React, { useState, useEffect } from 'react'; 
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Polyline } from 'react-native-maps';
import van from '../../assets/vanescolar.png';

function Rastrear ({ navigation }) { 
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
        <Marker coordinate={driverLocation} title="Tio Valter" />
        <Polyline
          coordinates={[region, driverLocation]}
          strokeColor="#FFA500"
          strokeWidth={4}
        />
      </MapView>
      <View style={styles.driverInfo}>
        <View style={styles.infoRow}>
          <Image
            source={van}
            style={styles.van}
          />
          <View>
            <Text style={styles.driverName}>Tio Valter</Text>
            <Text style={styles.plate}>Placa: DTC4538</Text>
            <Text style={styles.vehicle}>Van Renault Ducato</Text>
            <Text style={styles.rating}>Classificação: ★★★★★ 5.0</Text>
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
  van: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  plate: {
    fontSize: 16,
    color: 'white',
  },
  vehicle: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  rating: {
    fontSize: 16,
    color: 'white',
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
  },
  button1: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 13,
    width: '48%',  
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

export default Rastrear;