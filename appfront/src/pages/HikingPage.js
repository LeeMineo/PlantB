import React, { useState } from 'react';
import HikeHeaderSection from '../components/HikingPage/HikeHeaderSection';
import LocationSelector from '../components/HikingPage/LocationSelector';
import TrailList from '../components/HikingPage/TrailList';
import '../css/pages/HikingPage.css'; 

const HikingPage = () => {
  const [filteredTrails, setFilteredTrails] = useState([
    {
      name: '내연산',
      course: '보경사 코스',
      difficulty: '상',
      length: '13.4km',
      time: '5h ~ 6h',
      image: 'path/to/trail_image.jpg',
    },
    // Add more trails data
  ]);

  // Handle selection of region and city
  const handleLocationSelect = (region, city) => {
    // 여기에 지역과 도시에 따른 필터링 로직을 추가하세요.
    // 아래는 예시로, 선택한 region과 city에 맞는 등산로만 필터링하는 로직입니다.
    
    const allTrails = [
      {
        name: '내연산',
        course: '보경사 코스',
        difficulty: '상',
        length: '13.4km',
        time: '5h ~ 6h',
        region: '경북',
        city: '포항시 북구',
        image: 'path/to/trail_image.jpg',
      },
      // 다른 등산로 데이터 추가
    ];

    const filtered = allTrails.filter(
      trail =>
        (region === '전국' || trail.region === region) &&
        (city === '전체' || trail.city === city)
    );

    setFilteredTrails(filtered);
  };

  return (
    <div className="hiking-page">
      {/* Use the HikeHeaderSection instead of Header */}
      <HikeHeaderSection />

      {/* Location Selector Component with onSelect */}
      <LocationSelector onSelect={handleLocationSelect} />

      {/* Trail List Component */}
      <TrailList trails={filteredTrails} />
    </div>
  );
};

export default HikingPage;
