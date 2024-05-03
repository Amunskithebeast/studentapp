import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const groupsData = [
  {
    id: 1,
    name: 'Group 1',
    members: [
      { id: 1, profileImage: require('../assets/images/profile1.png') },
      { id: 2, profileImage: require('../assets/images/profile2.png') },
      { id: 3, profileImage: require('../assets/images/profile1.png') },
      { id: 4, profileImage: require('../assets/images/profile2.png') },
      // Add more members as needed
    ]
  },
  {
    id: 2,
    name: 'Group 2',
    members: [
      { id: 5, profileImage: require('../assets/images/profile3.png') },
      { id: 6, profileImage: require('../assets/images/profile4.png') },
      // Add more members as needed
    ]
  },
  {
    id: 3,
    name: 'Group 3',
    members: [
      { id: 7, profileImage: require('../assets/images/profile5.png') },
      { id: 8, profileImage: require('../assets/images/profile6.png') },
      // Add more members as needed
    ]
  },
  {
    id: 4,
    name: 'Group 4',
    members: [
      { id: 9, profileImage: require('../assets/images/profile7.png') },
      { id: 10, profileImage: require('../assets/images/profile8.png') },
      // Add more members as needed
    ]
  },
  {
    id: 5,
    name: 'Group 5',
    members: [
      { id: 11, profileImage: require('../assets/images/profile9.png') },
      { id: 12, profileImage: require('../assets/images/profile10.png') },
      // Add more members as needed
    ]
  },
  {
    id: 6,
    name: 'Group 6',
    members: [
      { id: 13, profileImage: require('../assets/images/profile11.png') },
      { id: 14, profileImage: require('../assets/images/profile12.png') },
      // Add more members as needed
    ]
  },
];

const CustomButton = ({ title, image, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image source={image} style={styles.buttonImage} />
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const GroupItem = ({ group }) => (
  <View style={styles.groupContainer}>
    <View style={styles.groupItem}>
      <Text style={styles.groupName}>{group.name}</Text>
      <FlatList
        horizontal
        data={group.members}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.memberItem}>
            <Image source={item.profileImage} style={styles.memberImage} />
          </View>
        )}
      />
      <Text>Participants: {group.members.length}</Text>
    </View>
  </View>
);

const MyGroup = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  // State to toggle the key prop of FlatList for forcing a fresh render
  const [toggleFlatListKey, setToggleFlatListKey] = useState(false);

  // Function to toggle the key prop
  const toggleFlatListRender = () => {
    setToggleFlatListKey((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topButtonsContainer}>
        {/* Add your top buttons here */}
        <CustomButton title="People" onPress={() => navigateToScreen('GroupPeople')} />
        <CustomButton title="My Group" onPress={() => navigateToScreen('MyGroup')} />
        <CustomButton title="Room" onPress={() => navigateToScreen('Room')} />
      </View>

      <View style={styles.groupList}>
        <FlatList
          key={toggleFlatListKey ? 'refreshedKey' : 'originalKey'} // Unique key prop for forcing a fresh render
          data={groupsData}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Arrange in 2 columns
          renderItem={({ item }) => <GroupItem group={item} />}
        />
      </View>

      <View style={styles.bottomButtonsContainer}>
        <View style={styles.buttonBox}>
          <CustomButton image={require('../assets/images/Home.png')} onPress={() => navigateToScreen('Home')} />
          <CustomButton image={require('../assets/images/Market.png')} onPress={() => navigateToScreen('MarketBookSection')} />
          <CustomButton image={require('../assets/images/Add.png')} onPress={() => navigateToScreen('NewGroup')} />
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
  groupList: {
    flex: 1,
    alignSelf: 'stretch',
  },
  groupItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
  groupName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  memberItem: {
    alignItems: 'center',
    marginRight: 10,
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  bottomButtonsContainer: {
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
  groupContainer: {
    flex: 1,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 45,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    width: '45%', // Adjust width to accommodate 2 columns
  },
});

export default MyGroup;

