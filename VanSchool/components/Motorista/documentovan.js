import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImagePicker} from 'react-native';
import logo from '../../assets/logo.png';
import documentovan from '../../assets/documentovan.png';

const DocumentoVan = ({ navigation }) => {

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
    <View style={styles.container}>
    <View style={styles.header}>
        <Image
        source={logo}  
        style={styles.logo}
      />
      </View>
      <Text style={styles.title}>Tire uma foto do documento: Certificado de Registo e Licenciamento de Veículo-CRLV</Text>
      <Text style={styles.subtitle}>Lembre-se, é preciso que: 1. A foto mostre todo o documento, como na imagem abaixo; 2. Todos os campos estejam legíveis; 3. A categoria do veículo apareça como
"Particular". Obs: o CRLV eletrônico é aceito regularmente.</Text>
      <Image
        source={documentovan}  
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Text style={styles.buttonText}>Tirar Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  header: {
    width: 420,
    height: 138,
    backgroundColor: '#F4CA33',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  subtitle: {
    fontSize: 19,
    color: '#808080',
    marginBottom: 20,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#F4CA33'
  },
  logo: {
    width: 200,
    height: 40,
    marginTop: 50,
  }, 
  image: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F8A400',
    padding: 15,
    width: 350,
    borderRadius: 10,
    marginTop:35,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DocumentoVan;