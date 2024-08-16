import React from 'react';
import './styles/MyCollectionToggle.css';
import { FaBars, FaCube } from 'react-icons/fa'; // 아이콘을 불러옵니다.

const MyCollectionToggle = ({ view, setView }) => {
  return (
    <div className="collection-toggle-container">
      <button
        className={`collection-toggle-button ${view === 'list' ? 'active' : ''}`}
        onClick={() => setView('list')}
      >
        <FaBars /> {/* 리스트형 아이콘 */}
      </button>
      <button
        className={`collection-toggle-button ${view === 'lowpoly' ? 'active' : ''}`}
        onClick={() => setView('lowpoly')}
      >
        <FaCube /> {/* 로우폴리형 아이콘 */}
      </button>
    </div>
  );
};

export default MyCollectionToggle;
