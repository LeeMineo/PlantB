import Papa from 'papaparse';

export const matchPlantWithCSV = async (scientificName) => {
    try {
        // Fetch the CSV data
        const response = await fetch('/data/GNM000101.csv');
        const arrayBuffer = await response.arrayBuffer();
        const text = new TextDecoder('euc-kr').decode(arrayBuffer); // Using 'euc-kr' as encoding
        
        // Parse the CSV
        const parsedData = Papa.parse(text, { 
            header: true, 
            skipEmptyLines: true 
        });
        
        console.log("CSV Columns:", Object.keys(parsedData.data[0]));

        // Clean the scientific name to remove the author's name, and convert to lowercase for comparison
        const cleanScientificName = scientificName.split(' ').slice(0, 2).join(' ').toLowerCase();

        // Find a row in the CSV where the '학명' matches the clean scientific name
        const matchedPlant = parsedData.data.find((row) => {
            const cleanRowScientificName = row['학명'] ? row['학명'].split(' ').slice(0, 2).join(' ').toLowerCase() : '';
            return cleanRowScientificName === cleanScientificName;
        });

        // Return the matched plant's data, or null if not found
        return matchedPlant ? {
            분류군ID: matchedPlant['분류군ID'] || 'No ID available',
            학명: matchedPlant['학명'] || 'No scientific name available',
            국명: matchedPlant['국명'] || 'No Korean name available',
            분류계급: matchedPlant['분류계급'] || 'No classification available',
            이명여부: matchedPlant['이명여부'] || 'No synonym status available',
            명명자: matchedPlant['명명자'] || 'No author available',
            명명년도: matchedPlant['명명년도'] || 'No year available',
            최초명명자: matchedPlant['최초명명자'] || 'No original author available',
            최초명명년도: matchedPlant['최초명명년도'] || 'No original year available',
            설명: matchedPlant['설명'] || 'No description available'
        } : null;

    } catch (error) {
        console.error('Error matching plant with CSV:', error);
        throw error;
    }
};
