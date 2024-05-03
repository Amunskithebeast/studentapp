import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CustomButton = ({ image, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image source={image} style={styles.buttonImage} />
  </TouchableOpacity>
);

const CustomSettingsButton = ({ onPress }) => (
  <TouchableOpacity style={styles.settingsButton} onPress={onPress}>
    <Image source={require('../assets/images/Settings.png')} style={styles.settingsImage} />
  </TouchableOpacity>
);

const FeedPost = ({ post }) => {
  return (
    <View style={styles.feedPostContainer}>
      <Text>{post.username}</Text>
      <Image source={post.image} style={styles.feedPostImage} />
      {/* Add other post details as needed */}
    </View>
  );
};

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedImage = route.params?.newPost?.image;
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(() => {
    // Check if a new post is received from the HomePost screen
    if (selectedImage) {
      const newPost = {
        id: new Date().getTime().toString(),
        username: 'Stanley Kapapa',
        image: selectedImage,
      };

      // Add the new post to the feedPosts array
      setFeedPosts((prevPosts) => [newPost, ...prevPosts]);
    }

    // Add some predefined feed posts
    const initialPosts = [
      {
        id: '1',
        username: 'John Doe',
        image: require('../assets/images/post1.png'),
      },
      {
        id: '2',
        username: 'Jane Smith',
        image: require('../assets/images/post2.png'),
      },
      {
        id: '3',
        username: 'Sali Jumaa',
        image: require('../assets/images/post3.png'),
      },
      {
        id: '4',
        username: 'Sofi Munga',
        image: require('../assets/images/post4.png'),
      },
      {
        id: '5',
        username: 'Joy Mumba',
        image: require('../assets/images/post1.png'),
      },
      {
        id: '6',
        username: 'Dommy Munga',
        image: require('../assets/images/post2.png'),
      },
      // Add more initial posts as needed
    ];

    setFeedPosts((prevPosts) => [...prevPosts, ...initialPosts]);
  }, [selectedImage]);

  const navigateToScreen = (screenName) => {
    if (screenName === 'Home') {
      navigation.navigate('Home');
    } else if (screenName === 'Market') {
      navigation.navigate('MarketBookSection');
    } else if (screenName === 'Add') {
      navigation.navigate('HomePost');
    } else if (screenName === 'Message') {
      navigation.navigate('MessageScreen');
    } else if (screenName === 'Group') {
      navigation.navigate('MyGroup');
    } else {
      console.error('Undefined screen:', screenName);
    }
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile'); // Navigate to Profile screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.discoverText}>Discover</Text>
        <Text style={styles.newTodayText}>WHAT'S NEW TODAY</Text>
      </View>

      <FlatList
        data={feedPosts}
        keyExtractor={(item, index) => item.id + index} // Concatenate id with index to ensure uniqueness
        renderItem={({ item }) => (
          <FeedPost
            post={item}
          />
        )}
        style={styles.feedList}
      />

      <CustomSettingsButton onPress={navigateToProfile} />

      <View style={styles.buttonBox}>
        <CustomButton
          image={require('../assets/images/Home.png')}
          onPress={() => navigateToScreen('Home')}
        />
        <CustomButton
          image={require('../assets/images/Market.png')}
          onPress={() => navigateToScreen('Market')}
        />
        <CustomButton
          image={require('../assets/images/Add.png')}
          onPress={() => navigateToScreen('Add')}
        />
        <CustomButton
          image={require('../assets/images/Message.png')}
          onPress={() => navigateToScreen('Message')}
        />
        <CustomButton
          image={require('../assets/images/Group.png')}
          onPress={() => navigateToScreen('Group')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '90%',
    marginBottom: -300,  // Adjusted marginBottom value
    marginRight: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  settingsButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  settingsImage: {
    width: 30,
    height: 30,
  },
  buttonBox: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  discoverText: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
  },
  newTodayText: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
  },
  selectedImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedImageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedImage: {
    width: 200,
    height: 200,
  },
  feedPostContainer: {
    marginBottom: 5,
    paddingVertical: 20,
  },
  feedPostImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 
    1,
  },
  feedList: {
    flex: 1,
    marginVertical: 10,
  },
});

export default Home;

