import React, { useRef, useEffect, useState } from 'react';

const CameraView = ({ onCapture }) => {
    const videoRef = useRef(null); // 비디오 요소를 참조하기 위한 ref
    const [facingMode, setFacingMode] = useState('user'); // 초기 카메라 모드를 전면('user')으로 설정
    const streamRef = useRef(null); // 스트림을 관리하기 위한 ref

    useEffect(() => {
        const startVideo = async () => {
            try {
                // 사용자의 미디어 디바이스(카메라)를 가져옴, 지정된 카메라 모드를 사용
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode },
                });
                streamRef.current = stream; // 스트림을 ref에 저장
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
            // 컴포넌트가 언마운트되거나 facingMode가 변경될 때 비디오 스트림을 정리
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                console.log('Camera stream stopped.');
            }
        };
    }, [facingMode]);

    // 현재 비디오 프레임을 캡처하는 함수
    const handleCapture = () => {
        const video = videoRef.current;
        if (!video) return;

        // 캡처하기 위해 캔버스를 생성하고, 비디오 프레임을 캔버스에 그림
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // 캔버스 내용을 Blob 형식으로 변환
        canvas.toBlob((blob) => {
            if (blob) {
                console.log('Image captured:', blob);
                onCapture(blob); // 부모 컴포넌트로 Blob 전달
            } else {
                console.error('Failed to capture image.');
            }
        }, 'image/jpeg'); // 이미지 포맷을 'image/jpeg'로 지정
    };

    // 카메라 모드를 전면과 후면 사이에서 전환하는 함수
    const handleSwitchCamera = () => {
        setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
    };

    return (
        <div className="camera-view">
            <video ref={videoRef} autoPlay playsInline></video>
            <button onClick={handleCapture}>Capture</button>
            <button onClick={handleSwitchCamera}>Switch Camera</button>
        </div>
    );
};

export default CameraView;
