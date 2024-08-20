import React from 'react';
import './AnalysisSummary.css';

const AnalysisSummary = ({ plantData }) => {
    // plantData가 undefined거나 빈 배열이 아닌지 확인
    if (!plantData || plantData.length === 0) {
        return <div id="analysissum-no-data">No data available for the given plant.</div>;
    }

    return (
        <div id="analysissum-summary">
            <h2 id="analysissum-title">Analysis Result</h2>
            {plantData.map((result, index) => (
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
                </div>
            ))}
        </div>
    );
};

export default AnalysisSummary;
