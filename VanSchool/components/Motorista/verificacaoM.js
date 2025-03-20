import React, { useRef, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import mulher from '../../assets/mulher.png';
import Icon from 'react-native-vector-icons/Feather';

const VericacaoM = ({ navigation }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInputChange = (text, index) => {
    const filteredText = text.replace(/[^0-9]/g, '');
    
    switch (index) {
      case 0:
        setNum1(filteredText);
        break;
      case 1:
        setNum2(filteredText);
        break;
      case 2:
        setNum3(filteredText);
        break;
      case 3:
        setNum4(filteredText);
        break;
    }

    if (filteredText.length > 0 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = () => {
    console.log('num1', num1);
    console.log('num2', num2);
    console.log('num3', num3);
    console.log('num4', num4);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Verificação</Text>
        <Text style={styles.subtitle}>
          Insira o código de verificação, que foi enviado no email: email@domain.com
        </Text>
        <View style={styles.inputRow}>
          {[0, 1, 2, 3].map((index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={index === 0 ? num1 : index === 1 ? num2 : index === 2 ? num3 : num4}
              onChangeText={(text) => handleInputChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              ref={inputRefs[index]}
            />
          ))}
        </View>
        <Text style={styles.subtitle1}>Reenviar código em 02:00</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomepageMotorista', { message: '' })}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
      </View>
      <Image source={mulher} style={styles.mulher} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4CA33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ccc',
    padding: 20,
    borderRadius: 20,
    width: 300,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -20,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 6,
  },
  input: {
    flex: 1,
    margin: 5,
    height: 70,
    borderColor: 'black',
    borderRadius: 7,
    backgroundColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 40,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  mulher: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 300,
    width: 240,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#3c3939',
    marginBottom: 20,
  },
  subtitle1: {
    fontSize: 16,
    textAlign: 'center',
    color: '#3c3939',
    marginBottom: 40,
  },
});

export default VericacaoM;
 