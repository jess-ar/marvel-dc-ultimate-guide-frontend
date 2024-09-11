import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const getCharacters = async () => {
    try {
        const response = await axios.get(`${API_URL}/characters/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};

export const searchCharacter = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/characters/search/?search=${name}`);
        return response.data;
    } catch (error) {
        console.error('Error searching for character:', error);
        throw error;
    }
};
