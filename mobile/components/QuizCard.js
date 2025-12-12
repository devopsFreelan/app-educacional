import React from 'react';
import { View, Text } from 'react-native';

export default function QuizCard({ quiz }) {
  return (
    <View>
      <Text>{quiz.title}</Text>
    </View>
  );
}