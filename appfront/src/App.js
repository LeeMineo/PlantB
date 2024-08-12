import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import HikingPage from './pages/HikingPage';
import PlantDictionaryPage from './pages/PlantDictionaryPage';
import SettingsPage from './pages/SettingsPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  
  // 네비게이션이 표시될 경로들을 정의
  const showNavigation = !['/', '/auth'].includes(location.pathname);

  return (
    <div>
      <Routes>
        {/* 스플래쉬 페이지 */}
        <Route path="/" element={<SplashPage />} />
        
        {/* 로그인/회원가입 페이지 */}
        <Route path="/auth" element={<AuthPage />} />
        
        {/* 메인 페이지들 */}
        <Route path="/main" element={<MainPage />} />
        <Route path="/hiking" element={<HikingPage />} />
        <Route path="/plant-dictionary" element={<PlantDictionaryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      
      {/* 메인 페이지들에만 네비게이션 표시 */}
      {showNavigation && <Navigation />}
    </div>
  );
}

export default App;
