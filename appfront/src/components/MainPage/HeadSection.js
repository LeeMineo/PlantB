import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSettings, FiChevronRight } from 'react-icons/fi'; // Imported right arrow icon
import './HeadSection.css';
import Header from '../../components/Header';  // Header component

const HeadSection = () => {
  const navigate = useNavigate();

  // Dummy data
  const userName = "익명";
  const userLevel = "초보자";
  const progressTitle = "익명의 식물농장";
  const progressPercentage = 0;

  return (
    <Header height="50vw"> {/* Adjusted height */}
      <div className="headersection-header-content">
        <div className="headersection-user-info">
          <img 
            src="./dummy/person.png" 
            alt="프로필 사진" 
            className="headersection-profile-image" 
            onClick={() => navigate('/settings')} 
          />
          <div className="headersection-user-text">
            <p className="headersection-user-name">어서오세요,{userName}님!</p>
            <p className="headersection-user-level">{userLevel}</p>
          </div>
          <FiSettings className="headersection-settings-icon" onClick={() => navigate('/settings')} />
        </div>
        <div className="headersection-progress-card" onClick={() => navigate('/plant-dictionary')}>
          <p className="headersection-progress-title">내 도감</p>
          <p className="headersection-progress-subtitle">{progressTitle}</p>
          <div className="headersection-progress-info">
            <img src="./logo_black.svg" alt="Plant:B" className="headersection-progress-icon" />
            <p className="headersection-progress-percentage">식물 개수: {progressPercentage}개 </p>
            <FiChevronRight className="headersection-chevron-icon" />
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeadSection;
