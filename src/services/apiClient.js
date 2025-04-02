import axios from 'axios';
import { getToken } from '@/services/storage';

const apiClient = axios.create({
    baseURL: 'https://marvel-dc-ultimate-guide-backend.fly.dev/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = getToken(); 
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default apiClient;