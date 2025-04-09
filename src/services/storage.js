const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
import { jwtDecode } from "jwt-decode";

export const setToken = (token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const removeToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const setRefreshToken = (token) => {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

export const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const removeRefreshToken = () => {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
};

export const isAuthenticated = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return false;

    try {
        const { exp } = jwtDecode(token);
        return Date.now() < exp * 1000;
    } catch (error) {
        console.error("Invalid token:", error);
        return false;
    }
};

export const logout = () => {
    removeToken();
    removeRefreshToken();
};
