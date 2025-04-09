import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '@/services/storage';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const ProtectedRoute = () => {
  const token = getToken();

  return token ? (
    <div className="flex flex-col min-h-screen text-white bg-background">
      <Navbar />
      <main className="w-full max-w-5xl px-4 py-8 mx-auto grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};


export default ProtectedRoute;