import axios from 'axios';

export const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post('http://localhost:8000/api/register', {
            username,
            email,
            password,
        });

        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response?.data?.message || 'Registration failed' };
    }
};
