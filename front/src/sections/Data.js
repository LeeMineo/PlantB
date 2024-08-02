// src/sections/DataSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../css/Data.css';

const dataDetails = [
  {
    title: "등산로 정보",
    description: "전국의 등산로 정보를 제공하여 사용자에게 상세한 경로, 난이도, 주변 시설 등의 정보를 제공합니다.",
    link: "https://www.forest.go.kr/kfsweb/kfi/kfs/trail/trailInformation.do?pblicDataId=PBD0000041&bbs=3&mn=NKFS_06_08_02&subTitle=%0eb%093%8b1%ec%82%b0%ec%9d%b4",
  },
  {
    title: "국립생태원 식물 데이터",
    description: "다양한 식물의 위치정보, 한글명, 학명 등을 제공하여 등산 중 만날 수 있는 식물을 안내합니다.",
    link: "https://www.data.go.kr/data/15101287/openapi.do",
  },
  {
    title: "기상 데이터",
    description: "등산로별 날씨 정보를 제공하여 사용자에게 최적의 등산 시기를 안내하고, 계절별 위험 요소를 사전에 알립니다.",
    link: "https://www.weather.go.kr/",
  },
  {
    title: "건강 데이터",
    description: "사용자의 건강 상태와 활동량을 추적하여 맞춤형 등산 경로와 난이도를 추천합니다.",
    link: "https://www.data.go.kr/data/15101287/openapi.do",
  },
  {
    title: "식물데이터 API",
    description: "다양한 식물에 대한 종합적인 데이터를 제공하여 사용자가 식물을 쉽게 식별하고 정보를 얻을 수 있도록 합니다.",
    link: "https://www.nie-ecobank.kr/cmmn/Index.do?",
  },
  {
    title: "식물 분석 API",
    description: "식물 이미지 인식 및 정보를 제공하여 사용자가 사진을 찍으면 자동으로 분석해줍니다.",
    link: "https://trefle.io/",
  },
];

const DataSection = () => {
  const { ref: dataRef, inView: dataVisible } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <div className="gradient-section"></div>
      <section id="data" className="data-section">
        <div className="overlay-data"></div>
        <h2 className={`data-title ${dataVisible ? 'visible' : ''}`}>플랜트비는 신뢰할 수 있는 데이터를 활용합니다.</h2>
        <div className="data-content" ref={dataRef}>
          <div className="data-cards">
            {dataDetails.map((data, index) => (
              <div key={index} className={`data-card ${dataVisible ? 'visible' : ''}`}>
                <h3 className="data-card-title">{data.title}</h3>
                <p className="data-card-description">{data.description}</p>
                <a href={data.link} target="_blank" rel="noopener noreferrer">더 알아보기</a>
              </div>
            ))}
          </div>
        </div>
        <div className="overlay-data2"></div>
      </section>
      <div className="gradient-section2"></div>
    </>
  );
}

export default DataSection;
