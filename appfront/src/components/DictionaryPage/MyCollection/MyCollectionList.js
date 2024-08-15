import React from 'react';
import './styles/MyCollectionList.css';
import PlantItem from './PlantItem';

const MyCollectionList = ({ plants }) => {
  return (
    <div className="collectionlist-container">
      {plants.map((plant, index) => (
        <PlantItem key={index} plant={plant} />
      ))}
    </div>
  );
};

export default MyCollectionList;
