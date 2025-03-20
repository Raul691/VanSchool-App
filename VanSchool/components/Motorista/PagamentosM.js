import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function PagamentosM ({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.header}>Plano</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        O valor do plano é de R$20,00
      </Text>

      {/* Cartão */}
      <View style={styles.card}>
        <Text style={styles.price}>R$ 20,00</Text>
        <Text style={styles.perMonth}>POR MÊS</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>COMECE JÁ</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de seleção */}
      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectButtonText}>SELECIONAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 35
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
  card: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  perMonth: {
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  selectButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PagamentosM;