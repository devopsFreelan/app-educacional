import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CourseCard({ course, navigation }) {
  return (
    <View>
      <Text>{course.title}</Text>
      <Text>{course.description}</Text>
      <Button title="Ver Curso" onPress={() => navigation.navigate('Course', { id: course._id })} />
    </View>
  );
}