import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
      }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailsScreen');
        }}>
        <Text>Go to Cái Kia</Text>
      </TouchableOpacity>
    </View>
  );
}
export default HomeScreen;
