import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import './OptionSection.css';

const OptionSection = ({ title, icon, onClick }) => {
  return (
    <div className="option-section" onClick={onClick}>
      <div className="option-section-content">
        <div className="option-section-icon">
          {icon}
        </div>
        <div className="option-section-text">
          <h3>{title}</h3>
        </div>
        <div className="option-section-arrow">
          <FiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default OptionSection;
