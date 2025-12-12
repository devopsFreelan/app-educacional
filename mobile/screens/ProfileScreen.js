import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';
import Header from '../components/Header';

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = 'token'; // from storage
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    api.get('/users/me').then(res => setUser(res.data));
  }, []);

  if (!user) return <Text>Please login</Text>;

  return (
    <View>
      <Header navigation={navigation} />
      <Text>Perfil</Text>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}