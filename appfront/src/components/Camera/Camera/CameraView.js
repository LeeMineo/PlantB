import React, { useRef, useEffect, useState } from 'react';
import '../../../css/pages/CameraPage.css';  // CSS 파일 임포트

const CameraView = ({ onCapture, onSwitchCamera }) => {
    const videoRef = useRef(null);
    const [facingMode, setFacingMode] = useState('environment');
    const streamRef = useRef(null);

    useEffect(() => {
        const startVideo = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode },
                });
                streamRef.current = stream;
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    console.log('Camera stream started.');
                }
            } catch (err) {
                console.error('Error accessing media devices.', err);
            }
        };

        startVideo();

        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                console.log('Camera stream stopped.');
            }
        };
    }, [facingMode]);

    const handleCapture = () => {
        const video = videoRef.current;
        if (!video) return;

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
            if (blob) {
                console.log('Image captured:', blob);
                onCapture(blob);
            } else {
                console.error('Failed to capture image.');
            }
        }, 'image/jpeg');
    };

    const handleSwitchCamera = () => {
        setFacingMode(prevMode => (prevMode === 'environment' ? 'user' : 'environment'));
    };

    return (
        <div id="cameracont-view">
            <video ref={videoRef} autoPlay playsInline></video>
            <div id="cameracont-controls">
                <button id="cameracont-capture" onClick={handleCapture}></button>
                <button id="cameracont-switch" onClick={handleSwitchCamera}>⟳</button>
            </div>
        </div>
    );
};

export default CameraView;
