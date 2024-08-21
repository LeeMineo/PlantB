import axios from 'axios';

const API_KEY = '2b10okRDwVsMSSR637801CsqO';
const BASE_URL = 'https://my-api.plantnet.org/v2/identify/all';

export const identifyPlant = async (imageBlob) => {
    if (!(imageBlob instanceof Blob)) {
        throw new Error('The image provided is not a Blob or File');
    }

    const formData = new FormData();
    formData.append('images', imageBlob);
    formData.append('organs', 'leaf');

    try {
        const response = await axios.post(`${BASE_URL}?api-key=${API_KEY}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log("API Response:", response.data);

        return response.data; 
    } catch (error) {
        console.error('Error identifying plant:', error.response ? error.response.data : error.message);
        throw error;
    }
};
