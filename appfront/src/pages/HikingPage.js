import React, { useState } from 'react';
import HikeHeaderSection from '../components/HikingPage/HikeHeaderSection';
import LocationSelector from '../components/HikingPage/LocationSelector';
import TrailList from '../components/HikingPage/TrailList';
import trails from '../data/trailsData'; // trailsData 가져오기
import '../css/pages/HikingPage.css'; 

const HikingPage = () => {
  const [filteredTrails, setFilteredTrails] = useState(trails);
  const [selectedLocation, setSelectedLocation] = useState({ region: '전국', city: '전체' });

  // Handle selection of region and city
  const handleLocationSelect = (region, city) => {
    // 선택한 region과 city에 맞는 등산로만 필터링
    const filtered = trails.filter(trail => {
      return (
        (region === '전국' || trail.region === region) &&
        (city === '전체' || trail.city === city)
      );
    });

    setFilteredTrails(filtered);
    setSelectedLocation({ region, city });
  };

  return (
    <div className="hiking-page">
      <HikeHeaderSection />
      <LocationSelector onSelect={handleLocationSelect} />

      <div className="selected-location">
        <h2>"{selectedLocation.region} {selectedLocation.city}" 등산로</h2>
      </div>

      <TrailList trails={filteredTrails} />
    </div>
  );
};

export default HikingPage;
