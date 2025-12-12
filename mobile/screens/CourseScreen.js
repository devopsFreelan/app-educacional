import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import api from '../services/api';
import Header from '../components/Header';

export default function CourseScreen({ route, navigation }) {
  const { id } = route.params;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    api.get(`/courses/${id}`).then(res => setCourse(res.data));
  }, [id]);

  if (!course) return <Text>Loading...</Text>;

  return (
    <View>
      <Header navigation={navigation} />
      <Text>{course.title}</Text>
      <Text>{course.description}</Text>
      <Text>Lições:</Text>
      {course.lessons.map(lesson => (
        <Button key={lesson._id} title={lesson.title} onPress={() => navigation.navigate('Lesson', { id: lesson._id })} />
      ))}
    </View>
  );
}