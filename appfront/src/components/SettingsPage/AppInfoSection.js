import React from 'react';
import { FiInfo } from 'react-icons/fi';
import OptionSection from './OptionSection';

const AppInfoSection = ({ onClick }) => {
  return (
    <OptionSection 
      title="App Information" 
      icon={<FiInfo />} 
      onClick={onClick} 
    />
  );
};

export default AppInfoSection;
