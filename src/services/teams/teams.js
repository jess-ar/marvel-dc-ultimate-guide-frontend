import apiClient from '@/services/apiClient';

export const getTeams = async () => {
    try {
        const response = await apiClient.get('/api/teams/');
        return response.data;
    } catch (error) {
        console.error('Error fetching teams:', error);
        throw error;
    }
};

export const searchTeam = async (name) => {
    try {
        const response = await apiClient.get(`/teams/search/?search=${name}`);
        return response.data;
    } catch (error) {
        console.error('Error searching for team:', error);
        throw error;
    }
};
