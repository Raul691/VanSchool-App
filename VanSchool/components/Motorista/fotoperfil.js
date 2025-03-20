import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import perfil from '../../assets/fotoperfil.png'
import * as ImagePicker from 'expo-image-picker';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';


function FotoPerfil ({ navigation }) {
  const [image, setImage] = useState(null);

  const takePicture = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permissão para acessar a câmera é necessária!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        source={logo}  
        style={styles.logo}
      />
      </View>
    </View>
      <View style={styles.header1}>
        <Text style={styles.title}>Tire sua foto de perfil</Text>
        <Text style={styles.subtitle}>
          Sua foto de perfil ajuda as pessoas a reconhecerem você. Não é possível alterar a foto do perfil depois de enviá-la.
        </Text>
      </View>

      <View style={styles.instructions}>
        <Text style={styles.instructionText}>1. Fique de frente para a câmera e deixe os olhos e boca visíveis.</Text>
        <Text style={styles.instructionText}>2. Confira se a foto está nítida, bem iluminada e sem reflexos.</Text>
        <Text style={styles.instructionText}>3. Não fotografe outra foto, não use filtros nem retoque a imagem.</Text>
        <Text style={styles.instructionText}>Como na imagem a seguir:</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
        source={perfil}  
        style={styles.profileImage}
      />
      </View>

      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Text style={styles.buttonText}>Tirar Foto</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
  },
  header: {
    width: 395,
    height: 138,
    backgroundColor: '#F4CA33',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    marginTop: -60,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8A400',
    marginTop: 2-0,
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
    color: '#555',
  },
  instructions: {
    marginTop: 20,
  },
  instructionText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    marginLeft: 20,
  },
  imageContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 70,
  },
  button: {
    backgroundColor: '#F8A400',
    padding: 15,
    width: 350,
    marginLeft: 30,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FotoPerfil;