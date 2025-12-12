import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import api from '../services/api';
import Header from '../components/Header';

export default function QuizScreen({ route, navigation }) {
  const { id } = route.params;
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    api.get(`/quizzes/${id}`).then(res => setQuiz(res.data));
  }, [id]);

  if (!quiz) return <Text>Loading...</Text>;

  return (
    <View>
      <Header navigation={navigation} />
      <Text>{quiz.title}</Text>
      {quiz.questions.map((q, i) => (
        <View key={i}>
          <Text>{q.question}</Text>
          {q.options.map((opt, j) => <Button key={j} title={opt} onPress={() => {}} />)}
        </View>
      ))}
    </View>
  );
}