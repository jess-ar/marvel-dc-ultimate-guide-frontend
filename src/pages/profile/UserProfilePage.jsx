import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '@/services/storage';
import { getUserProfile } from '@/services/auth'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCog, faTrash } from '@fortawesome/free-solid-svg-icons';

const UserProfilePage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = getToken();
        if (!token) {
            navigate('/login'); 
        } else {
            const fetchUserProfile = async () => {
                try {
                    const userData = await getUserProfile(); 
                    setUser(userData); 
                } catch (error) {
                    console.error("Failed to fetch user data", error);
                    removeToken(); 
                    navigate('/login');
                }
            };

            fetchUserProfile();
        }
    }, [navigate]); 

    const handleLogout = () => {
        removeToken();
        navigate('/login'); 
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="relative flex flex-col items-center justify-start pb-40 w-[334px]">
                <div className="flex flex-col items-center mb-8">
                    <img src={user.avatar || 'default_avatar.png'} alt="User Avatar" className="w-20 h-20 mb-4 rounded-full" />
                    <h2 className="text-3xl font-bold text-primary">{user.username}</h2>
                    <p className="text-secondary">View and edit your profile</p>
                </div>

                <div className="w-full space-y-4 text-left">
                    <div className="py-2 border-b border-primary">
                        <span className="block text-secondary">Username</span>
                        <span className="block text-primary">{user.username}</span>
                    </div>
                    <div className="py-2 border-b border-primary">
                        <span className="block text-secondary">Email</span>
                        <span className="block text-primary">{user.email}</span>
                    </div>
                    <div className="py-2 border-b border-primary">
                        <span className="block text-secondary">Password</span>
                        <span className="block text-primary">************</span>
                    </div>
                    <div className="py-2 border-b border-primary">
                        <span className="block text-secondary">Avatar</span>
                        <span className="block text-primary">{user.avatar || 'N/A'}</span>
                    </div>
                </div>
                <div className="w-full mt-8 space-y-4">
                    <button className="flex items-center justify-between w-full px-4 py-2 border rounded-full border-primary text-primary">
                        <span>Favourite</span>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>

                    <button className="flex items-center justify-between w-full px-4 py-2 border rounded-full border-primary text-primary">
                        <span>Edit profile</span>
                        <FontAwesomeIcon icon={faCog} />
                    </button>

                    <button className="flex items-center justify-between w-full px-4 py-2 border rounded-full border-primary text-primary">
                        <span>Delete profile</span>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>

                <button
                    className="w-full px-4 py-2 mt-8 text-white bg-red-600 rounded-full hover:bg-red-700"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserProfilePage;
