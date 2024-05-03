import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Image source={image} style={styles.buttonImage} />
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const MarketBookSection = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  // Define the data structure for sale goods
  const saleGoodsData = [
    { id: '1', name: 'Book A', price: '$10', image: require('../assets/images/Book1.png') },
    { id: '2', name: 'Book B', price: '$15', image: require('../assets/images/Book2.png') },
    { id: '3', name: 'Book C', price: '$20', image: require('../assets/images/Book3.png') },
    //{ id: '4', name: 'Book A', price: '$10', image: require('..assets/images/Book4.png') },
    { id: '5', name: 'Book B', price: '$15', image: require('../assets/images/Book5.png') },
    { id: '6', name: 'Book C', price: '$20', image: require('../assets/images/Book1.png') },
    { id: '7', name: 'Book A', price: '$10', image: require('../assets/images/Book2.png') },
    { id: '8', name: 'Book B', price: '$15', image: require('../assets/images/Book3.png') },
    { id: '9', name: 'Book C', price: '$20', image: require('../assets/images/Book4.png') },
    { id: '10', name: 'Book A', price: '$10', image: require('../assets/images/Book5.png') },
    { id: '11', name: 'Book B', price: '$15', image: require('../assets/images/Book1.png') },
    // { id: '12', name: 'Book C', price: '$20', image: require('../assets/images/Book2.png') },
    // Add more sale goods as needed
  ];

  // Render each sale goods item
  const renderSaleGoodsItem = ({ item }) => (
    <TouchableOpacity style={styles.saleGoodsItem}>
      <Image source={item.image} style={styles.saleGoodsImage} />
      <View style={styles.saleGoodsTextContainer}>
        <Text style={styles.saleGoodsName}>{item.name}</Text>
        <Text style={styles.saleGoodsPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topButtons}>
        <CustomButton
          title="Books"
          image={require('../assets/images/Books.png')}
          onPress={() => navigateToScreen('MarketBookSection')}
        />
        <CustomButton
          title="Electronic"
          image={require('../assets/images/Electronic.png')}
          onPress={() => navigateToScreen('MarketElectronicSection')}
        />
        <CustomButton
          title="Others"
          image={require('../assets/images/Others.png')}
          onPress={() => navigateToScreen('MarketOther')}
        />
      </View>

      {/* Sale goods section */}
      <FlatList
        data={saleGoodsData}
        renderItem={renderSaleGoodsItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display sale goods items in two columns
        contentContainerStyle={styles.saleGoodsList}
      />

      <View style={styles.bottomButtons}>
        <CustomButton
          //title="Home"
          image={require('../assets/images/Home.png')}
          onPress={() => navigateToScreen('Home')}
        />
        <CustomButton
          //title="Market"
          image={require('../assets/images/Market.png')}
          onPress={() => navigateToScreen('MarketBookSection')}
        />
        <CustomButton
          //title="Add"
          image={require('../assets/images/Add.png')}
          onPress={() => navigateToScreen('PostToMarket')}
        />
        <CustomButton
          //title="Message"
          image={require('../assets/images/Message.png')}
          onPress={() => navigateToScreen('MessageScreen')}
        />
        <CustomButton
          //title="Group"
          image={require('../assets/images/Group.png')}
          onPress={() => navigateToScreen('MyGroup')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
    flexGrow: 1,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 45,
  },
 
  saleGoodsList: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    //flexDirection: 'row',
    //flexWrap: 'wrap',
    
  },
  saleGoodsItem: {
    width: '47%', // Adjust width to fit two columns with spacing
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    //backgroundColor: '#FFFFFF', // Add a background color to see the items
    marginHorizontal: '2.5%',
    
  },
  saleGoodsImage: {
    width: 150, // Adjust image size as needed
    height: 150, // Adjust image size as needed
    marginBottom: 5,
  },
  saleGoodsTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  saleGoodsName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  saleGoodsPrice: {
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
  },
  buttonContent: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 70,
    height: 70,
    marginBottom: 5,
    borderRadius: 55,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default MarketBookSection;