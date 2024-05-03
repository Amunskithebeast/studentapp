import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  // Sample user data
  const user = {
    name: 'John Doe',
    profilePicture: require('../assets/images/post1.png'), 
  };
 

  const handleLogout = () => {
    // Perform logout actions here
    // For example, navigate to the GetStarted screen
    navigation.navigate('GetStarted');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={user.profilePicture} style={styles.profilePicture} />
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50, 
  },
  profileContainer: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 110,
    height: 110,
    borderRadius: 75, 
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 7,
    paddingHorizontal: 25,
    backgroundColor: 'green',
    borderRadius: 45,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Profile;
