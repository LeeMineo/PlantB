import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // useNavigate 추가
import { processCSVData } from '../services/processCSVData';  // processCSVData 함수 import
import { FaArrowLeft } from 'react-icons/fa';  // 뒤로가기 아이콘 import
import '../css/pages/PlantDetailPage.css';  // CSS 파일 import

const PlantDetailPage = () => {
    const { plantId } = useParams();  // URL 파라미터에서 plantId를 가져옴
    const [plantData, setPlantData] = useState(null);
    const navigate = useNavigate();  // useNavigate 훅으로 네비게이션 기능 사용

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await processCSVData();
                const plant = data.find(item => item.id === plantId);
                setPlantData(plant);
            } catch (error) {
                console.error('Error fetching plant data:', error);
            }
        };

        fetchData();
    }, [plantId]);

    if (!plantData) {
        return <p>Loading...</p>;
    }

    return (
        <div id="plantdetail-page">
            <div id="plantdetail-header">
                <FaArrowLeft id="plantdetail-back-icon" onClick={() => navigate(-1)} />  {/* 뒤로가기 아이콘과 클릭 시 뒤로 가기 기능 */}
                <h1 id="plantdetail-name">{plantData.name}</h1>
            </div>
            <img src={plantData.image} alt={plantData.name} id="plantdetail-image" />
            <div id="plantdetail-info">
                <h2 id="plantdetail-description-title">설명</h2>
                <p id="plantdetail-description">{plantData.description}</p>

                <h2 id="plantdetail-scientificname-title">학명</h2>
                <p id="plantdetail-scientificname">{plantData.scientificName}</p>

                <h2 id="plantdetail-classification-title">분류군</h2>
                <p id="plantdetail-classification">{plantData.classification}</p>

                <h2 id="plantdetail-other-info-title">기타 정보</h2>
                <p><strong>이명여부:</strong> {plantData.synonymStatus}</p>
                <p><strong>명명자:</strong> {plantData.author}</p>
                <p><strong>명명년도:</strong> {plantData.yearNamed}</p>
                <p><strong>최초명명자:</strong> {plantData.originalAuthor}</p>
                <p><strong>최초명명년도:</strong> {plantData.originalYear}</p>
            </div>
        </div>
    );
};

export default PlantDetailPage;
