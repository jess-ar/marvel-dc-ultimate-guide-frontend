import LogoMarvel from '@/components/logos/LogoMarvel';
import LogoDc from '@/components/logos/LogoDc';

const HomePage = () => {
    return (
        <div className="relative z-20 flex flex-col items-center justify-between min-h-screen pt-32 pb-64">
            <h1 className="flex flex-col items-center mt-8 mb-12 text-center text-white font-bangers">
                <span className="flex items-center space-x-4">
                    <LogoMarvel />
                    <span className="mx-2 font-sans text-3xl font-bold sm:text-4xl md:text-4xl">&</span>
                    <LogoDc />
                    <span className="mx-1 font-sans text-3xl bold text sm:text-4xl md:text-4xl">:</span>
                </span>
                <span className="mt-4 text-3xl sm:text-5xl md:text-5xl">Definitive guide</span>
            </h1>

            <div className="max-w-5xl p-4 font-sans text-base leading-relaxed text-left text-white lg:text-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                <p className="mb-4">
                    <strong>Didn&apos;t know</strong> there&apos;s a <strong>Marvel world</strong> and a <strong>DC world</strong>? That there are two huge comic book giants? Don&apos;t worry, <strong>you&apos;re in the right place!</strong>
                </p>
                <p className="mb-4 ">
                    With this <strong>ultimate guide</strong>, you&apos;ll finally be able to watch <strong>Marvel</strong> and <strong>DC</strong> movies knowing which universe each hero belongs to—plus, <strong>you&apos;ll have fun along the way!</strong> 😉
                </p>
                <p className="mb-4 ">
                    And if you already know your way around these vast universes, <strong>get ready to be amazed</strong> because this page is made for true fans. <strong>Dive in and enjoy! 🚀</strong>
                </p>

                <p className="mt-6 text-xs leading-normal lg:text-sm">
                    <em>Psst...</em> You can <strong>search</strong> for your favorite hero using the search bar in the <strong>navbar</strong>, or check out the popular characters from both <strong>Marvel</strong> and <strong>DC</strong> in the menu! There’s so much to discover, <strong>have fun! 😎</strong>
                </p>
                <section className="flex items-center justify-center mt-8 space-x-4">
                    <button
                        className="px-6 py-3 text-lg font-bold transition-transform transform bg-red-600 rounded-full shadow-lg hover:bg-red-700 hover:scale-105"
                        onClick={() => window.location.href = '/marvel'}
                    >
                        Explore Marvel
                    </button>
                    <button
                        className="px-6 py-3 text-lg font-bold transition-transform transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105"
                        onClick={() => window.location.href = '/dc'}
                    >
                        Explore DC
                    </button>
                </section>

            </div>
        </div>
    );
};

export default HomePage;