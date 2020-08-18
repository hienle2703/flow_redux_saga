// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import DetailsScreen from '../../screens/Details';
import Test from '../../screens/Test';


const Stack = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'unlock'
                : 'unlock';
            } else if (route.name === 'DetailsScreen') {
              iconName = focused ? 'unlock' : 'unlock';
            }
            else if (route.name === 'Test') {
              iconName = focused ? 'unlock' : 'unlock';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default Navigation;
