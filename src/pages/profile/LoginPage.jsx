import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/button/Button';
import ArrowBack from '@/components/arrow/ArrowBack';
import LogoMarvel from '@/components/logos/LogoMarvel';
import LogoDc from '@/components/logos/LogoDc';
import { loginUser } from '@/services/auth';
import { setToken } from '@/services/storage'; 

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill out all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            const result = await loginUser(email, password);
            console.log(result);

            if (result.success) {
                setToken(result.data.access);
                setError('');
                navigate('/user/profile'); 
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            setError('An unexpected error occurred.');
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen pt-11 bg-background">
            <div className="absolute top-4 left-4">
                <ArrowBack onClick={() => navigate(-1)} />
            </div>

            <div className="relative flex flex-col items-center justify-start pb-40 w-[334px]">
                <div className="flex flex-col items-center mb-8 space-y-6">
                    <LogoMarvel className="mb-4 w-28 md:w-36 lg:w-48" />
                    <LogoDc className="w-20 md:w-24 lg:w-28" />
                </div>

                <h2 className="w-full mt-2 mb-12 font-bold text-left text-md text-secondary">Login</h2>
                <div className="relative w-full mb-1">
                    {error && <p className="mb-4 text-center text-primary">{error}</p>}

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-full shadow-lg bg-secondary text-background placeholder-[#AA9999] focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        <div className="relative mb-8">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-full shadow-lg bg-secondary text-background placeholder-[#AA9999] focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-primary" />
                            </button>
                        </div>

                        <div className="flex justify-center mb-6">
                            <Button
                                type="submit"
                                text="Login"
                                className="w-full py-2 font-semibold rounded-full text-secondary bg-primary hover:bg-red-700"
                            />
                        </div>

                        <div className="w-full mt-6 mb-4 text-sm text-center text-secondary">
                            Do not have an account?{' '}
                            <a href="/signup" className="text-primary hover:underline">
                                Signup
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
