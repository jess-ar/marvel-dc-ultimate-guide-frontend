import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '@/services/storage';
import Navbar from '@/components/navbar/Navbar';

const ProtectedRoute = () => {
    const token = getToken();

    return token ? (
        <>
            <Navbar />
            <Outlet />
        </>
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;
