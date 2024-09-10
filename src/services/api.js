import axios from 'axios';

const API_URL = 'https://superheroapi.com/api';

export const getCharacters = async () => {
    try {
        const response = await axios.get(`${API_URL}/${import.meta.env.VITE_SUPERHERO_API_KEY}/characters`);
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};