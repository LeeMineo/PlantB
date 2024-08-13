import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/pages/CourseDetailPage.css';

const todayCourses = [
  {
    id: 1,
    name: '북한산 둘레길',
    location: '서울, 대한민국',
    image: 'https://i.namu.wiki/i/WKFzTxc1jzeAj1SUvxKWWl9Eum9zxo3U3Gj2evgX5HFt0kgPU3-mqckZO6j4h0lGqMtxr_a99QmZR_IsjZFc88hPf6DiG9zAZ9yeHPTWESIW7xO_buA-sl1MO5mC9AI3cNvGZxo2nhAJrfCM-8nebw.webp',
    description: '서울 도심 속의 아름다운 산책로',
  },
  {
    id: 2,
    name: '설악산 소공원',
    location: '강원도, 대한민국',
    image: 'https://i.namu.wiki/i/_uG8G4C8Gf0q6J-Ur2tNaAyzec2V-yYQCvrJ3tEPye2VTgiQunfANNAdkdjxFRuJzlTYJtiU-oasDw7206HsJVG5nkk63r3Y5MlJjmymNqwpMTGWqWu3QtYgy_bS0NcFKt3cb4QnftftDC4AhuUbcw.webp',
    description: '장엄한 자연 경관이 돋보이는 등산 코스',
  },
];

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const course = todayCourses.find(course => course.id === parseInt(courseId));

  if (!course) {
    return <div>해당 코스를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="course-detail-page">
      <h1>{course.name}</h1>
      <img src={course.image} alt={course.name} className="course-detail-image" />
      <p className="course-detail-location">{course.location}</p>
      <p className="course-detail-description">{course.description}</p>
    </div>
  );
};

export default CourseDetailPage;
