import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import './HeadSection.css';
import Header from '../../components/Header';  // Header component

const HeadSection = () => {
  const navigate = useNavigate();

  // Dummy data
  const userName = "익명";
  const userLevel = "초보자";
  const progressTitle = "도봉산 식물도감";
  const progressPercentage = 80;

  return (
    <Header height="55vw"> {/* Adjusted height */}
      <div className="headersection-header-content">
        <div className="headersection-user-info">
          <img 
            src="./dummy/김철수여자.png" 
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
          <p className="headersection-progress-title">현재 진행중인 도감</p>
          <p className="headersection-progress-subtitle">{progressTitle}</p>
          <p className="headersection-progress-percentage">{progressPercentage}% 완료</p>
          <div className="headersection-progress-bar">
            <div className="headersection-progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeadSection;
