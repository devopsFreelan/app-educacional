import React from 'react';
import { View, Button } from 'react-native';

export default function Header({ navigation }) {
  return (
    <View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}