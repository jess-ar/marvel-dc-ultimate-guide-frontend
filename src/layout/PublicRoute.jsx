import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';


const PublicRoute = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white">
            <div className="flex-grow">
                <Outlet />
            </div>
            <Navbar className="md:order-first" />
        </div>
    );
};

export default PublicRoute;
