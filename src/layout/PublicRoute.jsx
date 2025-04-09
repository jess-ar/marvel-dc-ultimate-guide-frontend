/* eslint-disable react/prop-types */
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const PublicRoute = ({ isFluid = false }) => {
  const location = useLocation();
  const shouldBeFluid = isFluid || location.pathname === '/welcome';

  return (
    <div className="flex flex-col min-h-screen bg-[--color-background] text-[--color-secondary]">
      <Navbar />
      <main className={`grow px-4 py-8 ${shouldBeFluid ? 'w-full' : 'max-w-5xl mx-auto'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicRoute;