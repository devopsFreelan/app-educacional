import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../services/api';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';

export default function HomeScreen({ navigation }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get('/courses').then(res => setCourses(res.data));
  }, []);

  return (
    <View>
      <Header navigation={navigation} />
      <Text>Cursos Disponíveis</Text>
      <FlatList
        data={courses}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <CourseCard course={item} navigation={navigation} />}
      />
    </View>
  );
}