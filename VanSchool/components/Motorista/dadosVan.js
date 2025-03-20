import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../../assets/logo.png';

const DadosVan = ({ navigation }) => {
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleInsurance, setVehicleInsurance] = useState('');
  const [vehicleAirbags, setVehicleAirbags] = useState('');
  const [vehicleABS, setVehicleABS] = useState('');

  const handleSubmit = () => {
    console.log({
      vehicleType,
      vehicleModel,
      vehiclePlate,
      vehicleColor,
      vehicleInsurance,
      vehicleAirbags,
      vehicleABS,
    });
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Image
        source={logo}  
        style={styles.logo}
      />
      </View>
      <Text style={styles.title}>SOBRE A SUA VAN</Text>
      <TextInput
        placeholder="Qual é o modelo da sua van?"
        value={vehicleType}
        onChangeText={setVehicleType}
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
      />
      <TextInput
        placeholder="Quantos assentos sua van tem?"
        value={vehicleModel}
        onChangeText={setVehicleModel}
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
      />
      <TextInput
        placeholder="Qual é a placa do seu automóvel?"
        value={vehiclePlate}
        onChangeText={setVehiclePlate}
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
      />
      <TextInput
        placeholder="Qual é a cor da sua van?"
        value={vehicleColor}
        onChangeText={setVehicleColor}
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
      />
      <TextInput
        placeholder="Possui seguro? (Sim/Não)"
        value={vehicleInsurance}
        onChangeText={setVehicleInsurance}
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
      />
      <TextInput
        placeholder="Possui airbags? (Sim/Não)"
        value={vehicleAirbags}
        onChangeText={setVehicleAirbags}
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
      />
      <TextInput
        placeholder="Possui freios ABS? (Sim/Não)"
        value={vehicleABS}
        onChangeText={setVehicleABS}
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  header: {
    width: 420,
    height: 138,
    backgroundColor: '#F4CA33',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  logo: {
    width: 200,
    height: 40,
    marginTop: 65,
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    color: '#F8A400',
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 15,
    fontSize: 18,
    width: 350,
    placeholderTextColor:'black'
  },
  placeholder: {
    color: 'black',
  },
  button: {
    backgroundColor: '#F8A400',
    padding: 15,
    width: 350,
    borderRadius: 10,
    marginTop:100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DadosVan;
