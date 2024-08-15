import React from 'react';
import './TrailList.css'; // Custom styles for the list
import { FaMapMarkerAlt } from 'react-icons/fa';  // 아이콘 추가

const TrailList = ({ trails }) => {
  return (
    <div className="trail-list">
      {trails.length > 0 ? (
        trails.map((trail, index) => (
          <div key={index} className="trail-item">
            <img src={trail.image} alt={trail.name} className="trail-image" />
            <div className="trail-content">
              <div className="trail-locate">
                <FaMapMarkerAlt className="trail-locate-icon" />
                <p className="trail-locate">
                  {trail.region} {trail.city} {trail.locationDetail}
                </p>
              </div>
              <div className="trail-main-info">
                <div>
                  <p className="trail-name">{trail.title}</p>
                  <p className="trail-course">
                    {trail.course} &nbsp; 
                    {[...Array(trail.stars)].map((_, i) => (
                      <span key={i} className="trail-star">★</span>
                    ))}
                  </p>
                </div>
                <div className="trail-info-container">
                  <div className="trail-info">난이도: {trail.difficulty}</div>
                  <div className="trail-info">코스길이: {trail.length}</div>
                  <div className="trail-info">소요시간: {trail.time}</div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="trail-no-data">선택한 지역에 해당하는 등산로가 없습니다.</p>
      )}
    </div>
  );
};

export default TrailList;
