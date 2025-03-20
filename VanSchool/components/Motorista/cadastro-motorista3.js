import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import crianca from '../../assets/crianca.png';
import Icon from 'react-native-vector-icons/Feather';

const CadastroMotorista3 = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (text) => setName(text);
  const handleEmailChange = (text) => setEmail(text);
  const handleCpfChange = (text) => setCpf(text);
  const handlePhoneChange = (text) => setPhone(text);

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('CPF:', cpf);
    console.log('Phone:', phone);
  };

  return (
    <View style={styles.container}>
      <Image
        source={crianca}  
        style={styles.crianca}
      />
    <View style={styles.container1}>
      <Text style={styles.title}>Crie sua conta</Text>
      <Text style={styles.subtitle}>Coloque suas informações para prosseguir</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de nascimento</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleNameChange}
          value={name}
          placeholder="Ex: 00/00/0000"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleEmailChange}
          value={email}
          placeholder="Insira seu endereço"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Complemento</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleCpfChange}
          value={cpf}
          placeholder="Insira o complemento"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={styles.input}
          onChangeText={handlePhoneChange}
          value={phone}
          placeholder=" Ex: São Paulo"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroMotorista4')}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 1,
    padding: 20,
  },
  crianca:{
    width:'100%'
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
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 13,
    borderRadius: 7,
    color: '#646464',
  },
  button: {
    backgroundColor: '#F4CA33',
    padding: 13,
    borderRadius: 7,
    marginTop: 20,
  },
});

export default CadastroMotorista3;