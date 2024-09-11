import { useNavigate } from 'react-router-dom';
import LogoMarvel from '@/components/logos/LogoMarvel';
import LogoDC from '@/components/logos/LogoDC';
import Search from '@/components/Search/Search';
import backgroundImage from '/assets/images/characters/marvel/escudo.jpg'; 

const HomePage = () => {
    const navigate = useNavigate();

    const handleMarvelClick = () => {
        navigate('/marvel');
    };

    const handleDCClick = () => {
        navigate('/dc');
    };

    return (
        <div
            className="relative flex flex-col items-center justify-between min-h-screen pt-16 pb-32 bg-center bg-cover"
            style={{
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 z-10"
                style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
                }}
            ></div>

            <div className="relative z-20 flex flex-col items-center justify-between min-h-screen pt-16 pb-32"> 
                <h1 className="mb-12 text-4xl text-center text-white font-protest">
                    MARVEL & DC:<br />Definitive guide
                </h1>

                <div className="flex flex-col items-center mb-12 space-y-8">
                    <div onClick={handleMarvelClick} className="cursor-pointer">
                        <LogoMarvel />
                    </div>

                    <div onClick={handleDCClick} className="cursor-pointer">
                        <LogoDC />
                    </div>
                </div>

                <div className="flex justify-center w-full px-4">
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
