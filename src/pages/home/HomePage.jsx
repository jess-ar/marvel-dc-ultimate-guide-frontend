import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-full">
      <section className="relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden bg-black">
        <img
          src="https://res.cloudinary.com/dt052lsti/image/upload/v1744312507/23623400e91035e9905a6ff4306a2d70_1_lbum9e.png"
          alt="Hero Marvel DC"
          className="absolute inset-0 w-full h-full object-cover brightness-[.8] z-20"
        />

        <div className="relative z-20 flex items-start justify-end w-full h-full px-4 pt-10 text-white md:px-10 md:pt-16">
          <div className="max-w-xs text-right sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="flex items-center justify-end gap-2 mb-2">
              <p className="text-3xl sm:text-4xl md:text-4xl font-[Bangers]">Marvel</p>
              <span className="text-3xl font-bold sm:text-4xl">&</span>
              <p className="text-3xl sm:text-4xl md:text-4xl font-[Bangers]">DC</p>
              <span className="text-3xl font-bold sm:text-3xl">:</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-[Bangers]">
              {t("home.title")}
            </h1>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-6xl px-4 font-sans text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
        <p className="mb-8 text-xl font-semibold leading-relaxed text-center sm:text-2xl md:text-left">
          {t("home.intro")}
        </p>
        <div className="grid grid-cols-1 gap-8 text-base leading-relaxed md:grid-cols-2 lg:text-lg">
          <div>
            <p className="mb-4">{t("home.description1")}</p>
          </div>
          <div>
            <p className="mb-4">{t("home.description2")}</p>
          </div>
        </div>
        <p className="mt-6 text-xs italic text-center text-gray-300 lg:text-sm md:text-left">
          {t("home.tip")}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
