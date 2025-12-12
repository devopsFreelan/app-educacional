import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (id) api.get(`/courses/${id}`).then(res => setCourse(res.data));
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h2>Lições</h2>
      {course.lessons.map(lesson => <div key={lesson._id}>{lesson.title}</div>)}
    </div>
  );
}