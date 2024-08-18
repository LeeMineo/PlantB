import axios from 'axios';

const API_KEY = '2b10okRDwVsMSSR637801CsqO';
const BASE_URL = 'https://my-api.plantnet.org/v2/identify/all'; // 여기서 "all"은 모든 프로젝트에서 식별을 의미

export const identifyPlant = async (imageBlob) => {
    if (!(imageBlob instanceof Blob)) {
        throw new Error('The image provided is not a Blob or File');
    }

    const formData = new FormData();
    formData.append('images', imageBlob); // 이미지 추가
    formData.append('organs', 'leaf'); // 예시로 'leaf'를 추가, 필요에 따라 변경 가능

    try {
        const response = await axios.post(`${BASE_URL}?api-key=${API_KEY}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error('Error identifying plant:', error.response ? error.response.data : error.message);
        throw error;
    }
};
