import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';



const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/stuspace.png')}
      />
      <View style={styles.connectText}>
        <Text style={styles.text}>Let’s connect</Text>
        <Text style={styles.text}>with each other</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 310,
    height: 310,
    borderRadius: 300, 
    marginBottom:40,
  },
  button: {
    backgroundColor: 'green', 
    padding: 15, 
    borderRadius: 45, 
    marginTop: 20, 
    width: 250,
   
  },
  buttonText: {
    color: 'rgba(245, 245, 245, 1)',
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center',
  },
  connectText:{
    alignItems: 'center', // Center the text with the image and button
    marginBottom: 40,
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10,

  },
});

export default GetStarted;

