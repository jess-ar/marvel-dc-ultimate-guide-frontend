import axios from 'axios';
import { getToken } from '@/services/storage';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
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

apiClient.get('/characters/search?search=hulk')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error fetching data:', error));

export default apiClient;