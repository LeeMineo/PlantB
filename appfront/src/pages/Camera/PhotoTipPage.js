import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/PhotoTipPage.css';
import CameraHeader from '../../components/Camera/Common/CameraHeader'; // CameraHeader 추가

const PhotoTipPage = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/camera');  // '계속' 버튼 클릭 시 카메라 페이지로 이동
    };

    return (
        <div className="photo-tip-page">
            <CameraHeader title="촬영 팁" />  {/* 헤더 추가 */}
            <div className="tips">
                <div className="tip-item">
                    <img src="path/to/correct-image.png" alt="적절한 거리" className="tip-image"/>
                    <div className="tip-overlay tip-correct"></div>
                </div>
                <div className="tip-item">
                    <img src="path/to/too-close-image.png" alt="너무 가까운 거리" className="tip-image"/>
                    <div className="tip-overlay tip-wrong"></div>
                    <p>너무 가까운 거리</p>
                </div>
                <div className="tip-item">
                    <img src="path/to/too-far-image.png" alt="너무 먼 거리" className="tip-image"/>
                    <div className="tip-overlay tip-wrong"></div>
                    <p>너무 먼 거리</p>
                </div>
                <div className="tip-item">
                    <img src="path/to/mixed-image.png" alt="다양한 중" className="tip-image"/>
                    <div className="tip-overlay tip-wrong"></div>
                    <p>다양한 종</p>
                </div>
            </div>
            <button className="continue-button" onClick={handleContinue}>계속</button>
        </div>
    );
};

export default PhotoTipPage;
