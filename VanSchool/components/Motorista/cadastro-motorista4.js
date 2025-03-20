import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import crianca from '../../assets/crianca.png';
import Icon from 'react-native-vector-icons/Feather';

const CadastroMotorista4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={crianca}  
        style={styles.crianca}
      />
      <Text style={styles.title}>Olá Vitor</Text>
      <Text style={styles.subtitle}>Veja quais informações você precisa para executar sua conta</Text>
      <TouchableOpacity style={styles.option}onPress={() => navigation.navigate('FotoPerfil')}>
        <Text style={styles.optionText}>Foto de Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Cnh')}>
        <Text style={styles.optionText}>Carteira Nacional de Habilitação com EAR-CNH</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}onPress={() => navigation.navigate('DocumentoVan')}>
        <Text style={styles.optionText}>Certificação de Registro e Licenciamento de Veículo-CRLV</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}onPress={() => navigation.navigate('Termos')}>
        <Text style={styles.optionText}>Termos e condições</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomepageMotorista', { message: '' })}>
        <Text style={styles.buttonText}>Finalizar cadastro</Text>
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  crianca:{
    width: 450,
    height: 200,
    marginLeft: -20,
    marginTop: -20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  optionText: {
    fontSize: 16,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#FFC107',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
});

export default CadastroMotorista4;