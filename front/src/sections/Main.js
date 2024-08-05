// src/sections/Main.js
import React from 'react';
import '../css/Main.css';
import Tagline from '../assets/svg/Tagline.svg';

const Main = () => {
  return (
    <section id="main" className="main-section">
      <div className="overlay">
        <div className="content">
          <div className="function-title-main">
              <img src={Tagline} alt="Tagline" className="tagline-main" />
              <p className=".function-subtitle-main">PLAN B</p>
          </div>
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
