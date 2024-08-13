import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodayCourseSection.css';

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

const TodayCourseSection = () => {
  const navigate = useNavigate();

  return (
    <div className="today-course-section">
      <h3>오늘의 추천코스</h3>
      <div className="course-grid">
        {todayCourses.map((course) => (
          <div 
            key={course.id} 
            className="course-card"
            onClick={() => navigate(`/course/${course.id}`)} // 코스를 클릭 시 해당 ID로 이동
            style={{ cursor: 'pointer' }}
          >
            <img src={course.image} alt={course.name} className="course-image" />
            <div className="course-info">
              <div>
                <h4>{course.name}</h4>
                <p>{course.location}</p>
              </div>
              <button 
                className="view-more"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/course/${course.id}`);
                }}
              >
                더보기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayCourseSection;
