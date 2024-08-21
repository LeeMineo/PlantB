import axios from 'axios';

export const koreanPlant = async (scientificName) => {
    try {
        const serviceKey = 'V3qYkFzz%2BJKf0oDLFsCK49PAej%2FYOEUiQRyvkffjj7SQ6OuXmZS1LCkHPJM1YTbYs3Ww6WNKoPH93uWQVBZv3g%3D%3D'; // 서비스 키를 여기에 넣으세요
        
        // 명명자를 제거 (예: 'Ginkgo biloba L.' -> 'Ginkgo biloba')
        const cleanScientificName = scientificName.replace(/\sL\.$/, '').trim();

        // 정확한 API URL 확인
        const url = `/openapi/service/rest/KpniService/btncInfo`;

        // 요청 파라미터를 다시 확인
        const params = {
            serviceKey: serviceKey,
            q1: cleanScientificName
        };

        console.log("Request URL:", url);
        console.log("Request Params:", params);

        const response = await axios.get(url, {
            params: params,
            responseType: 'text'
        });

        console.log("API Response Data:", response.data);

        // XML 데이터를 파싱하여 JSON으로 변환
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "application/xml");

        console.log("Parsed XML:", xmlDoc.documentElement);

        const item = xmlDoc.getElementsByTagName("item")[0];

        if (item) {
            const koreanName = item.getElementsByTagName("korname")[0]?.textContent || "No Korean name available";
            const plantScnm = item.getElementsByTagName("plantSpecsScnm")[0]?.textContent || "No scientific name available";
            const engName = item.getElementsByTagName("engname")[0]?.textContent || "No English name available";

            console.log("Extracted Data:", { koreanName, plantScnm, engName });

            return {
                koreanName,
                plantScnm,
                engName
            };
        } else {
            console.warn("No matching item found in the response.");
            return null; // item이 없을 경우 null 반환
        }
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
};
