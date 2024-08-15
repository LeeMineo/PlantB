import React from 'react';
import './styles/PlantItem.css';
import { FaBookmark, FaHeart } from 'react-icons/fa';

const PlantItem = ({ plant }) => {
  return (
    <div className="plantitem-container">
      <img src={plant.image} alt={plant.name} className="plantitem-image" />
      <div className="plantitem-content">
        <p className="plantitem-name">{plant.name}</p>
        <p className="plantitem-description">{plant.description}</p>
        <div className="plantitem-actions">
          <FaHeart className="plantitem-icon" />
          <FaBookmark className="plantitem-icon" />
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
