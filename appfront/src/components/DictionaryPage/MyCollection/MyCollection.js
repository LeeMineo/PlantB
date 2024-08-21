import React, { useState } from 'react';
import MyCollectionToggle from './MyCollectionToggle';
import MyCollectionList from './MyCollectionList';
import MyCollectionLowPoly from './MyCollectionLowPoly';
import './styles/MyCollection.css';

const plants = [
  {
    name: '닭의장풀',
    description: '파란 꽃잎을 가진 닭의장풀.',
    image: './flower2.png',
  },
  {
    name: '개망초',
    description: '흰 꽃잎과 노란 꽃술을 가진 개망초.',
    image: './flower1.png',
  },
  {
    name: '천수국',
    description: '노란 꽃잎을 가진 천수국.',
    image: './flower3.png',
  },
];

const MyCollection = () => {
  const [view, setView] = useState('list');

  return (
    <><div className="mycollection-toggle">
          <MyCollectionToggle view={view} setView={setView} />
      </div>
      <div className="mycollection-container">
        {view === 'list' ? <MyCollectionList plants={plants} /> : <MyCollectionLowPoly plants={plants} />}
    </div></>
  );
};

export default MyCollection;
