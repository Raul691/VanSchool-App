import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


function HomepageMotorista ({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('NotificacoesM')}>
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.notificacao} />
        </TouchableOpacity>
      </View>

      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Plano</Text>
        <Text style={styles.paymentAmount}>R$ 20,00</Text>
        <TouchableOpacity style={styles.paymentButton} onPress={() => navigation.navigate('PagamentosM')}>
        <Text style={styles.  paymentButtonText}>Pagar</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.categoriesRow}>
          <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('RastrearM')}>
            <Category icon="car" label="Rastrear" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Calendario')}>
            <Category icon="calendar" label="Faltas" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('PagamentosM')}>
            <Category icon="wallet" label="Plano" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.driverContainer}>
        <Text style={styles.sectionTitle}>Alunos para buscar</Text>
        <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Perfil1')}>
          <Image source={require('../../assets/motoristafoto.png')} style={styles.tio} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.icons}>
          <NavItem icon="home" label="Início" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Chat')}>
          <NavItem icon="chatbubble" label="Chat" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('PerfilM')}>
          <NavItem icon="person" label="Conta"  />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function Category({ icon, label }) {
  return (
    <View style={styles.category}>
      <Ionicons name={icon} size={30} color="black" />
      <Text>{label}</Text>
    </View>
  );
}

function NavItem({ icon, label }) {
  return (
    <View style={styles.navItem}>
      <Ionicons name={icon} size={24} color="black" />
      <Text>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: '75%',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  icons: {
    marginEnd: 1,
  },
  notificacao: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  paymentContainer: {
    backgroundColor: '#FFD700',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  paymentText: {
    fontSize: 18,
    color: '#000',
  },
  paymentAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  paymentButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  paymentButtonText: {
    textAlign: 'center',
    color: '#FFD700',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  driverContainer: {
    marginTop: 20,
  },
  tio: {
    marginLeft: 3,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
bottomNav: {
    position: 'fixed',
    top: 175,
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
},
  navItem: {
    alignItems: 'center',
  },
});

export default HomepageMotorista;