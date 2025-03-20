import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import cnh from '../../assets/cnh.png';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';

const Cnh = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [registro, setRegistro] = useState('');

  const handleConfirm = () => {
    console.log('CPF:', cpf);
    console.log('Registro:', registro);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        source={logo}  
        style={styles.logo}
      />
      </View>
      <View style={styles.header1}>
        <Text style={styles.title}>Vamos coletar os dados da sua CNH</Text>
        <Text style={styles.subtitle}>Digite seu CPF e o Nº de Registro da CNH</Text>
      </View>

      <Image
        source={cnh}  
        style={styles.image}
      />
      
      <Text>CPF</Text>
      <TextInput
        style={styles.input}
        placeholder="000.000.000-00"
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf}
      />

      <Text>Número de Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="00000000000"
        keyboardType="numeric"
        value={registro}
        onChangeText={setRegistro}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
    alignItems: 'center'
  },
  header: {
    width: 420,
    height: 138,
    backgroundColor: '#F4CA33',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  logo: {
    width: 200,
    height: 40,
    marginTop: 65,
  },
  header1: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFC107',
    textAlign: 'center',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 16,
    color: '#808080',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 18,
    width: 350,
    backgroundColor: '#ccc'
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

export default Cnh;