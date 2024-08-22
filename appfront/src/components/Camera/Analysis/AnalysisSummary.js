import React, { useState, useEffect } from 'react';
import './AnalysisSummary.css';
import { matchPlantWithCSV } from '../../../services/plantMatch';
import Header from '../../Header';
import AnalysisProgress from './AnalysisProgress';

const AnalysisSummary = ({ plantData, imageBlob, locationData }) => {  // locationData prop 추가
    const [koreanData, setKoreanData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchKoreanData = async () => {
            if (!plantData || plantData.length === 0) return;

            setLoading(true);
            setError(null);

            try {
                const topResult = plantData
                    .sort((a, b) => b.score - a.score)[0];

                const scientificName = topResult?.species?.scientificName;
                if (scientificName) {
                    const csvData = await matchPlantWithCSV(scientificName);
                    setKoreanData(csvData || {});
                }
            } catch (err) {
                setError('Error fetching Korean plant data.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchKoreanData();
    }, [plantData]);

    const handleViewMoreClick = () => {
        // 모든 데이터를 볼 수 있는 상세 페이지로 이동하는 로직을 추가하세요
        alert("모든 데이터를 볼 수 있는 페이지로 이동합니다.");
    };

    if (loading) {
        return (
            <div id="analysissum-loading">
                <AnalysisProgress imageBlob={imageBlob} />
            </div>
        );
    }

    if (error) {
        return <div id="analysissum-error">{error}</div>;
    }

    if (!plantData || plantData.length === 0) {
        return <div id="analysissum-no-data">No data available for the given plant.</div>;
    }

    const topResult = plantData.sort((a, b) => b.score - a.score)[0];

    const lastSentence = koreanData?.설명
        ? koreanData.설명.split('.').filter(sentence => sentence.trim().length > 0).slice(-1)[0] + '.'
        : '설명이 없습니다.';

    return (
        <>
            <Header title="Plant Information" height="20vw" />
            <div id="analysissum-summary">

                {/* 이미지 상단에 배치 */}
                <div className="analysissum-image-container">
                    <img className="analysissum-main-image" src={URL.createObjectURL(imageBlob)} alt="Uploaded Plant" />
                </div>

                {/* 한국명과 간단한 설명 */}
                <div className="analysissum-basic-info">
                    <h2 className="analysissum-common-name">{koreanData?.국명 || '알 수 없음'}</h2>
                    <p className="analysissum-description">
                        {lastSentence}
                    </p>
                </div>

                {/* Korean Plant CSV 정보 */}
                <div className="analysissum-korean-data">
                    <h4>Korean Plant CSV Information</h4>
                    {koreanData ? (
                        <div className="korean-data-box">
                            <p>분류군ID: {koreanData?.분류군ID}</p>
                            <p>학명: {koreanData?.학명}</p>
                            <p>국명: {koreanData?.국명}</p>
                            <p>분류계급: {koreanData?.분류계급}</p>
                            <p>이명여부: {koreanData?.이명여부}</p>
                            <p>명명자: {koreanData?.명명자}</p>
                            <p>명명년도: {koreanData?.명명년도}</p>
                            <p>최초명명자: {koreanData?.최초명명자}</p>
                            <p>최초명명년도: {koreanData?.최초명명년도}</p>
                            <p>설명: {koreanData?.설명}</p>
                        </div>
                    ) : (
                        <p>No matching data found in the CSV.</p>
                    )}
                </div>

                {/* 촬영 위치 데이터 */}
                <div className="analysissum-location-info">
                    <h4>촬영한 위치</h4>
                    <p>{locationData?.address || '위치 정보가 없습니다.'}</p>
                    <p>{new Date().toLocaleString()}</p>
                </div>

                {/* 모든 데이터 보기 버튼 */}
                <div className="analysissum-view-more">
                    <button className="view-more-button" onClick={handleViewMoreClick}>
                        자세한 정보 보기
                    </button>
                </div>

            </div>
        </>
    );
};

export default AnalysisSummary;
