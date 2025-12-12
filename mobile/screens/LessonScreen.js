import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import api from '../services/api';
import Header from '../components/Header';

export default function LessonScreen({ route, navigation }) {
  const { id } = route.params;
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    api.get(`/lessons/${id}`).then(res => setLesson(res.data));
  }, [id]);

  if (!lesson) return <Text>Loading...</Text>;

  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Text>{lesson.title}</Text>
      <Text>{lesson.content}</Text>
    </ScrollView>
  );
}