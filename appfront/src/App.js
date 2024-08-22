import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import HikingPage from './pages/HikingPage';
import DictionaryPage from './pages/DictionaryPage';
import SettingsPage from './pages/SettingsPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CameraPage from './pages/Camera/CameraPage';
import PhotoTipPage from './pages/Camera/PhotoTipPage';
import AnalysisResultPage from './pages/Camera/AnalysisResultPage';
import SavedPlantsPage from './pages/Camera/SavedPlantsPage';
import PreparingPage from './pages/PreparingPage';
import DataCopyrightPage from './pages/DataCopyrightPage';
import PlantDetailPage from './pages/PlantDetailPage';  // PlantDetailPage 추가
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
        <Route path="/plant-dictionary" element={<DictionaryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
        
        {/* 추가된 페이지들 */}
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/photo-tip" element={<PhotoTipPage />} />
        <Route path="/analysis-result" element={<AnalysisResultPage />} />
        <Route path="/saved-plants" element={<SavedPlantsPage />} />
        <Route path="/preparing" element={<PreparingPage />} />
        <Route path="/data-copyright" element={<DataCopyrightPage />} />
        
        {/* 식물 상세 페이지 */}
        <Route path="/plant/:plantId" element={<PlantDetailPage />} />  {/* 식물 ID 기반 상세 페이지 경로 추가 */}
      </Routes>
      
      {/* 메인 페이지들에만 네비게이션 표시 */}
      {showNavigation && <Navigation />}
    </div>
  );
}

export default App;
