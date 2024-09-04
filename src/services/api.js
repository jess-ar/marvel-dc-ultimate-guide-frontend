import axios from 'axios';

const API_URL = 'https://example.com/api';

export const getCharacters = async () => {
    try {
        const response = await axios.get(`${API_URL}/characters`);
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};