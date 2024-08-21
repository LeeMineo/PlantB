import React from 'react';
import './AnalysisProgress.css'; // 스타일을 위한 CSS 파일을 임포트합니다.

const AnalysisProgress = ({ imageBlob }) => {
    // Ensure the imageBlob is valid before creating a URL
    const imageUrl = imageBlob ? URL.createObjectURL(imageBlob) : null;

    return (
        <div className="analysis-progress-container">
            <img src="/plantb_logo_white.svg" alt="PlantB Logo" className="progress-logo-icon" />
            <div className="main-image">
                {imageUrl ? (
                    <img src={imageUrl} alt="Analyzing" /> // 생성된 이미지 URL을 사용
                ) : (
                    <p>No image available</p> // Handle the case where the imageBlob is invalid
                )}
            </div>
            <span className="progress-text">검색 중...</span>

            <div className="message">
                플랜트비는 항상 사용자를 먼저 생각합니다.
            </div>
        </div>
    );
};

export default AnalysisProgress;
