import apiClient from '@/services/apiClient';
import { setToken, setRefreshToken } from '@/services/storage';
import { logout } from '@/services/storage';

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

        // Guarda el token en el almacenamiento local
        setToken(response.data.access);
        setRefreshToken(response.data.refresh);

        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error logging in:', error.response?.data || error.message);

        if (error.response) {
            return { success: false, error: error.response.data };
        } else {
            return { success: false, error: 'An unexpected error occurred.' };
        }
    }
};

export const getUserProfile = async () => {
    try {
        const response = await apiClient.get('users/me/');
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error in getUserProfile:", error.response?.data || error.message);
        return {
            success: false,
            error: error.response?.data?.error || 'An unexpected error occurred.',
        };
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

export const handleLogout = () => {
    logout();
    window.location.href = '/login';
};

export const deleteUser = async (userId) => {
    try {
        const response = await apiClient.delete(`users/delete_user/${userId}/`);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error deleting user:', error.response?.data || error.message);
        return { success: false, error: error.response?.data || 'An error occurred.' };
    }
};