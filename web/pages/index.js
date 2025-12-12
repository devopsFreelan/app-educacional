import { useEffect, useState } from 'react';
import api from '../services/api';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get('/courses').then(res => setCourses(res.data));
  }, []);

  return (
    <div>
      <Header />
      <h1>Cursos Disponíveis</h1>
      {courses.map(course => <CourseCard key={course._id} course={course} />)}
    </div>
  );
}