import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/pages/CourseDetailPage.css';

const todayCourses = [
  {
    id: 1,
    name: '북한산 둘레길',
    location: '서울, 대한민국',
    image: '/back.png',
    description: '서울 도심 속의 아름다운 산책로',
  },
  {
    id: 2,
    name: '설악산 소공원',
    location: '강원도, 대한민국',
    image: '/back.png',
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
