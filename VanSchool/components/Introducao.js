import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import van from '../assets/van.png'; 

function Introducao({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
        source={logo}  
        style={styles.logo}
          />
        <Text style={styles.subtitle}>
        Segurança e praticidade em suas mãos</Text>
          <View style={styles.imageContainer}>
          <Image
          source={van}  
          style={styles.van}
          />
          </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('IntroPai', { message: '' })}>
        <Text style={styles.buttonText}>Responsáveis</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('IntroMotorista', { message: '' })}>
        <Text style={styles.buttonText}>Motoristas</Text>
      </TouchableOpacity>
    </View>
  );
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
    backgroundColor: '#F4CA33',
    padding: 0,
    borderRadius: 20,
    marginBottom: 80,
    marginTop: 90,
    width: '90%',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 26,
    marginBottom: 20,
    marginLeft: 15,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F4CA33',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginBottom: 16,
  },
  button1: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginBottom: 10,
    borderColor: '#F4CA33',
    borderWidth: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default Introducao;
