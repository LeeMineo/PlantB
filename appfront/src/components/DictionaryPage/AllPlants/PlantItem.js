import React from 'react';
import { FaHeart, FaBookmark } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './styles/PlantItem.css';

const PlantItem = ({ plant }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/plant/${plant.id}`);  // plant.id를 기반으로 페이지 이동
  };

  return (
    <div className="plant-item" onClick={handleClick}>
      <img src={plant.image} alt={plant.name} className="plant-item-image" />
      <div className="plant-item-content">
        <div className="plant-item-header">
          <h3 className="plant-item-title">{plant.name}</h3>
          <div className="plant-item-actions">
            <FaHeart className="plant-item-icon" />
            <FaBookmark className="plant-item-icon" />
          </div>
        </div>
        <p className="plant-item-description">{plant.description}</p>
        <p className="plant-item-more">자세히 보기 &gt;</p>
      </div>
    </div>
  );
};

export default PlantItem;
