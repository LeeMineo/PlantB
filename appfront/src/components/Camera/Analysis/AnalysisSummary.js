import React, { useState, useEffect } from 'react';
import './AnalysisSummary.css';
import { matchPlantWithCSV } from '../../../services/plantMatch';
import Header from '../../Header';
import AnalysisProgress from './AnalysisProgress'; // Import the AnalysisProgress component

const AnalysisSummary = ({ plantData, imageBlob }) => {
    const [koreanData, setKoreanData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchKoreanData = async () => {
            if (!plantData || plantData.length === 0) return;

            setLoading(true);
            setError(null);

            try {
                const topThreeResults = plantData
                    .sort((a, b) => b.score - a.score)
                    .slice(0, 3);

                const fetchedData = await Promise.all(
                    topThreeResults.map(async (result) => {
                        const scientificName = result.species?.scientificName;
                        if (scientificName) {
                            const csvData = await matchPlantWithCSV(scientificName);
                            return { csvData };
                        }
                        return null;
                    })
                );

                setKoreanData(fetchedData.filter(data => data !== null));
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

    return (
        <div id="analysissum-summary">
            <Header title="Data & API Usage" height="20vw" />
            <h2 id="analysissum-title">분석 결과</h2>
            {plantData
                .sort((a, b) => b.score - a.score)
                .slice(0, 3)
                .map((result, index) => (
                    <div key={index} className="analysissum-plant-item">
                        <div className="analysissum-plant-info">
                            <h3 className="analysissum-species">
                                {result.species?.commonNames?.join(', ') || result.species?.scientificNameWithoutAuthor}
                            </h3>
                            <p className="analysissum-scientific-name">{result.species?.scientificName}</p>
                            <p className="analysissum-family">{result.species?.family?.scientificName}</p>
                            <p className="analysissum-score">Score: {result.score}</p>
                        </div>
                        <div className="analysissum-images-container">
                            <h4 className="analysissum-images-title">Images:</h4>
                            {result.images?.length > 0 ? (
                                result.images.map((image, idx) => (
                                    <img key={idx} className="analysissum-image" src={image.url.m} alt={image.organ} />
                                ))
                            ) : (
                                <p className="analysissum-no-images">No images available</p>
                            )}
                        </div>
                        <div className="analysissum-korean-data">
                            <h4>Korean Plant CSV Information</h4>
                            {koreanData[index] ? (
                                <>
                                    <p>국명: {koreanData[index].csvData?.국명}</p>
                                    <p>설명: {koreanData[index].csvData?.설명}</p>
                                </>
                            ) : (
                                <p>No matching data found in the CSV.</p>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default AnalysisSummary;
