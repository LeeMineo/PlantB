import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import HikingPage from './pages/HikingPage';
import PlantDictionaryPage from './pages/PlantDictionaryPage';
import SettingsPage from './pages/SettingsPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hiking" element={<HikingPage />} />
          <Route path="/plant-dictionary" element={<PlantDictionaryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
