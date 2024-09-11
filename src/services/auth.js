import apiClient from '@/services/apiClient';

export const registerUser = async (username, email, password) => {
    try {
        const response = await apiClient.post('users/register/', { username, email, password });
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error in registerUser:", error.response?.data || error.message);
        return handleErrorResponse(error);
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await apiClient.post('users/login/', { email, password });
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error in loginUser:", error.response?.data || error.message);
        return handleErrorResponse(error);
    }
};

export const getUserProfile = async () => {
    try {
        const response = await apiClient.get('users/me/');
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error in getUserProfile:", error.response?.data || error.message);
        return handleErrorResponse(error);
    }
};

const handleErrorResponse = (error) => {
    if (error.response) {
        return { success: false, error: error.response.data };
    } else if (error.request) {
        return { success: false, error: 'Network error. Please try again later.' };
    } else {
        return { success: false, error: 'An unexpected error occurred. Please try again.' };
    }
};
