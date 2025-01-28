import Button from '@/components/button/Button';
import { useNavigate } from 'react-router-dom';
import { getToken } from '@/services/storage';
import { useEffect } from 'react';

const backgroundImage = '/assets/images/characters/marvel/spider-back.jpg';

const ProfileWelcome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = getToken();
        if (token) {
            navigate('/welcome');
        }
    }, [navigate]);

    return (
        <div
            className="relative flex flex-col items-center justify-end h-screen mt-10 bg-center bg-cover"
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

            <div className="relative z-20 flex flex-col items-center justify-center mb-24 space-y-6">
                <h1 className="text-lg font-bold text-white font-bangers md:text-lg lg:text-4xl">Welcome to Your Profile</h1>
                <p className="max-w-xl text-base font-sans text-center text-gray-300 md:text-base lg:text-[1.0925rem]">
                    Explore your personalized space in the Marvel/DC app. Log in to access your favorite heroes and manage your profile.
                </p>

                <div className="flex flex-col items-center justify-center w-full mt-8 space-y-4">
                    <Button
                        text="Signup"
                        className="w-full py-2 text-lg font-bold text-white bg-red-600 rounded-full hover:bg-red-700"
                        onClick={() => navigate('/signup')}
                    />
                    <Button
                        text="Login"
                        className="w-full py-2 text-lg font-bold text-white bg-red-600 rounded-full hover:bg-red-700"
                        onClick={() => navigate('/login')}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileWelcome;