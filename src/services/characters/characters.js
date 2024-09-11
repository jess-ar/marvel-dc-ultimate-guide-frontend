import apiClient from '@/services/apiClient';

export const getCharacters = async () => {
    try {
        const response = await apiClient.get('/characters/');
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};

export const searchCharacter = async (name) => {
    try {
        const response = await apiClient.get(`/characters/search/?search=${name}`);
        return response.data;
    } catch (error) {
        console.error('Error searching for character:', error);
        throw error;
    }
};
