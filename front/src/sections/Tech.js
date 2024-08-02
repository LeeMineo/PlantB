// src/sections/TechSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../css/Tech.css';

const techDetails = [
  {
    title: "모바일 웹앱",
    description: "React Native를 사용하여 개발 중인 웹앱으로, 사용자 인터페이스(UI) 및 사용자 경험(UX)을 최적화하여 쉽고 편리한 사용성을 제공.",
    img: "../../public/image/plantb_1.jpg",
  },
  {
    title: "백엔드 서버",
    description: "Spring Boot를 사용하여 안정적이고 신속한 데이터 처리를 위해 구축 중.",
    img: "../../public/image/plantb_2.jpg",
  },
  {
    title: "배포",
    description: "최종 배포는 AWS를 이용하여 안정적이고 확장 가능한 서비스를 제공.",
    img: "../../public/image/plantb_3.jpg",
  },
];

const coreTechnologies = [
  {
    title: "AI 기반 식물 인식 기술",
    description: "식물 이미지 분석 API (국립생태원, Trefle, Perenual)를 사용하여 식물 사진을 자동으로 분석 및 분류.",
    img: "../../public/image/plantb_1.jpg",
  },
  {
    title: "사용자 데이터 분석",
    description: "사용자의 행동 패턴을 분석하여 맞춤형 등산로 추천.",
    img: "../../public/image/plantb_2.jpg",
  },
  {
    title: "GPS 데이터 활용",
    description: "사용자의 등산 경로와 식물 위치를 매핑하여 실시간으로 데이터 시각화.",
    img: "../../public/image/plantb_3.jpg",
  },
  {
    title: "커뮤니티 기반 데이터 정정",
    description: "사용자가 제공한 데이터를 커뮤니티 기능을 통해 공유 및 정정.",
    img: "../../public/image/plantb_1.jpg",
  },
];

const Tech = () => {
  const { ref: serviceRef, inView: serviceInView } = useInView({ triggerOnce: true });
  const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true });

  return (
    <section id="tech" className="tech-section">
      <h2 className="tech-title">플랜트비는 최신 기술을 활용하여 사용자에게 최고의 경험을 제공합니다.</h2>
      <div className="tech-details">
        <p className={`tech-description ${serviceInView ? 'fade-in' : ''}`} ref={serviceRef}>
        플랜트비의 개발 진행 상태
        </p>
        
        <div className="progress-bars">
          <div className="progress-bar">
            <div className="progress-bar-title">UI/UX 기획</div>
            <div className="progress">
              <div className="progress-done" style={{ width: '100%' }}></div>
            </div>
            <div className="progress-percentage">100%</div>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-title">프론트엔드 개발</div>
            <div className="progress">
              <div className="progress-done" style={{ width: '80%' }}></div>
            </div>
            <div className="progress-percentage">80%</div>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-title">백엔드 개발</div>
            <div className="progress">
              <div className="progress-done" style={{ width: '50%' }}></div>
            </div>
            <div className="progress-percentage">50%</div>
          </div>
        </div>

        <p className={`tech-description ${serviceInView ? 'fade-in' : ''}`} ref={serviceRef}>
        서비스 8월 중 웹앱으로 출시예정. 웹앱으로 먼저 출시 후 차후 어플로 출시할 계획.
        </p>

        <div className="tech-subsection">
          <h3 className="tech-subtitle">서비스 구성</h3>
          <ul>
            {techDetails.map((detail, index) => (
              <li key={index} className={`tech-item ${serviceInView ? 'slide-in-left' : ''}`}>
                <div>
                  <strong>{detail.title}:</strong>
                  <p>{detail.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="tech-subsection">
          <h3 className="tech-subtitle">핵심기술</h3>
          <ul>
            {coreTechnologies.map((tech, index) => (
              <li key={index} className={`tech-item ${techInView ? 'slide-in-right' : ''}`} ref={techRef}>
                <div>
                  <strong>{tech.title}:</strong>
                  <p>{tech.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tech;
