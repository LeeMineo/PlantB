import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';  // X 아이콘 추가
import './CameraHeader.css';  // 스타일 파일 임포트

const CameraHeader = ({ title, isMainNavigation }) => { // isMainNavigation prop 추가
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/main');  // 메인 페이지로 이동
    };

    return (
        <header className="camera-header">
            <IoClose className="close-icon" onClick={handleBack} />  {/* X 아이콘과 클릭 이벤트 */}
            <h1>{title}</h1>
        </header>
    );
};

export default CameraHeader;
