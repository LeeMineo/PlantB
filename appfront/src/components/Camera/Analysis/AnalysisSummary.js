import React, { useState, useEffect } from 'react';
import './AnalysisSummary.css';
import { matchPlantWithCSV } from '../../../services/plantMatch';
// import { koreanPlant } from '../../../services/koreanPlant'; // 주석 처리된 함수 import

const AnalysisSummary = ({ plantData }) => {
    const [koreanData, setKoreanData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchKoreanData = async () => {
            if (!plantData || plantData.length === 0) return;

            setLoading(true);
            setError(null);

            try {
                // 점수가 가장 높은 상위 3개의 항목만 남김
                const topThreeResults = plantData
                    .sort((a, b) => b.score - a.score) // 내림차순 정렬
                    .slice(0, 3); // 상위 3개 선택

                const fetchedData = await Promise.all(
                    topThreeResults.map(async (result) => {
                        const scientificName = result.species?.scientificName;
                        if (scientificName) {
                            // CSV 데이터를 가져옴 (API 데이터는 주석 처리)
                            const csvData = await matchPlantWithCSV(scientificName);
                            // const apiData = await koreanPlant(scientificName); // 주석 처리된 API 호출
                            return { csvData /*, apiData */ };
                        }
                        return null;
                    })
                );

                setKoreanData(fetchedData.filter(data => data !== null)); // null 데이터를 필터링
            } catch (err) {
                setError('Error fetching Korean plant data.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchKoreanData();
    }, [plantData]);

    if (loading) {
        return <div id="analysissum-loading">Loading Korean data...</div>;
    }

    if (error) {
        return <div id="analysissum-error">{error}</div>;
    }

    if (!plantData || plantData.length === 0) {
        return <div id="analysissum-no-data">No data available for the given plant.</div>;
    }

    return (
        <div id="analysissum-summary">
            <h2 id="analysissum-title">Analysis Result</h2>
            {plantData
                .sort((a, b) => b.score - a.score) // 내림차순 정렬
                .slice(0, 3) // 상위 3개만 선택
                .map((result, index) => (
                    <div key={index} id="analysissum-plant-item" className="analysissum-plant-item">
                        <h3 id="analysissum-species">
                            Species: {result.species?.commonNames?.join(', ') || result.species?.scientificNameWithoutAuthor}
                        </h3>
                        <p id="analysissum-scientific-name">Scientific Name: {result.species?.scientificName}</p>
                        <p id="analysissum-family">Family: {result.species?.family?.scientificName}</p>
                        <p id="analysissum-score">Score: {result.score}</p>
                        <div id="analysissum-images-container">
                            <h4 id="analysissum-images-title">Images:</h4>
                            {result.images?.length > 0 ? (
                                result.images.map((image, idx) => (
                                    <img key={idx} id="analysissum-image" src={image.url.m} alt={image.organ} />
                                ))
                            ) : (
                                <p id="analysissum-no-images">No images available</p>
                            )}
                        </div>

                        {/* 한국 데이터 표시 */}
                        {koreanData[index] ? (
                            <div id="analysissum-korean-data">
                                <h4>Korean Plant CSV Information</h4>
                                <p>국명: {koreanData[index].csvData?.국명}</p>
                                <p>설명: {koreanData[index].csvData?.설명}</p>
                                {/* 주석 처리된 API 데이터 출력 */}
                                {/* <h4>Korean Plant API Information</h4>
                                <p>Additional Info:</p>
                                <p>Korean Name: {koreanData[index].apiData?.koreanName}</p>
                                <p>Scientific Name: {koreanData[index].apiData?.plantScnm}</p>
                                <p>English Name: {koreanData[index].apiData?.engName}</p> */}
                            </div>
                        ) : (
                            <div id="analysissum-korean-data">
                                <h4>Korean Plant Information</h4>
                                <p>No matching data found in the CSV.</p>
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default AnalysisSummary;
