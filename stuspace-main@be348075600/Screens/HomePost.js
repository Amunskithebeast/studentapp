import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const HomePost = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  const selectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      console.log('Permission to access the camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (result.canceled === false) {
      if (result.assets && result.assets.length > 0) {
        const selectedAsset = result.assets[0]; 
        const source = { uri: selectedAsset.uri };

        setSelectedImage(source);
      }
    }
  };

  const getStarted = () => {
    if (selectedImage) {
      const newPost = {
        id: new Date().getTime().toString(),
        username: 'Stanley Kapapa', 
        image: selectedImage,
      };

      // Navigate to the Home screen and pass the new post
      navigation.navigate('Home', { newPost });
    } else {
      // Handle case where no image is selected
      console.warn('Please select an image before getting started.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>What's Your New Image?</Text>
      <TouchableOpacity style={styles.addButton} onPress={selectImage}>
        <Text style={styles.buttonText}>Add Image</Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image source={selectedImage} style={{ width: 200, height: 200 }} />
      )}
      <TouchableOpacity style={styles.getStartedButton} onPress={getStarted}>
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
  heading: {
    fontSize: 34,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 20,
    backgroundColor: 'gray',
    paddingVertical: 90,
    paddingHorizontal: 70,
    borderRadius: 25,
  },
  getStartedButton: {
    marginTop: 20,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HomePost;
