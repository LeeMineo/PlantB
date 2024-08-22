import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnalysisSummary from '../../components/Camera/Analysis/AnalysisSummary';
import AnalysisProgress from '../../components/Camera/Analysis/AnalysisProgress';
import { identifyPlant } from '../../services/identifyPlant';

const AnalysisResultPage = () => {
    const location = useLocation();
    const [plantData, setPlantData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const image = location.state?.imageBlob;

    useEffect(() => {
        const analyzePlant = async () => {
            try {
                if (!image) {
                    throw new Error('이미지가 제공되지 않았습니다.');
                }

                const result = await identifyPlant(image);
                setPlantData(result.results);
            } catch (error) {
                console.error('Error analyzing plant:', error);
                setError(error.message || '식별할 수 없음');
            } finally {
                setLoading(false);
            }
        };

        analyzePlant();
    }, [image]);

    if (loading) {
        return (
            <div className="loading-page">
                <AnalysisProgress imageBlob={image} />
            </div>
        );
    }

    return (
        <div className="analysis-result-page">
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                <AnalysisSummary plantData={plantData} imageBlob={image} />
            )}
        </div>
    );
};

export default AnalysisResultPage;
