import React from 'react';

const AnalysisSummary = ({ plantData }) => {
    // plantData가 undefined거나 빈 배열이 아닌지 확인
    if (!plantData || plantData.length === 0) {
        return <div>No data available for the given plant.</div>;
    }

    return (
        <div className="analysis-summary">
            <h2>Analysis Result</h2>
            {plantData.map((result, index) => (
                <div key={index} className="plant-item">
                    <h3>
                        Species: {result.species?.commonNames?.join(', ') || result.species?.scientificNameWithoutAuthor}
                    </h3>
                    <br></br>
                    <p>Scientific Name: {result.species?.scientificName}</p>
                    <br></br>
                    <p>Family: {result.species?.family?.scientificName}</p>
                    <br></br>
                    <p>Score: {result.score}</p>
                    <div>
                        <h4>Images:</h4>
                        {result.images?.length > 0 ? (
                            result.images.map((image, idx) => (
                                <img key={idx} src={image.url.m} alt={image.organ} />
                            ))
                        ) : (
                            <p>No images available</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnalysisSummary;
