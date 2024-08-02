// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../css/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <Link to="main" smooth={true} duration={500}>Main</Link>
        <Link to="functions" smooth={true} duration={500}>Functions</Link>
        <Link to="data" smooth={true} duration={500}>Data</Link>
        <Link to="tech" smooth={true} duration={500}>Technique</Link>
        <Link to="value" smooth={true} duration={500}>Value</Link>
      </nav>
    </header>
  );
}

export default Header;
