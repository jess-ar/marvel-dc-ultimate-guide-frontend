import { useNavigate } from 'react-router-dom';
import LogoMarvel from '@/components/logos/LogoMarvel';
import LogoDC from '@/components/logos/LogoDC';
import Search from '@/components/Search/Search';

const HomePage = () => {
    const navigate = useNavigate();

    const handleMarvelClick = () => {
        navigate('/marvel/popular');
    };

    const handleDCClick = () => {
        navigate('/dc/popular');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen home-page bg-background">
            <h1 className="mb-8 text-3xl text-center text-white font-protest">Marvel & DC: <br />
                Definitive Guide</h1>

            {/* Contenedor de los logos */}
            <div className="flex justify-center mb-8 space-x-8 place-items-center">
                <div onClick={handleMarvelClick} className="cursor-pointer">
                    <LogoMarvel />
                </div>
                <div onClick={handleDCClick} className="cursor-pointer">
                    <LogoDC />
                </div>
            </div>

            <Search />
        </div>
    );
};

export default HomePage;