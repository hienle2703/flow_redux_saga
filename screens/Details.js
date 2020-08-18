import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function DetailsScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Detail Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go to Cái Kia</Text>
      </TouchableOpacity>
    </View>
  );
}
export default DetailsScreen;
