import Papa from 'papaparse';

export const processCSVData = async () => {
    try {
        const response = await fetch('/data/GNM000101.csv'); // 실제 CSV 파일 경로로 바꾸어야 합니다.
        const arrayBuffer = await response.arrayBuffer();
        const text = new TextDecoder('euc-kr').decode(arrayBuffer);

        const parsedData = Papa.parse(text, {
            header: true,
            skipEmptyLines: true
        });

        const processedData = parsedData.data.map(row => ({
            id: row['분류군ID'] || 'No ID available',
            name: row['국명'] || 'No Korean name available',
            scientificName: row['학명'] || 'No scientific name available',
            description: row['설명'] || 'No description available', 
            classification: row['분류계급'] || 'No classification available',
            synonymStatus: row['이명여부'] || 'No synonym status available',
            author: row['명명자'] || 'No author available',
            yearNamed: row['명명년도'] || 'No year available',
            originalAuthor: row['최초명명자'] || 'No original author available',
            originalYear: row['최초명명년도'] || 'No original year available',
            image: '/flower1.png' // 이미지 경로 설정 필요
        }));

        return processedData;
    } catch (error) {
        console.error('Error processing CSV data:', error);
        throw error;
    }
};
