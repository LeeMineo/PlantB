import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserProfileSection from '../components/SettingsPage/UserProfileSection';
import ThemeSection from '../components/SettingsPage/ThemeSection';
import NotificationsSection from '../components/SettingsPage/NotificationsSection';
import LanguageSection from '../components/SettingsPage/LanguageSection';
import AppInfoSection from '../components/SettingsPage/AppInfoSection';
import '../css/pages/SettingsPage.css';

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-container">
      <Header title="Settings" height="20vw" /> {/* 헤더 설정 */}

      <div className="settings-options">
        <UserProfileSection onClick={() => navigate('/settings/profile')} />
        <ThemeSection onClick={() => navigate('/settings/theme')} />
        <NotificationsSection onClick={() => navigate('/settings/notifications')} />
        <LanguageSection onClick={() => navigate('/settings/language')} />
        <AppInfoSection onClick={() => navigate('/settings/app-info')} />
      </div>
    </div>
  );
};

export default SettingsPage;
