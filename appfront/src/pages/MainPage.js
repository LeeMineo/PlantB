import React from 'react';
import HeadSection from '../components/MainPage/HeadSection';
import RecommendationSection from '../components/MainPage/RecommendationSection';
import TodayCourseSection from '../components/MainPage/TodayCourseSection';
import AppInfoSection from '../components/MainPage/AppInfoSection';
import '../css/pages/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <HeadSection />
      <RecommendationSection />
      <TodayCourseSection />
      <AppInfoSection />
    </div>
  );
};

export default MainPage;
