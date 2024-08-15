// src/MyGallery/MyGalleryList.js

import React from 'react';
import PlantItem from './PlantItem';
import './styles/MyGalleryList.css';

const MyGalleryList = ({ items = [] }) => { 
  return (
    <div className="mygallery-list-container">
      {items.length > 0 ? (
        items.map((item, index) => (
          <PlantItem key={index} plant={item} />
        ))
      ) : (
        <p className="mygallery-list-no-data">사진첩에 저장된 식물이 없습니다.</p>
      )}
    </div>
  );
};

export default MyGalleryList;
