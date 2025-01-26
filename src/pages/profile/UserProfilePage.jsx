import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '@/services/storage';
import { getUserProfile, updateUserProfile, deleteUser, changePassword } from '@/services/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTrash, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const UserProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editing, setEditing] = useState(false);
    const [changingPassword, setChangingPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '' });
    const [passwordData, setPasswordData] = useState({ oldPassword: '', newPassword: '' });
    const [message, setMessage] = useState('');
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
                        setFormData({ username: userData.data.username, email: userData.data.email });
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

    const handleSaveProfile = async () => {
        try {
            const updatedUser = await updateUserProfile(formData);
            if (updatedUser.success) {
                setUser(updatedUser.data);
                setEditing(false);
                setError(null);
                setMessage('Profile updated successfully.');
            } else {
                throw new Error(updatedUser.error || 'Failed to update profile.');
            }
        } catch (error) {
            console.error("Failed to update profile:", error);
            setError('Failed to update profile. Please try again.');
        }
    };

    const handleChangePassword = async () => {
        if (!passwordData.oldPassword || !passwordData.newPassword) {
            setError('Both fields are required.');
            return;
        }

        try {
            const response = await changePassword({
                old_password: passwordData.oldPassword,
                new_password: passwordData.newPassword,
            });

            if (response.success) {
                setMessage('Password updated successfully.');
                setPasswordData({ oldPassword: '', newPassword: '' });
                setChangingPassword(false);
            } else {
                throw new Error(response.error || 'Failed to update password.');
            }
        } catch (err) {
            console.error('Failed to change password:', err);
            setError('Failed to change password. Please try again.');
        }
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
            <div className="relative flex flex-col items-center justify-start pb-40 w-[334px] mt-20">
                {editing ? (
                    <form className="w-full space-y-4">
                        <h2 className="text-2xl font-bold text-primary">Edit Profile</h2>
                        {message && <p className="text-green-500">{message}</p>}
                        <div>
                            <label className="block text-secondary">Username</label>
                            <input
                                type="text"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                className="w-full px-4 py-2 border rounded-full text-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-secondary">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2 border rounded-full text-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-secondary">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-full text-primary"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={handleSaveProfile}
                                className="px-4 py-2 text-white bg-green-600 rounded-full hover:bg-green-700"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditing(false)}
                                className="px-4 py-2 text-white bg-gray-600 rounded-full hover:bg-gray-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : changingPassword ? (
                    <form className="w-full space-y-4">
                        <h2 className="text-2xl font-bold text-primary">Change Password</h2>
                        {message && <p className="text-green-500">{message}</p>}
                        <div>
                            <label className="block text-secondary">Old Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={passwordData.oldPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-full text-primary"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-secondary">New Password</label>
                            <div className="relative">
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={passwordData.newPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-full text-primary"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                >
                                    <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={handleChangePassword}
                                className="px-4 py-2 text-white bg-green-600 rounded-full hover:bg-green-700"
                            >
                                Change Password
                            </button>
                            <button
                                type="button"
                                onClick={() => setChangingPassword(false)}
                                className="px-4 py-2 text-white bg-gray-600 rounded-full hover:bg-gray-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <>
                        {/* Vista normal */}
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
                                onClick={() => setEditing(true)}
                            >
                                <span>Edit profile</span>
                                <FontAwesomeIcon icon={faCog} />
                            </button>
                            <button
                                className="flex items-center justify-between w-full px-4 py-2 border rounded-full border-primary text-primary"
                                onClick={() => setChangingPassword(true)}
                            >
                                <span>Change Password</span>
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
                    </>
                )}
            </div>
        </div>
    );
};

export default UserProfilePage;