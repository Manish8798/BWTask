/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text, Alert, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DiscoverScreen from './screens/DiscoverScreen';
import LocalScreen from './screens/LocalScreen';
import AddScreen from './screens/AddScreen';
import AlertScreen from './screens/AlertScreen';
import ProfileScreen from './screens/ProfileScreen';
import BWstoryHeader from './components/Header';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      {/* <StatusBar barStyle="light-content" backgroundColor="#1e3440" /> */}
      <View style={{height: 40, backgroundColor: '#10343F'}}></View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: true,
            header: () => <BWstoryHeader />,
            tabBarShowLabel: true,
            // tabBarStyle: styles.tabBar,
            // tabBarLabelStyle: styles.boldLabel,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.name) {
                case 'Discover':
                  iconName = 'compass';
                  break;
                case 'Local':
                  iconName = 'location-arrow';
                  break;
                case 'Add':
                  iconName = 'plus-circle';
                  break;
                case 'Alert':
                  iconName = 'bell-o';
                  break;
                case 'Profile':
                  iconName = 'user-circle';
                  break;
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1a3b5d',
            tabBarInactiveTintColor: '#B2BEB5',
          })}>
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Local" component={LocalScreen} />
          <Tab.Screen name="Add" component={AddScreen} />
          <Tab.Screen name="Alert" component={AlertScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
