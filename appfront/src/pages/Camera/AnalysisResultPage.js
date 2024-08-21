import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnalysisSummary from '../../components/Camera/Analysis/AnalysisSummary';
import AnalysisProgress from '../../components/Camera/Analysis/AnalysisProgress';
import { identifyPlant } from '../../services/identifyPlant'; // API 호출 함수 임포트

const AnalysisResultPage = () => {
    const location = useLocation(); // 이전 페이지에서 이미지 Blob을 전달받음
    const [plantData, setPlantData] = useState([]); // 식물 데이터를 저장할 상태
    const [error, setError] = useState(null); // 에러 메시지를 저장
    const [loading, setLoading] = useState(true); // 로딩 상태를 추가

    const image = location.state?.imageBlob;

    useEffect(() => {
        const analyzePlant = async () => {
            try {
                if (!image) {
                    throw new Error('이미지가 제공되지 않았습니다.');
                }

                const result = await identifyPlant(image); // 식물 식별 API 호출
                setPlantData(result.results);
            } catch (error) {
                console.error('Error analyzing plant:', error);
                setError(error.message || '식별할 수 없음');
            } finally {
                setLoading(false); // 분석이 끝나면 로딩 상태를 false로 설정
            }
        };

        analyzePlant(); // 컴포넌트가 마운트되었을 때 식물 분석 실행
    }, [image]);

    if (loading) {
        return (
            <div className="loading-page">
                <AnalysisProgress imageBlob={image} /> {/* imageBlob 전달 */}
            </div>
        );
    }

    return (
        <div className="analysis-result-page">
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                <AnalysisSummary plantData={plantData} />
            )}
        </div>
    );
};

export default AnalysisResultPage;
