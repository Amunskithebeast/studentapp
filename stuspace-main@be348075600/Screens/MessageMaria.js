import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageMaria = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', sender: 'Maria' },
    { id: '2', text: 'Hi Maria!', sender: 'user' },
    { id: '3', text: 'How are you?', sender: 'Maria' },
    { id: '4', text: 'I am good, thanks!', sender: 'user' },
    { id: '5', text: 'Would you like to grab a coffee?', sender: 'Maria' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const navigation = useNavigation();

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      const newMessageObj = {
        id: Math.random().toString(),
        text: newMessage,
        sender: 'user', // Replace with actual user identification logic
      };

      setMessages((prevMessages) => [...prevMessages, newMessageObj]);
      setNewMessage('');
    }
  };

  const startConversation = () => {
    navigation.navigate('MassageMaria'); // Navigate to MassageMaria screen
  };

  const renderMessageItem = ({ item }) => {
    // For simplicity, assuming sender is either 'user' or 'Maria'
    const isUser = item.sender === 'user';
    const profilePic = isUser ? require('../assets/images/Message1.png') : require('../assets/images/Message2.png');
    const senderName = isUser ? 'You' : 'Maria';

    return (
      <View style={isUser ? styles.userMessageContainer : styles.mariaMessageContainer}>
        <Image source={profilePic} style={styles.profilePic} />
        <View style={styles.messageContent}>
          <Text style={styles.senderName}>{senderName}</Text>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        inverted // To display the newest messages at the bottom
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  userMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  mariaMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
    justifyContent: 'flex-end', // Align Maria's messages to the right
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    maxWidth: '80%',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#E0E0E0',
  },
  senderName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginRight: 10,
  },
  startConversationText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default MessageMaria;