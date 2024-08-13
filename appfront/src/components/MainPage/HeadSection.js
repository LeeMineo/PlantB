import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import './HeadSection.css';
import { FiSettings } from 'react-icons/fi'; // react-icons를 사용하여 설정 아이콘 추가

const HeadSection = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 호출

  // 더미 데이터
  const userName = "익명";
  const userLevel = "초보자";
  const progressTitle = "도봉산 식물도감";
  const progressPercentage = 80;

  return (
    <div className="head-section">
      <div className="user-info">
        <img 
          src="./dummy/김철수여자.png" 
          alt="프로필 사진" 
          className="profile-image" 
          onClick={() => navigate('/settings')} // 프로필 사진 클릭 시 설정 페이지로 이동
        />
        <div className="user-text">
          <h2>어서오세요, {userName}님!</h2>
          <p>{userLevel}</p>
        </div>
        <div className="settings-icon" onClick={() => navigate('/settings')}> 
          <FiSettings />
        </div>
      </div>
      <div className="progress-info">
        <div 
          className="progress-card" 
          onClick={() => navigate('/plant-dictionary')} // 하얀 박스 클릭 시 도감 페이지로 이동
          style={{ cursor: 'pointer' }} // 커서 포인터 추가
        >
          <p className="progress-title">현재 진행중인 도감</p>
          <p className="progress-subtitle">{progressTitle}</p>
          <p className="progress-percentage">{progressPercentage}%</p>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadSection;
