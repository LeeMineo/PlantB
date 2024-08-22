import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnalysisSummary from '../../components/Camera/Analysis/AnalysisSummary';
import AnalysisProgress from '../../components/Camera/Analysis/AnalysisProgress';
import ErrorPage from '../../components/Camera/Analysis/ErrorPage';  // ErrorPage 컴포넌트 import
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
                setError(error.response?.data?.message || '이미지를 인식할 수 없습니다.');
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
                <ErrorPage errorMessage={error} />  // ErrorPage 컴포넌트로 에러 메시지 전달
            ) : (
                <AnalysisSummary plantData={plantData} imageBlob={image} />
            )}
        </div>
    );
};

export default AnalysisResultPage;
