import React from 'react';
import './styles/MyCollectionToggle.css';

const MyCollectionToggle = ({ view, setView }) => {
  return (
    <div className="collection-toggle-container">
      <button
        className={`collection-toggle-button ${view === 'list' ? 'active' : ''}`}
        onClick={() => setView('list')}
      >
        리스트형
      </button>
      <button
        className={`collection-toggle-button ${view === 'lowpoly' ? 'active' : ''}`}
        onClick={() => setView('lowpoly')}
      >
        로우폴리형
      </button>
    </div>
  );
};

export default MyCollectionToggle;
