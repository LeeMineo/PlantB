import React from 'react';
import '../css/components/Header.css';

const Header = ({ children, height = '60vw' }) => {
  return (
    <div className="header" style={{ height }}>
      <div className="header-logo">
        <img src="./logo.svg" alt="Plant:B" />
        <h1>
          <span className="header-logo-plant">Plant</span>
          <span className="header-logo-b">:B</span>
        </h1>
      </div>
      <div className="header-content">
        {children}
      </div>
    </div>
  );
};

export default Header;
