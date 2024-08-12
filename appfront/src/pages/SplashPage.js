import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/pages/SplashPage.css';

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 3초 후에 로그인 페이지로 이동
    const timer = setTimeout(() => {
      navigate('/auth');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src="/logo.svg" alt="PlantB Logo" className="logo-icon" />
      <h1 className="title">Plant:<span className="highlight">B</span></h1>
      <p className="subtitle">산길을 정복하며 식물도감을 채워보세요!</p>
    </div>
  );
};

export default SplashPage;
