import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/PhotoTipPage.css';
import CameraHeader from '../../components/Camera/Common/CameraHeader';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';

const PhotoTipPage = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/camera');  // '계속' 버튼 클릭 시 카메라 페이지로 이동
    };

    return (
        <div className="phototip-photo-tip-page">
            <CameraHeader/>
            <h1 className="phototip-title">촬영 팁</h1>
            <div className="phototip-correct-example">
                <div className="phototip-image-container">
                    <img src="./phototip/correct_plant.jpg" alt="Correct example" className="phototip-correct-image" />
                    <IoCheckmarkCircle className="phototip-correct-icon phototip-check-icon" />
                </div>
            </div>
            <div className="phototip-wrong-examples">
                <div className="phototip-wrong-example">
                    <div className="phototip-image-container">
                        <img src="./phototip/too_close.jpg" alt="Too close" className="phototip-wrong-image" />
                        <IoCloseCircle className="phototip-wrong-icon phototip-close-icon" />
                    </div>
                    <p className="phototip-wrong-write" > 너무 가까운 <br></br>거리</p>
                </div>
                <div className="phototip-wrong-example">
                    <div className="phototip-image-container">
                        <img src="./phototip/too_far.jpg" alt="Too far" className="phototip-wrong-image" />
                        <IoCloseCircle className="phototip-wrong-icon phototip-close-icon" />
                    </div>
                    <p className="phototip-wrong-write">너무 먼 거리</p>
                </div>
                <div className="phototip-wrong-example">
                    <div className="phototip-image-container">
                        <img src="./phototip/too_many.jpg" alt="Multiple species" className="phototip-wrong-image" />
                        <IoCloseCircle className="phototip-wrong-icon phototip-close-icon" />
                    </div>
                    <p className="phototip-wrong-write">다양한 종</p>
                </div>
            </div>
            <button className="phototip-continue-button" onClick={handleContinue}>계속</button>
        </div>
    );
};

export default PhotoTipPage;
