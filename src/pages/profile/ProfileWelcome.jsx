import Button from '@/components/button/Button';
import { useNavigate } from 'react-router-dom';
import { getToken } from '@/services/storage';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const backgroundImage = '/assets/images/characters/marvel/spider-back.jpg';

const ProfileWelcome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate('/welcome');
    }
  }, [navigate]);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen mt-10 bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
        }}
      ></div>

      <div className="relative z-20 flex flex-col items-center justify-center pt-64 space-y-6">
        <h1 className="text-3xl font-bold text-white font-[Bangers] md:text-5xl lg:text-5xl">
          {t("profile_welcome.title")}
        </h1>
        <p className="max-w-2xl p-2 font-sans text-base text-center text-gray-300 md:text-lg lg:text-lg">
          {t("profile_welcome.description")}
        </p>

        <div className="flex flex-col items-center justify-center w-full mt-8 space-y-4">
          <Button
            text={t("profile_welcome.signup_button")}
            className="w-full py-2 text-lg font-bold text-white bg-red-600 rounded-full hover:bg-red-700"
            onClick={() => navigate('/signup')}
          />
          <Button
            text={t("profile_welcome.login_button")}
            className="w-full py-2 text-lg font-bold text-white bg-red-600 rounded-full hover:bg-red-700"
            onClick={() => navigate('/login')}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileWelcome;
