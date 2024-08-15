// src/MyGallery/PlantItem.js

import React from 'react';
import { FaBookmark, FaHeart, FaShareAlt } from 'react-icons/fa';
import './styles/PlantItem.css';

const PlantItem = ({ plant }) => {
  return (
    <div className="plantitem-container">
      <img src={plant.image} alt={plant.name} className="plantitem-image" />
      <div className="plantitem-content">
        <h3 className="plantitem-name">{plant.name}</h3>
        <p className="plantitem-description">{plant.description}</p>
        <div className="plantitem-actions">
          <FaHeart className="plantitem-icon" />
          <FaBookmark className="plantitem-icon" />
          <FaShareAlt className="plantitem-icon" />
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
