import React from 'react';
import { FiGlobe } from 'react-icons/fi';
import OptionSection from './OptionSection';

const LanguageSection = ({ onClick }) => {
  return (
    <OptionSection 
      title="Language" 
      icon={<FiGlobe />} 
      onClick={onClick} 
    />
  );
};

export default LanguageSection;
