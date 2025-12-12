import Link from 'next/link';

export default function CourseCard({ course }) {
  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <Link href={`/courses/${course._id}`}>Ver Curso</Link>
    </div>
  );
}