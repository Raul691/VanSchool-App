import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; 
import van from '../../assets/van.png';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';


const IntroMotorista = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
        source={logo}  
        style={styles.logo}
      />
          <Text style={styles.subtitle}>Segurança e praticidade em suas mãos</Text>
          <View style={styles.imageContainer}>
          <Image
          source={van}  
          style={styles.van}
          />
          </View>
        </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroMotorista')}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}onPress={() => navigation.navigate('LoginMotorista')}>
           <Text style={styles.buttonText1}>Entre</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    marginTop: 150,
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
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginBottom: 10,
    borderWidth: 4,
  },
  button1: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  buttonText1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default IntroMotorista;