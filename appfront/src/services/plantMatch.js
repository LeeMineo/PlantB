import Papa from 'papaparse';

export const matchPlantWithCSV = async (scientificName) => {
    try {
        const response = await fetch('/data/GNM000101.csv');
        const arrayBuffer = await response.arrayBuffer();
        const text = new TextDecoder('euc-kr').decode(arrayBuffer); // euc-kr 또는 맞는 인코딩 사용

        // CSV 파싱
        const parsedData = Papa.parse(text, { 
            header: true, 
            skipEmptyLines: true 
        });
        
        console.log("CSV 필드 이름들:", Object.keys(parsedData.data[0]));

        // 명명자를 제거한 식물명만 비교하기 위해, 명명자를 제거한 학명을 추출
        const cleanScientificName = scientificName.split(' ').slice(0, 2).join(' ').toLowerCase();

        // '학명' 컬럼에서 모든 학명을 출력하여 확인
        parsedData.data.forEach(row => {
            //console.log("학명:", row['학명']);
        });

        // 명명자를 제거한 학명과 일치하는 학명을 찾음
        const matchedPlant = parsedData.data.find((row) => {
            const cleanRowScientificName = row['학명'] ? row['학명'].split(' ').slice(0, 2).join(' ').toLowerCase() : '';
            return cleanRowScientificName === cleanScientificName;
        });

        //console.log("Matched Plant:", matchedPlant);

        return matchedPlant ? {
            국명: matchedPlant['국명'] || 'No Korean name available',
            설명: matchedPlant['설명'] || 'No description available'
        } : null;

    } catch (error) {
        console.error('Error matching plant with CSV:', error);
        throw error;
    }
};
