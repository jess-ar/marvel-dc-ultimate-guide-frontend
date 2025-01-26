import apiClient from '@/services/apiClient';
import { setToken, setRefreshToken, logout } from '@/services/storage';

export const registerUser = async (username, email, password) => {
    try {
        const response = await apiClient.post('users/register/', { username, email, password });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response?.data || 'An unexpected error occurred.' };
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await apiClient.post('users/login/', { email, password });
        setToken(response.data.access);
        setRefreshToken(response.data.refresh);
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response?.data || 'An unexpected error occurred.' };
    }
};

export const getUserProfile = async () => {
    try {
        const response = await apiClient.get('users/me/');
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response?.data || 'An unexpected error occurred.' };
    }
};


export const deleteUser = async (userId) => {
    try {
        console.log(`Attempting to delete user with ID: ${userId}`);
        
        const response = await apiClient.delete(`users/delete_user/${userId}/`);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error deleting user:', error.response?.data || error.message);
        return handleErrorResponse(error);
    }
};

export const handleLogout = () => {
    console.log('Logging out user...');
    logout();
    window.location.href = '/login';
};

// Helper function to handle errors consistently
const handleErrorResponse = (error) => {
    console.error("Detailed error:", error);
    if (error.response) {
        // If the server responded with an error
        return { success: false, error: error.response.data };
    } else if (error.request) {
        // If the request was made but no response was received
        return { success: false, error: 'Network error. Please check your connection and try again.' };
    } else {
        // If something else caused the error
        return { success: false, error: 'An unexpected error occurred. Please try again.' };
    }
};

export const updateUserProfile = async (data) => {
    try {
        const response = await apiClient.put('/users/me/', data);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Failed to update user profile:', error.response?.data || error.message);
        return { success: false, error: error.response?.data || 'An unexpected error occurred.' };
    }
};

export const changePassword = async (data) => {
    try {
        const response = await apiClient.put('/users/change_password/', data);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Failed to change password:', error.response?.data || error.message);
        return { success: false, error: error.response?.data || 'An unexpected error occurred.' };
    }
};

