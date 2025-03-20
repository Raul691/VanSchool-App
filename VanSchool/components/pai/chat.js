import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const data = [
  { id: '1', name: 'Helena Hills', message: 'Will head to the Help Center...', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: '2', name: 'Carlo Emilio', message: "Let's go", image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '3', name: 'Oscar Davis', message: 'Trueeeeee', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: '4', name: 'Daniel Jay Park', message: 'lol yeah, are you coming on the 13th?', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: '5', name: 'Mark Rojas', message: 'great catching up over dinner!!', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: '6', name: 'Giannis Constantinou', message: 'yep 🤙👏', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
  { id: '7', name: 'Briana Lewis', message: 'Would love to catch up.', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: '8', name: 'Sherry Roy', message: 'Jack needs to find a sitter for the dog...', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
];

const Chat = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate(`Chat${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.profileImage} />
      <View style={styles.chatText}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar conversa"
        placeholderTextColor="#888"
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    margin: 10,
    fontSize: 16,
    marginTop: 50
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatText: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  message: {
    fontSize: 14,
    color: '#888',
  },
});

export default Chat;