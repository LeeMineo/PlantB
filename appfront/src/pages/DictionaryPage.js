import React, { useState, useEffect } from 'react';
import DictionaryHeader from '../components/DictionaryPage/DictionaryHeader';
import DictionaryTabs from '../components/DictionaryPage/DictionaryTabs';
import AllPlantsList from '../components/DictionaryPage/AllPlants/AllPlantsList';
import MyCollection from '../components/DictionaryPage/MyCollection/MyCollection';
import MyGalleryList from '../components/DictionaryPage/MyGallery/MyGalleryList';
import allPlants from '../data/plantData'; // 모든 식물 데이터 import
import '../css/pages/DictionaryPage.css';

const DictionaryPage = () => {
  const [activeTab, setActiveTab] = useState('전체');
  const [filteredPlants, setFilteredPlants] = useState(allPlants);

  useEffect(() => {
    // 식물 데이터를 이름순으로 정렬
    const sortedPlants = [...allPlants].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredPlants(sortedPlants);
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const results = allPlants.filter(plant => 
        plant.name.includes(searchTerm)
      );
      setFilteredPlants(results);
    } else {
      // 검색어가 없으면 전체 목록을 이름순으로 정렬하여 표시
      setFilteredPlants([...allPlants].sort((a, b) => a.name.localeCompare(b.name)));
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case '전체':
        return <AllPlantsList plants={filteredPlants} />;
      case '내 도감':
        return <MyCollection />;
      case '내 사진첩':
        return <MyGalleryList />;
      default:
        return null;
    }
  };

  return (
    <div className="dictionary-page">
      <DictionaryHeader onSearch={handleSearch} />
      <DictionaryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="dictionary-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default DictionaryPage;
