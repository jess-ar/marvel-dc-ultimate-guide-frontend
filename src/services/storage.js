const ACCESS_TOKEN_KEY = 'accessToken';

export const setToken = (token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const removeToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const isAuthenticated = () => {
    const token = getToken();
    return !!token; 
};
