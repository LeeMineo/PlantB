import React, { useState } from 'react';
import { FaSearch, FaSlidersH } from 'react-icons/fa'; // Importing search and filter icons
import Header from '../../components/Header';  // Header component
import './styles/DictionaryHeader.css';

const DictionaryHeader = ({ onSearch }) => { // onSearch 함수를 prop으로 받음
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // 입력할 때마다 상위 컴포넌트로 검색어 전달
  };

  return (
    <Header height="25vw"> {/* Adjust height as needed */}
      <div className="dictionary-header-content">
        <div className="dictionary-searchbar">
          <FaSearch className="dictionary-search-icon" />
          <input 
            type="text" 
            placeholder="원하는 식물을 검색해보세요." 
            value={searchTerm}
            onChange={handleInputChange}
          />
          <FaSlidersH className="dictionary-filter-icon" />
        </div>
      </div>
    </Header>
  );
};

export default DictionaryHeader;
