import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home'; 
import HomePost from './Screens/HomePost'; 
import MarketBookSection from './Screens/MarketBookSection'; 
import MarketElectronicSection from './Screens/MarketElectronicSection'; 
import MarketOther from './Screens/MarketOther'; 
import MessageScreen from './Screens/MessageScreen';
import MyGroup from './Screens/MyGroup';
import PostToMarket from './Screens/PostToMarket';
import MessageMaria from  './Screens/MessageMaria';
import Profile from './Screens/Profile';
import NewGroup from './Screens/NewGroup';
import GroupChat from './Screens/GroupChat';
import GroupPeople from './Screens/GroupPeople';
import Room from './Screens/Room';
import GetStarted from './Screens/GetStarted';
import LogIn from './Screens/LogIn';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomePost" component={HomePost} />
        <Stack.Screen name="MarketBookSection" component={MarketBookSection} />
        <Stack.Screen name="MarketElectronicSection" component={MarketElectronicSection} />
        <Stack.Screen name="MarketOther" component={MarketOther} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="PostToMarket" component={PostToMarket} />
        <Stack.Screen name="MessageMaria" component={MessageMaria} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="NewGroup" component={NewGroup} />
        <Stack.Screen name="GroupChat" component={GroupChat} />
        <Stack.Screen name="GroupPeople" component={GroupPeople} />
        <Stack.Screen name="Room" component={Room} />
        <Stack.Screen name="MyGroup" component={MyGroup} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="LogIn" component={LogIn} />
        

       
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
