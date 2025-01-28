import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '@/services/storage';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const ProtectedRoute = () => {
    const token = getToken();

    return token ? (
        <>
            <div className="w-full">
                <Navbar />
            </div>
            <div className="flex flex-col flex-grow max-w-5xl min-h-screen mx-auto">
                <Outlet />
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </>
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;