import React from 'react';
import { FiSun } from 'react-icons/fi';
import OptionSection from './OptionSection';

const ThemeSection = ({ onClick }) => {
  return (
    <OptionSection 
      title="Theme" 
      icon={<FiSun />} 
      onClick={onClick} 
    />
  );
};

export default ThemeSection;
