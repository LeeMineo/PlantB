import React, { useState, useEffect } from 'react';
import DictionaryHeader from '../components/DictionaryPage/DictionaryHeader';
import DictionaryTabs from '../components/DictionaryPage/DictionaryTabs';
import AllPlantsList from '../components/DictionaryPage/AllPlants/AllPlantsList';
import MyCollection from '../components/DictionaryPage/MyCollection/MyCollection';
import MyGalleryList from '../components/DictionaryPage/MyGallery/MyGalleryList';
import { processCSVData } from '../services/processCSVData'; // CSV 데이터를 가져오는 함수 import
import '../css/pages/DictionaryPage.css';

const DictionaryPage = () => {
  const [activeTab, setActiveTab] = useState('전체');
  const [allPlants, setAllPlants] = useState([]); // 전체 식물 데이터를 담는 상태
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await processCSVData(); // CSV 데이터 로드
        setAllPlants(data);
        setFilteredPlants(data); // 초기 상태는 전체 데이터를 표시
      } catch (error) {
        console.error("Failed to load plant data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const results = allPlants.filter(plant => 
        plant.name.includes(searchTerm) || plant.scientificName.includes(searchTerm)
      );
      setFilteredPlants(results);
    } else {
      setFilteredPlants(allPlants); // 검색어가 없으면 전체 목록 표시
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
