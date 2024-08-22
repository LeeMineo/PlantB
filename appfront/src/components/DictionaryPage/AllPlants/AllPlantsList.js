import React, { useState } from 'react';
import PlantItem from './PlantItem'; // PlantItem 컴포넌트 import
import './styles/AllPlantsList.css';

const AllPlantsList = ({ plants = [] }) => {
  const [visibleCount, setVisibleCount] = useState(10); // 처음에 보이는 식물의 수를 10개로 설정

  const showMorePlants = () => {
    setVisibleCount(prevCount => prevCount + 10); // 더 보기 버튼을 누르면 10개 더 보여줌
  };

  const visiblePlants = plants.slice(0, visibleCount); // 현재 표시할 식물들

  return (
    <div className="allplants-list-container">
      {visiblePlants.length > 0 ? (
        visiblePlants.map((plant, index) => (
          <PlantItem key={index} plant={plant} /> // 필터링된 plants 데이터를 PlantItem 컴포넌트에 전달
        ))
      ) : (
        <p className="allplants-list-no-data">해당하는 식물이 없습니다.</p>
      )}

      {visibleCount < plants.length && ( // 남은 식물이 있을 때만 "더 보기" 버튼 표시
        <button className="allplants-show-more" onClick={showMorePlants}>
          더 보기
        </button>
      )}
    </div>
  );
};

export default AllPlantsList;
