import React from 'react';
import Header from '../../components/Camera/Common/CameraHeader';

const SavedPlantsPage = () => {
    // 로컬에 저장된 식물 목록을 가져오는 로직을 추가해야 합니다.
    const savedPlants = [];

    return (
        <div className="saved-plants-page">
            <Header title="저장된 식물" />
            <div className="plant-list">
                {savedPlants.map((plant, index) => (
                    <div key={index} className="plant-item">
                        <h3>{plant.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedPlantsPage;
