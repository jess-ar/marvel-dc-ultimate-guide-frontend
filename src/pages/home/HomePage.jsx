import LogoMarvel from '@/components/logos/LogoMarvel';
import LogoDc from '@/components/logos/LogoDc';
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();
    
    return (
        <div className="relative z-20 flex flex-col items-center justify-between pt-20 pb-4">
            <h1 className="flex flex-col items-center mt-8 mb-4 text-center text-white font-bangers">
                <span className="flex items-center space-x-4">
                    <LogoMarvel />
                    <span className="mx-2 font-sans text-3xl font-bold sm:text-4xl md:text-4xl">&</span>
                    <LogoDc />
                    <span className="mx-1 font-sans text-3xl bold text sm:text-4xl md:text-4xl">:</span>
                </span>
                <span className="mt-4 text-3xl sm:text-5xl md:text-5xl">{t("home.title")}</span>
            </h1>

            <div className="max-w-5xl p-4 font-sans text-base leading-relaxed text-left text-white lg:text-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                <p className="mb-4">{t("home.intro")}</p>
                <p className="mb-4">{t("home.description1")}</p>
                <p className="mb-4">{t("home.description2")}</p>

                <p className="mt-6 text-xs leading-normal lg:text-sm">{t("home.tip")}</p>
                
                <section className="flex items-center justify-center mt-8 space-x-4 text-sm lg:text-lg">
                    <button
                        className="px-4 py-2 font-bold transition-transform transform bg-red-600 rounded-full shadow-lg md:px-6 md:py-3 hover:bg-red-700 hover:scale-105"
                        onClick={() => window.location.href = '/marvel'}
                    >
                        {t("home.exploreMarvel")}
                    </button>
                    <button
                        className="px-4 py-2 font-bold transition-transform transform bg-[#007DC0] rounded-full shadow-lg md:px-6 md:py-3 hover:bg-[#0C518B] hover:scale-105"
                        onClick={() => window.location.href = '/dc'}
                    >
                        {t("home.exploreDC")}
                    </button>
                </section>
            </div>
        </div>
    );
};

export default HomePage;