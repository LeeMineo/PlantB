import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRedo } from 'react-icons/fa'; // Redo 아이콘 import
import './ErrorPage.css';
import Header from '../../Header';

const ErrorPage = ({ errorMessage }) => {
    const navigate = useNavigate();

    const handleRetry = () => {
        navigate('/camera'); // 다시 시도할 때 카메라 페이지로 이동
    };

    return (
        <><Header height="20vw" /><div className="error-page">
            <h1>이미지를 인식할 수 없습니다.</h1>
            <p>{errorMessage || '다시 촬영해주세요.'}</p>
            <button className="retry-button" onClick={handleRetry}>
                <FaRedo className="retry-icon" /> 다시 촬영하기
            </button>
        </div></>
    );
};

export default ErrorPage;
