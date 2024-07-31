// src/sections/Separator.js
import React, { useState, useEffect, useRef } from 'react';
import '../css/Separator.css';

const Separator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const separatorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // 10%가 뷰포트에 들어오면 감지
    );

    const currentRef = separatorRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={separatorRef} className="separator">
      <p className={`separator-text ${isVisible ? 'visible' : ''}`}>플랜트비가 제공하는 다양한 기능을 경험해보세요.</p>
    </section>
  );
}

export default Separator;
