import React from 'react';
import '../css/FloatingButton.css';

const FloatingButton = () => {
  const handleClick = () => {
    window.open('https://forms.gle/BX75VuBMXD4sb7P3A', '_blank');
  };

  return (
    <button className="floating-button" onClick={handleClick}>
      사전등록하기
    </button>
  );
};

export default FloatingButton;
