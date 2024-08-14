import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import './TrailSlider.css'; // Custom styles for the slider

const trails = [
  {
    title: '북한산',
    course: '북한산성코스',
    stars: 3,
    recommendation: '추천 등산로',
    image: './dummy/back.png',
    difficulty: '중',
    length: '3.4km',
    time: '2.4h ~ 3h',
  },
  {
    title: '내연산',
    course: '보경사 코스',
    stars: 5,
    recommendation: '가장 인기 많은 등산로',
    image: './dummy/back.png',
    difficulty: '상',
    length: '13.4km',
    time: '5h ~ 6h',
  },
  {
    title: '환호해맞이산',
    course: '보경사 코스',
    stars: 2,
    recommendation: '나와 가장 가까운 등산로',
    image: './dummy/back.png',
    difficulty: '하',
    length: '4.4km',
    time: '1h ~ 2h',
  },
  
];

const TrailSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500 }}
      loop={true}
      modules={[Pagination, Autoplay]}
      style={{ width: '100%', height: 'auto' }}
    >
      {trails.map((trail, index) => (
        <SwiperSlide key={index}>
          <div className="hike-slider-card">
            <img src={trail.image} alt={trail.title} className="hike-slider-image" />
            <div className="hike-slider-content">
              <p className="hike-slider-recommendation">{trail.recommendation}</p>
              <div className="hike-slider-main-info">
                <div>
                  <p className="hike-slider-title">{trail.title}</p>
                  <p className="hike-slider-course">
                    {trail.course} &nbsp; 
                    {[...Array(trail.stars)].map((_, i) => (
                      <span key={i} className="hike-slider-star">★</span>
                    ))}
                  </p>
                </div>
                <div className="hike-slider-info-container">
                  <div className="hike-slider-info">난이도: {trail.difficulty}</div>
                  <div className="hike-slider-info">코스길이: {trail.length}</div>
                  <div className="hike-slider-info">소요시간: {trail.time}</div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TrailSlider;
