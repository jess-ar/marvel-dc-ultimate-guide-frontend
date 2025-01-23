import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '@/services/storage';
import { getUserProfile, deleteUser } from '@/services/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCog, faTrash } from '@fortawesome/free-solid-svg-icons';

const UserProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = getToken();
        if (!token) {
            navigate('/login');
        } else {
            const fetchUserProfile = async () => {
                try {
                    const userData = await getUserProfile();
                    if (userData.success) {
                        setUser(userData.data);
                    } else {
                        throw new Error(userData.error || 'Failed to fetch user data.');
                    }
                } catch (error) {
                    console.error("Failed to fetch user data", error);
                    setError('Failed to load user profile. Please log in again.');
                    removeToken();
                    navigate('/login');
                } finally {
                    setLoading(false);
                }
            };
            fetchUserProfile();
        }
    }, [navigate]);

    const handleLogout = () => {
        removeToken();
        navigate('/login');
    };

    const handleFavourite = () => {
        console.log('Favourite clicked');
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    const handleDeleteProfile = async () => {
        if (window.confirm('Are you sure you want to delete your profile? This action cannot be undone.')) {
            try {
                await deleteUser(user.id);
                removeToken();
                navigate('/login');
            } catch (error) {
                console.error("Failed to delete profile:", error);
                setError('Failed to delete profile. Please try again later.');
            }
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="relative flex flex-col items-center justify-start pb-40 w-[334px]">
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={user.avatar || '/assets/images/default_avatar.png'}
                        alt="User Avatar"
                        className="w-20 h-20 mb-4 rounded-full"
                    />
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
                </div>

                <div className="w-full mt-8 space-y-4">
                    <button
                        className="flex items-center justify-between w-full px-4 py-2 border rounded-full border-primary text-primary"
                        onClick={handleFavourite}
                    >
                        <span>Favourite</span>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>

                    <button
                        className="flex items-center justify-between w-full px-4 py-2 border rounded-full border-primary text-primary"
                        onClick={handleEditProfile}
                    >
                        <span>Edit profile</span>
                        <FontAwesomeIcon icon={faCog} />
                    </button>

                    <button
                        className="flex items-center justify-between w-full px-4 py-2 border rounded-full border-primary text-primary"
                        onClick={handleDeleteProfile}
                    >
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