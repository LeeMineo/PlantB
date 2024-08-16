import React from 'react';
import { FiUser } from 'react-icons/fi';
import OptionSection from './OptionSection';

const UserProfileSection = ({ onClick }) => {
  return (
    <OptionSection 
      title="User Profile" 
      icon={<FiUser />} 
      onClick={onClick} 
    />
  );
};

export default UserProfileSection;
