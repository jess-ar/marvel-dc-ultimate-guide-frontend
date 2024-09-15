import LogoMarvel from '@/components/logos/LogoMarvel';
import LogoDc from '@/components/logos/LogoDc';

import backgroundImage from '/assets/images/characters/marvel/escudo.jpg';

const HomePage = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-between min-h-screen pb-8 mt-6 bg-center bg-cover pt-11"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="relative z-20 flex flex-col items-center justify-between min-h-screen pt-16 pb-64">
                <h1 className="flex flex-col items-center mt-8 mb-12 text-center text-white font-protest">
                    <span className="flex items-center space-x-4">
                        <LogoMarvel className="h-auto w-7 sm:w-9 md:w-24" />
                        <span className="mx-2 text-3xl font-bold sm:text-4xl md:text-4xl">&</span>
                        <LogoDc className="h-auto w-7 sm:w-9 md:w-24" />
                        <span className="mx-1 text-3xl font-bold sm:text-4xl md:text-4xl">:</span>
                    </span>
                    <span className="mt-4 text-3xl sm:text-5xl md:text-5xl">Definitive guide</span>
                </h1>

                {/* Texto ajustado con menos negritas y mejor espaciado */}
                <div className="max-w-2xl p-4 leading-relaxed text-left text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                    <p className="mb-4 text-base sm:text-base">
                        <strong>Didn&apos;t know</strong> there&apos;s a <strong>Marvel world</strong> and a <strong>DC world</strong>? That there are two huge comic book giants? Don&apos;t worry, <strong>you&apos;re in the right place!</strong>
                    </p>
                    <p className="mb-4 text-sm sm:text-base">
                        With this <strong>ultimate guide</strong>, you&apos;ll finally be able to watch <strong>Marvel</strong> and <strong>DC</strong> movies knowing which universe each hero belongs to—plus, <strong>you&apos;ll have fun along the way!</strong> 😉
                    </p>
                    <p className="mb-4 text-sm sm:text-base">
                        And if you already know your way around these vast universes, <strong>get ready to be amazed</strong> because this page is made for true fans. <strong>Dive in and enjoy! 🚀</strong>
                    </p>
                    
                    {/* Posdata divertida */}
                    <p className="mt-6 text-xs leading-normal sm:text-sm">
                        <em>Psst...</em> You can <strong>search</strong> for your favorite hero using the search bar in the <strong>navbar</strong>, or check out the popular characters from both <strong>Marvel</strong> and <strong>DC</strong> in the menu! There’s so much to discover, <strong>have fun! 😎</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
