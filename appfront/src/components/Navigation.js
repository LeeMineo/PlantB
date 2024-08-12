import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaMap, FaSmile, FaUserCog } from 'react-icons/fa';
import { BsCameraFill } from 'react-icons/bs';
import '../css/components/Navigation.css';

const Navigation = () => {
  return (
    <nav className="floating-nav">
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
