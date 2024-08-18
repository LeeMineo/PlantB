import React from 'react';
import CameraView from '../../components/Camera/Camera/CameraView';
import CameraControls from '../../components/Camera/Camera/CameraControls';
import CameraHeader from '../../components/Camera/Common/CameraHeader';
import { useNavigate } from 'react-router-dom';

const CameraPage = () => {
    const navigate = useNavigate();

    // 사진 촬영 후 이미지를 분석 페이지로 이동시키는 함수
    const handleCapture = (imageBlob) => {
        console.log('Captured image:', imageBlob);
        // imageBlob이 정의된 경우에만 분석 페이지로 이동
        if (imageBlob) {
            navigate('/analysis-result', { state: { imageBlob } });
        } else {
            console.error('No image captured.');
        }
    };

    // 카메라 전환 핸들러 (현재는 콘솔 로그만 출력)
    const handleSwitchCamera = () => {
        console.log('Switching camera');
    };

    return (
        <div className="camera-page">
            <CameraHeader title="촬영" />
            <CameraView onCapture={handleCapture} />
            <CameraControls onCapture={handleCapture} onSwitchCamera={handleSwitchCamera} />
        </div>
    );
};

export default CameraPage;
