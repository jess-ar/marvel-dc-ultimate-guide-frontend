import Button from '@/components/button/Button';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
            <div className="mb-4">
                <Button
                    text="Signup"
                    onClick={() => navigate('/signup')}
                />
            </div>
            <div>
                <Button
                    text="Login"
                    onClick={() => navigate('/login')}
                />
            </div>
        </div>
    );
};

export default ProfilePage;
