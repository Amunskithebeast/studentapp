import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageScreen = () => {
  const navigation = useNavigation();

  // Dummy data for messages
  const messages = [
    { id: '1', text: 'Hey there!', sender: 'John' },
    { id: '2', text: 'Hi! How are you?', sender: 'Jane' },
    { id: '3', text: 'I\'m good, thanks!', sender: 'John' },
    { id: '4', text: 'Would you like to grab a coffee sometime?', sender: 'Jane' },
    { id: '5', text: 'Sure, that sounds great!', sender: 'John' },
  ];

  // Navigate to chat screen
  const goToChat = (sender) => {
    navigation.navigate('MessageMaria', { sender });
  };

  // Render individual message item
  const renderMessageItem = ({ item }) => (
    <TouchableOpacity onPress={() => goToChat(item.sender)} style={styles.messageItem}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  messageItem: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default MessageScreen;
