import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImagePicker, ScrollView} from 'react-native';
import logo from '../../assets/logo.png';

const Termos = ({ navigation }) => {

  const longText= 'Criar os Termos e Condições. Termos e Condições são um conjunto de termos legais definidos pelo proprietário de um site. Eles estabelecem os Termos e Condições que regem as atividades dos visitantes no referido site e a relação entre os visitantes e o proprietário do site. Os termos devem ser definidos de acordo com as necessidades específicas e a natureza de cada site. Por exemplo, um site que ofereça produtos a clientes em transações de comércio eletrônico exige Termos que sejam diferentes dos Termos de um site que fornecem apenas informações. Os Termos são um acordo entre o proprietário do site e os usuários do site; eles detalham as políticas e procedimentos realizados pelo site. De muitas maneiras, os Termos fornecem ao proprietário do site a capacidade de se proteger de possíveis exposições legais. Além disso, há obrigações legais de notificar os usuários do site sobre essas atividades e, em muitos casos, os Termos são o local para isso.'

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Image
        source={logo}  
        style={styles.logo}
      />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        {longText}
      </Text>
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomepageMotorista', { message: '' })}>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding:1
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
  text: {
    lineHeight: 24,
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

export default Termos;