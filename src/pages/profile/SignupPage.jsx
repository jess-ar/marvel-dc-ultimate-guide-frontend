import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/button/Button';
import ArrowBack from '@/components/arrow/ArrowBack';
import LogoMarvel from '@/components/logos/LogoMarvel';
import LogoDc from '@/components/logos/LogoDc';
import { registerUser } from '@/services/auth';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError('Please fill out all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (username.length < 3 || /\s/.test(username)) {
            setError('Username must be at least 3 characters long and contain no spaces.');
            ;
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            const result = await registerUser(username, email, password);
            console.log(result);

            if (result.success) {
                setMessage('Account created successfully!');
                console.log(result.data);

                setError('');
                setUsername('');
                setEmail('');
                setPassword('');
                navigate('/Login');
            } else {
                setError(result.error || 'An error occurred during registration');
            }
        } catch (error) {
            setError('An unexpected error occurred.');
            console.error(error);
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="absolute top-4 left-4">
                <ArrowBack onClick={() => navigate(-1)} />
            </div>

            <div className="relative flex flex-col items-center justify-start pb-40 w-[334px]">
                <div className="flex flex-col items-center mb-8">
                    <LogoMarvel className="mb-4 w-28 md:w-36 lg:w-48" />
                    <LogoDc className="w-20 md:w-24 lg:w-28" />
                </div>

                <h2 className="mt-2 mb-12 text-2xl font-bold text-center text-secondary">Sign up</h2>
                <div className="relative w-full mb-1">
                    {error && <p className="mb-4 text-center text-primary">{error}</p>}
                    {message && <p className="mb-4 text-center text-green-500">{message}</p>}

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-2 border rounded-full shadow-lg bg-secondary text-background placeholder-[#AA9999] focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

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
                            <Button onClick={handleLogin}
                                type="submit"
                                text="Sign up"
                                className="w-full py-2 font-semibold rounded-full text-secondary bg-primary hover:bg-red-700"
                            />
                        </div>

                        <div className="w-full mt-6 mb-4 text-sm text-center text-secondary">
                            Already have an account?{' '}
                            <a href="/login" className="text-primary hover:underline">
                                Log in
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
