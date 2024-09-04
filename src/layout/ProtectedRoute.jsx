import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import Navbar from '@/components/Navbar';
import { ACCESS_TOKEN } from '@/constants';

const ProtectedRoute = () => {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        authenticateUser();
    }, []);

    const authenticateUser = () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false); 
            return;
        }

        try {
            const decoded = jwtDecode(token);
            const tokenExpiration = decoded.exp;
            const now = Date.now() / 1000;

            if (tokenExpiration < now) {
                setIsAuthorized(false);
            } else {
                setIsAuthorized(true);
            }
        } catch (error) {
            console.error("Invalid token", error);
            setIsAuthorized(false);
        }
    };

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    if (isAuthorized) {
        return (
            <>
                <Navbar />
                <Outlet /> 
            </>
        );
    } else {
        return <Navigate to="/login" />; 
    }
};

export default ProtectedRoute;
