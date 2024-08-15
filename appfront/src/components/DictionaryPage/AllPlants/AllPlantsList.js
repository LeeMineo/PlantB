import React from 'react';
import PlantItem from './PlantItem'; // PlantItem 컴포넌트 import
import './styles/AllPlantsList.css';

const AllPlantsList = ({ plants = [] }) => { // plants를 prop으로 받음
  return (
    <div className="allplants-list-container">
      {plants.length > 0 ? (
        plants.map((plant, index) => (
          <PlantItem key={index} plant={plant} /> // 필터링된 plants 데이터를 PlantItem 컴포넌트에 전달
        ))
      ) : (
        <p className="allplants-list-no-data">해당하는 식물이 없습니다.</p>
      )}
    </div>
  );
};

export default AllPlantsList;
