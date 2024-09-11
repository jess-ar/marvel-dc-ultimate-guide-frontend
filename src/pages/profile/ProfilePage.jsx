import Button from '@/components/button/Button';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '/assets/images/characters/marvel/spider-back.jpg';

const ProfilePage = () => {
    const navigate = useNavigate();

    return (
        <div
            className="relative flex flex-col items-center justify-end h-screen bg-center bg-cover"
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

            <div className="relative z-20 flex flex-col items-center justify-center mb-24 space-y-4">
                <div className="w-64">
                    <Button
                        text="Signup"
                        className="w-full py-2 text-lg font-bold text-white bg-red-600 rounded-full hover:bg-red-700"
                        onClick={() => navigate('/signup')}
                    />
                </div>
                <div className="w-64">
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

export default ProfilePage;