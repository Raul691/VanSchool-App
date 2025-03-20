import React from 'react'; 
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Perfil1 ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.icons}>
          <Image source={require('../../assets/motoristafoto.png')} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.profileName}>Luis Henrique</Text>
      </View>

      <View style={styles.menu}>
        <MenuItem text="Seus dados" iconName="person-outline" />
        <MenuItem text="Endereço" iconName="location-outline" />
        <MenuItem text="Denuncia" iconName="alert-circle-outline" />
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Homepage', { message: '' })}>
          <NavBarItem iconName="home" text="Início" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Chat')}>
          <NavBarItem iconName="chatbubble" text="Chat" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <NavBarItem iconName="person" text="Conta" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const MenuItem = ({ text, iconName }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Ionicons name={iconName} size={24} color="#fff" />
    <Text style={styles.menuText}>{text}</Text>
  </TouchableOpacity>
);

const NavBarItem = ({ iconName, text }) => (
  <TouchableOpacity style={styles.navBarItem}>
    <Ionicons
      name={iconName}
      size={24}
      color="black" 
    />
    <Text style={styles.navBarText}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FFD700',
    alignItems: 'center',
    paddingVertical: 32,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 25
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  menu: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  bottomNav: {
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
    zIndex: 10,
    marginTop: 352
  },
  navBarItem: {
    alignItems: 'center',
  },
  icons: {
    marginEnd: 1,
  },
  navBarText: {
    color: 'black', 
    fontSize: 12,
    marginTop: 5,
  },
});

export default Perfil1;