import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaMap, FaSmile, FaUserCog } from 'react-icons/fa';
import { BsCameraFill } from 'react-icons/bs';
import '../css/components/Navigation.css';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavigation, setShowNavigation] = useState(true); // 네비게이션 표시 상태
  const navigate = useNavigate();
  const location = useLocation(); // 현재 위치를 가져오는 훅

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // 카메라 관련 페이지에서 벗어나면 네비게이션을 다시 표시
    if (location.pathname !== '/camera' && location.pathname !== '/photo-tip' && location.pathname !== '/analysis-result') {
      setShowNavigation(true);
    }
  }, [location]);

  const handleCameraClick = () => {
    setShowNavigation(false); // 네비게이션 숨기기
    navigate('/photo-tip'); // PhotoTipPage로 이동
  };

  return showNavigation ? ( // showNavigation이 true일 때만 네비게이션을 렌더링
    <nav className={`floating-nav ${isVisible ? 'visible' : 'hidden'}`}>
      <NavLink
        to="/main"
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <FaHome />
        <span>메인</span>
      </NavLink>
      <NavLink
        to="/hiking"
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <FaMap />
        <span>등산로</span>
      </NavLink>
      <div 
        className="nav-item camera" 
        onClick={handleCameraClick} // 클릭 시 카메라 페이지로 이동 및 네비게이션 숨기기
      >
        <BsCameraFill />
      </div>
      <NavLink
        to="/plant-dictionary"
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <FaSmile />
        <span>도감</span>
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <FaUserCog />
        <span>설정</span>
      </NavLink>
    </nav>
  ) : null;
};

export default Navigation;
