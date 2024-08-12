import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/components/Navigation.css';

const Navigation = () => {
  return (
    <nav className="floating-nav">
      <NavLink exact to="/" className="nav-item" activeClassName="active">
        🏠 메인
      </NavLink>
      <NavLink to="/hiking" className="nav-item" activeClassName="active">
        🗺️ 지도
      </NavLink>
      <div className="nav-item camera">
        📷
      </div>
      <NavLink to="/plant-dictionary" className="nav-item" activeClassName="active">
        🙂 도감
      </NavLink>
      <NavLink to="/settings" className="nav-item" activeClassName="active">
        ⚙️ 설정
      </NavLink>
    </nav>
  );
};

export default Navigation;
