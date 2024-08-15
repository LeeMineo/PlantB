import React from 'react';
import './styles/MyCollectionLowPoly.css';

const MyCollectionLowPoly = ({ plants }) => {
  return (
    <div className="collectionlowpoly-container">
      {/* 여기에 로우폴리 뷰어를 구현하세요 */}
      <div className="collectionlowpoly-content">
        {/* 예시로 각 식물의 이미지를 보여줍니다. */}
        {plants.map((plant, index) => (
          <div key={index} className="collectionlowpoly-item">
            <img src={plant.image} alt={plant.name} className="collectionlowpoly-image" />
            <p className="collectionlowpoly-name">{plant.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCollectionLowPoly;
