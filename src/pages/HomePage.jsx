import LogoMarvel from '@/components/logos/LogoMarvel';
import LogoDc from '@/components/logos/LogoDc';
import Search from '@/components/Search/Search';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-black home-page">
            <div className="mt-10 text-center">
                <h1 className="text-3xl font-bold text-white">Marvel & DC: Definitive Guide</h1>
                <div className="flex justify-center mt-8">
                    <LogoMarvel />
                    <LogoDc />
                </div>
            </div>
            <Search />
        </div>
    );
};

export default HomePage;