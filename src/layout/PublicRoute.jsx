import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const PublicRoute = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow max-w-5xl mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default PublicRoute;