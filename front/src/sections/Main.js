// src/sections/Main.js
import React from 'react';
import '../css/Main.css';

const Main = () => {
  return (
    <section id="main" className="main-section">
      <div className="overlay">
        <div className="content">
          <h2 className="tagline"> --- PLAN B</h2>
          <h1 className="title">Plant<span className="highlight">:B</span></h1>
          <p className="description">플랜트비와 함께 산길을 정복하며 식물도감을 채워보세요.</p>
          <div className="scroll-down">
            <p>scroll down ⬇️</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
