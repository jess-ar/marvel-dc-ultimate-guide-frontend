import axios from 'axios';


const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});


export const registerUser = async (username, email, password) => {
    try {
        const response = await apiClient.post('users/register/', { username, email, password });
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error in registerUser:", error.response?.data || error.message);

        if (error.response) {
            return { success: false, error: error.response.data };
        } else if (error.request) {
            return { success: false, error: 'Network error. Please try again later.' };
        } else {
            return { success: false, error: 'An unexpected error occurred. Please try again.' };
        }
    }
};


export const loginUser = async (email, password) => {
    try {
        const response = await apiClient.post('users/login/', { email, password }); 
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error in loginUser:", error.response?.data || error.message);

        if (error.response) {
            return { success: false, error: error.response.data };
        } else if (error.request) {
            return { success: false, error: 'Network error. Please try again later.' };
        } else {
            return { success: false, error: 'An unexpected error occurred. Please try again.' };
        }
    }
};

export const getUserProfile = async () => {
    try {
        const response = await apiClient.get('users/me/'); 
        return response.data;
    } catch (error) {
        console.error("Error fetching user profile:", error.response?.data || error.message);

        if (error.response) {
            throw new Error(error.response.data);
        } else if (error.request) {
            throw new Error('Network error. Please try again later.');
        } else {
            throw new Error('An unexpected error occurred. Please try again.');
        }
    }
};