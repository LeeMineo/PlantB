import React from 'react';
import Header from '../components/Header'; // Header 컴포넌트 임포트
import '../css/pages/DataCopyrightPage.css'; // 페이지에 대한 CSS 파일 임포트

const DataCopyrightPage = () => {
    return (
        <div id="datacopyrightpage-container">
            {/* Header 컴포넌트 */}
            <Header title="Data & API Usage" height="20vw" />

            {/* 메인 컨텐츠 */}
            <div id="datacopyrightpage-content">
                <h1 id="datacopyrightpage-title">공공데이터 및 API 출처</h1>
                <p id="datacopyrightpage-description">
                    이 페이지에서는 사용된 공공데이터와 API의 출처 및 사용 방법을 설명합니다.
                </p>

                {/* 공공데이터 및 API 목록 */}
                <section id="datacopyrightpage-section">
                    <h2>공공데이터 출처</h2>
                    <ul>
                        <li>등산로_전국 데이터: <a href="https://www.bigdata-forest.kr/product/FRT000801" target="_blank" rel="noopener noreferrer">https://www.bigdata-forest.kr/product/FRT000801</a></li>
                        <li>자생 식물 종 목록: <a href="https://www.bigdata-forest.kr/product/GNM000101" target="_blank" rel="noopener noreferrer">https://www.bigdata-forest.kr/product/GNM000101</a></li>
                    </ul>
                </section>

                <section id="datacopyrightpage-section">
                    <h2>사용된 API</h2>
                    <ul>
                        <li>PlantNet API (식물 사진 분석): <a href="https://plantnet.org/en/" target="_blank" rel="noopener noreferrer">https://plantnet.org/en/</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default DataCopyrightPage;
