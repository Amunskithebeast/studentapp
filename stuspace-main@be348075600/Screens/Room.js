import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

const CustomButton = ({ title, image, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {image && <Image source={image} style={styles.buttonImage} />}
    {title && <Text style={styles.buttonText}>{title}</Text>}
  </TouchableOpacity>
);

const Rooms = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handlePress = async () => {
    const url = 'https://tp.educloud.no/uia/timeplan/?id%5B%5D=FYS002%2C1&id%5B%5D=IKT105%2C1&id%5B%5D=IKT202%2C1&id%5B%5D=IKT204%2C1&id%5B%5D=IKT205%2C1&id%5B%5D=IKT218%2C1&id%5B%5D=ING200%2C1&id%5B%5D=ING201%2C1&id%5B%5D=MA-179%2C1&type=course&week=01&weekTo=18&ar=2024&campus=CG&hide_old=1';
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Error opening URL: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topButtonsContainer}>
        {/* Add your top buttons here */}
        <CustomButton title="People" onPress={() => navigateToScreen('GroupPeople')} />
        <CustomButton title="My Group" onPress={() => navigateToScreen('MyGroup')} />
        <CustomButton title="Room" onPress={() => navigateToScreen('Room')} />
      </View>
      
      <View style={styles.bottomButtonsContainer}>
        <View style={styles.buttonBox}>
          <CustomButton image={require('../assets/images/Home.png')} onPress={() => navigateToScreen('Home')} />
          <CustomButton image={require('../assets/images/Market.png')} onPress={() => navigateToScreen('MarketBookSection')} />
          <CustomButton image={require('../assets/images/Add.png')} onPress={handlePress} />
          <CustomButton  image={require('../assets/images/Message.png')} onPress={() => navigateToScreen('MessageScreen')} />
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
    //alignItems: 'center',
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
});

export default Rooms;
