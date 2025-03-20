import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
 
function Notificacoes ({ navigation }) {
  return (
<View style={styles.container}>
<Text style={styles.header}>Notificações</Text>
<View style={styles.notificationBox}>
<Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} // URL para a imagem do usuário
          style={styles.profileImage}
        />
<View style={styles.notificationContent}>
<Text style={styles.userName}>Tio Valter</Text>
<Text style={styles.notificationText}>
            Dia 14, não irei conseguir efetuar o percurso pois estarei de greve
</Text>
</View>
</View>
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  notificationBox: {
    flexDirection: 'row',
    backgroundColor: '#FFCC00',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationText: {
    fontSize: 14,
    color: '#000',
  },
});
 
export default Notificacoes;