import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';

const PublicRoute = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-white">
            <div className="flex-grow">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default PublicRoute;

