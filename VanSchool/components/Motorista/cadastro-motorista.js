import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import van2 from '../../assets/vanparada.png';
import Icon from 'react-native-vector-icons/Feather';

const CadastroMotorista = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const handleEmailChange = (text) => setEmail(text);
  const handleContinue = () => {
    console.log('Email:', email);
  };

  return (
    <View style={styles.container}>
      <Image
        source={van2}  
        style={styles.van2}
      />
    <View style={styles.container1}>
      <Text style={styles.title}>Crie sua conta</Text>
      <Text style={styles.subtitle}>Insira seu email para prosseguir</Text>
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        onChangeText={handleEmailChange}
        value={email}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroMotorista2')}>
        <Text style={styles.buttonText}>Continuar com email</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>ou se cadastre-se com</Text>

      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('CadastroMotorista2')}>
        <Text style={styles.buttonText1}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('CadastroMotorista2')}>
        <Text style={styles.buttonText1}>Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        By clicking continue, you agree to our Terms of Service and Privacy Policy
      </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CA33',
    flex: 1,
    padding: 0,
    alignItems: 'center',
  },
  van2: {
    width:'100%'
  },
  container1: {
    flex: 0,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '110%',
    marginTop: 20,
    height: '90%',
    borderRadius: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  button:{
    backgroundColor: '#F4CA33',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginBottom: 10,
    alignItems: 'center',
  },
  button1:{
    backgroundColor: '#EBE3E3',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    marginBottom: 10,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  buttonText1:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 13,
    width: 370,
    marginBottom: 20,
    borderRadius: 5,
  },
  orText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color:'#ccc',
  },
  terms: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CadastroMotorista;