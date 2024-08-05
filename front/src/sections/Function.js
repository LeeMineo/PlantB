// src/sections/Function.js
import React, { useState } from 'react';
import '../css/Function.css';
import functionData from '../data/functionData';
import Tagline from '../assets/svg/Tagline.svg';

const FunctionSection = () => {
  const [currentFunction, setCurrentFunction] = useState(1);

  const handleScroll = () => {
    const sections = document.querySelectorAll('.function-item');
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        setCurrentFunction(index + 1);
      }
    });
  };

  const handleClick = (index) => {
    setCurrentFunction(index + 1);
    const section = document.getElementById(`function-${index + 1}`);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="functions" className="function-section">
      {functionData.map((item, index) => (
        <div
          key={index}
          id={`function-${index + 1}`}
          className={`function-item ${currentFunction === index + 1 ? 'active' : ''}`}
        >
          <div className="function-number">{item.number}</div>
          <div className="function-text">
            <div className="function-title">
              <img src={Tagline} alt="Tagline" className="tagline" />
              <span className="function-subtitle">{item.subtitle}</span>
            </div>
            <h2 className="function-main-title">{item.title}</h2>
            <p className="function-description">{item.description}</p>
            <p className="read-more">read more →</p>
          </div>
          <div className="function-image">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
      <div className="function-navigation">
        {functionData.map((_, index) => (
          <button
            key={index}
            className={`nav-button ${currentFunction === index + 1 ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FunctionSection;
