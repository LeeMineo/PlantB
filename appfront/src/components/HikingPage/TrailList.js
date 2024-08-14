// TrailList.js
import React from 'react';
import './TrailList.css';

const TrailList = ({ trails }) => {
  return (
    <div className="trail-list">
      {trails.length > 0 ? (
        trails.map((trail, index) => (
          <div key={index} className="trail-item">
            <h3 className="trail-name">{trail.name}</h3>
            <p className="trail-detail">난이도: {trail.difficulty}</p>
            <p className="trail-detail">코스길이: {trail.distance}</p>
            <p className="trail-detail">소요시간: {trail.time}</p>
          </div>
        ))
      ) : (
        <p className="trail-no-data">선택한 지역에 해당하는 등산로가 없습니다.</p>
      )}
    </div>
  );
};

export default TrailList;
