import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaMap, FaSmile, FaUserCog } from 'react-icons/fa';
import { BsCameraFill } from 'react-icons/bs';
import '../css/components/Navigation.css';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // 스크롤이 아래로 이동하고 일정량 스크롤 되었을 때
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        // 스크롤이 위로 이동할 때
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
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
        <span>지도</span>
      </NavLink>
      <div className="nav-item camera">
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
  );
};

export default Navigation;
