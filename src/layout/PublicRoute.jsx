/* eslint-disable react/prop-types */
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const PublicRoute = ({ isFluid = false }) => {
    const location = useLocation();

    const shouldBeFluid = isFluid || location.pathname === '/welcome';

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className={`flex-grow ${shouldBeFluid ? 'w-full' : 'max-w-5xl mx-auto'}`}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default PublicRoute;