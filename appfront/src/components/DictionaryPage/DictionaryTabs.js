import React from 'react';
import './styles/DictionaryTabs.css';

const DictionaryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="dictionary-tabs">
      <button
        className={`dictionary-tab ${activeTab === '전체' ? 'active' : ''}`}
        onClick={() => setActiveTab('전체')}
      >
        전체
      </button>
      <button
        className={`dictionary-tab ${activeTab === '내 도감' ? 'active' : ''}`}
        onClick={() => setActiveTab('내 도감')}
      >
        내 도감
      </button>
      <button
        className={`dictionary-tab ${activeTab === '내 사진첩' ? 'active' : ''}`}
        onClick={() => setActiveTab('내 사진첩')}
      >
        내 사진첩
      </button>
    </nav>
  );
};

export default DictionaryTabs;
