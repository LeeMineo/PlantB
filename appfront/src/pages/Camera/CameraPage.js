import React from 'react';
import CameraView from '../../components/Camera/Camera/CameraView';
import CameraHeader from '../../components/Camera/Common/CameraHeader';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/CameraPage.css';  // CSS 파일 임포트

const CameraPage = () => {
    const navigate = useNavigate();

    const handleCapture = (imageBlob) => {
        console.log('Captured image:', imageBlob);
        if (imageBlob) {
            navigate('/analysis-result', { state: { imageBlob } });
        } else {
            console.error('No image captured.');
        }
    };

    const handleSwitchCamera = () => {
        console.log('Switching camera');
    };

    return (
        <div id="cameracont-page">
            <CameraHeader/>
            <CameraView onCapture={handleCapture} onSwitchCamera={handleSwitchCamera} />
        </div>
    );
};

export default CameraPage;
