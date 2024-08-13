import React from 'react';
import './AppInfoSection.css';

const AppInfoSection = () => {
  return (
    <div className="app-info-section">
      <div className="top-buttons">
        <button className="info-button">로그인</button>
        <button className="info-button">회원가입</button>
        <button className="info-button">오류신고</button>

      </div>
      <div className="links">
        <a href="#terms" className="info-link">이용약관</a>
        <span className="separator">|</span>
        <a href="#privacy" className="info-link">개인정보처리방침</a>
        <span className="separator">|</span>
        <a href="#location" className="info-link">위치기반서비스 이용약관</a>
      </div>
      <div className="links">
        <a href="#company" className="info-link">회사소개</a>
        <span className="separator">|</span>
        <a href="#support" className="info-link">고객지원</a>
      </div>
      <div className="company-info">
  ©     {new Date().getFullYear()} 플랜비. All Rights Reserved.
        </div>

    </div>
  );
};

export default AppInfoSection;
