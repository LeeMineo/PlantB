import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import './CameraHeader.css';

const CameraHeader = ({ title }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/main');
    };

    return (
        <header className="camera-header">
            <IoClose className="close-icon" onClick={handleBack} />
            <h1>{title}</h1>
        </header>
    );
};

export default CameraHeader;
