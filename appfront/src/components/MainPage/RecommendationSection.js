import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import { FaHiking } from 'react-icons/fa'; // 등산로 선택 아이콘
import { GiPlantRoots } from 'react-icons/gi'; // 식물도감 아이콘
import { GiPlantSeed } from 'react-icons/gi'; // 희귀식물 아이콘
import { FaUsers } from 'react-icons/fa'; // 커뮤니티 아이콘 추가
import './RecommendationSection.css';

const RecommendationSection = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 호출

  return (
    <div className="recommendation-section">
      <h3>추천 활동</h3>
      <div className="activity-grid">
        <div 
          className="activity-card" 
          onClick={() => navigate('/hiking')} // 등산로 선택 클릭 시 등산로 페이지로 이동
          style={{ cursor: 'pointer' }} // 커서 포인터 추가
        >
          <FaHiking className="activity-icon" />
          <p>등산로 선택</p>
        </div>
        <div 
          className="activity-card" 
          onClick={() => navigate('/plant-dictionary')} // 식물도감 클릭 시 식물도감 페이지로 이동
          style={{ cursor: 'pointer' }} // 커서 포인터 추가
        >
          <GiPlantRoots className="activity-icon" />
          <p>식물도감</p>
        </div>
        <div 
          className="activity-card" 
          onClick={() => navigate('/plant-dictionary')} // 희귀식물 클릭 시 식물도감 페이지로 이동
          style={{ cursor: 'pointer' }} // 커서 포인터 추가
        >
          <GiPlantSeed className="activity-icon" />
          <p>희귀식물</p>
        </div>
        <div 
          className="activity-card" 
          onClick={() => navigate('/community')} // 커뮤니티 클릭 시 커뮤니티 페이지로 이동 (아직 제작되지 않음)
          style={{ cursor: 'pointer' }} // 커서 포인터 추가
        >
          <FaUsers className="activity-icon" />
          <p>커뮤니티</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationSection;
