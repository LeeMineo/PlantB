import axios from 'axios';

const API_KEY = '2b10okRDwVsMSSR637801CsqO'; // API 키
const BASE_URL = 'https://my-api.plantnet.org/v2/projects'; // 프로젝트 리스트를 가져오는 URL

// 프로젝트 목록을 가져오는 함수
export const getProjects = async () => {
    try {
        // API에 GET 요청을 보내 프로젝트 목록을 가져옴
        const response = await axios.get(BASE_URL, {
            params: {
                lang: 'en', // 언어 설정 (필요시 변경 가능)
                type: 'kt', // 프로젝트 타입 설정
                'api-key': API_KEY, // API 키 추가
            },
        });

        // 응답 데이터 반환
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error.response ? error.response.data : error.message);
        throw error;
    }
};
