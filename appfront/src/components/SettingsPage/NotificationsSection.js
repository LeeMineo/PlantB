import React from 'react';
import { FiBell } from 'react-icons/fi';
import OptionSection from './OptionSection';

const NotificationsSection = ({ onClick }) => {
  return (
    <OptionSection 
      title="Notifications" 
      icon={<FiBell />} 
      onClick={onClick} 
    />
  );
};

export default NotificationsSection;
