// TrailSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import './TrailSlider.css'; // Custom styles for the slider
import trails from '../../data/trailsData'; // trailsData.js에서 데이터 가져오기

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
