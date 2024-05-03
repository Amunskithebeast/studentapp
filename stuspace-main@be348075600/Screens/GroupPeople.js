import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const CustomButton = ({ title, image, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image source={image} style={styles.buttonImage} />
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// Sample data for users
const usersData = [
  { id: '1', name: 'John Doe', profileImage: require('../assets/images/profile1.png') },
  { id: '2', name: 'Jane Smith', profileImage: require('../assets/images/profile2.png') },
  { id: '3', name: 'Alice Johnson', profileImage: require('../assets/images/profile3.png') },
  { id: '4', name: 'Bob Brown', profileImage: require('../assets/images/profile4.png') },
  { id: '5', name: 'Emma Davis', profileImage: require('../assets/images/profile5.png') },
  { id: '6', name: 'Michael Wilson', profileImage: require('../assets/images/profile6.png') },
  { id: '7', name: 'Olivia Taylor', profileImage: require('../assets/images/profile7.png') },
  { id: '8', name: 'William Martinez', profileImage: require('../assets/images/profile8.png') },
  { id: '9', name: 'Sophia Anderson', profileImage: require('../assets/images/profile9.png') },
  { id: '10', name: 'James Rodriguez', profileImage: require('../assets/images/profile10.png') },
  { id: '11', name: 'Ella Thompson', profileImage: require('../assets/images/profile11.png') },
  { id: '12', name: 'David Moore', profileImage: require('../assets/images/profile12.png') },
];

const UserItem = ({ name, profileImage }) => (
  <View style={styles.userItem}>
    <Text>{name}</Text>
    <Image source={profileImage} style={styles.profileImage} />
  </View>
);

const GroupPeople = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topButtonsContainer}>
        {/* Add your top buttons here */}
        <CustomButton title="People" onPress={() => navigateToScreen('GroupPeople')} />
        <CustomButton title="My Group" onPress={() => navigateToScreen('MyGroup')} />
        <CustomButton title="Room" onPress={() => navigateToScreen('Room')} />
      </View>

      <FlatList
        data={usersData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserItem name={item.name} profileImage={item.profileImage} />
        )}
      />
      
      <View style={styles.bottomButtonsContainer}>
        <View style={styles.buttonBox}>
          <CustomButton image={require('../assets/images/Home.png')} onPress={() => navigateToScreen('Home')} />
          <CustomButton image={require('../assets/images/Market.png')} onPress={() => navigateToScreen('MarketBookSection')} />
          <CustomButton image={require('../assets/images/Add.png')} onPress={() => navigateToScreen('HomePost')} />
          <CustomButton image={require('../assets/images/Message.png')} onPress={() => navigateToScreen('MessageScreen')} />
          <CustomButton image={require('../assets/images/Group.png')} onPress={() => navigateToScreen('MyGroup')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'stretch', 
  },
  bottomButtonsContainer: {
    flex: 1,
    justifyContent: 'flex-end', 
    marginBottom: 20,
  },
  buttonBox: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 350,
    height: 70,
  },
  button: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  userItem: {
    flexDirection: 'row-reverse', // Change to row-reverse
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 45,
  },
});

export default GroupPeople;
