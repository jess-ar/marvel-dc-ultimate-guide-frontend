import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import Search from '@/components/search/Search';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 z-50 w-full shadow-md h-14 bg-gradient-to-r from-red-600 via-black to-blue-600">
            <div className="flex items-center justify-between h-full max-w-5xl px-4 mx-auto">
                {/* Mobile Navbar */}
                <div className="flex items-center justify-between w-full h-full md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {menuOpen ? (
                            <FontAwesomeIcon icon={faTimes} size="lg" className="ml-2 text-white" />
                        ) : (
                            <FontAwesomeIcon icon={faBars} size="lg" className="ml-2 text-white" />
                        )}
                    </button>
                    <div className="flex items-center">
                        <Search />
                    </div>
                    <NavLink
                        to="/login"
                        className="px-2 py-1 text-white transition-all rounded hover:text-gray-300"
                    >
                        Log In
                    </NavLink>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute left-0 w-56 rounded-br-lg shadow-lg top-full bg-navbarmobile">
                        <ul className="flex flex-col items-start p-2 space-y-2">
                            <li>
                                <button
                                    onClick={() => navigate('/home')}
                                    className="block w-full px-4 py-2 text-left text-white transition-all hover:text-gray-300"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => navigate('/marvel')}
                                    className="block w-full px-4 py-2 text-left text-white transition-all hover:text-gray-300"
                                >
                                    Marvel
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/dc')}
                                    className="block w-full px-4 py-2 text-left text-white transition-all hover:text-gray-300"
                                >
                                    DC
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/about')}
                                    className="block w-full px-4 py-2 text-left text-white transition-all hover:text-gray-300"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/extras')}
                                    className="block w-full px-4 py-2 text-left text-white transition-all hover:text-gray-300"
                                >
                                    Extras
                                </button>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Desktop Navbar */}
                <div className="items-center hidden w-full h-full md:flex">
                    <div className="flex-1">
                        <Search />
                    </div>
                    <div className="flex justify-center flex-1 space-x-6">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-gray-200 px-2 py-1 rounded font-bold'
                                    : 'text-white hover:text-gray-300 px-2 py-1 rounded transition-all'
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/marvel"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-red-400 px-2 py-1 rounded font-bold'
                                    : 'text-white hover:text-red-400 px-2 py-1 rounded transition-all'
                            }
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            to="/dc"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-400 px-2 py-1 rounded font-bold'
                                    : 'text-white hover:text-blue-400 px-2 py-1 rounded transition-all'
                            }
                        >
                            DC
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-gray-200 px-2 py-1 rounded font-bold'
                                    : 'text-white hover:text-gray-300 px-2 py-1 rounded transition-all'
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/extras"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-gray-200 px-2 py-1 rounded font-bold'
                                    : 'text-white hover:text-gray-300 px-2 py-1 rounded transition-all'
                            }
                        >
                            Extras
                        </NavLink>
                    </div>
                    <NavLink
                        to="/welcome"
                        className="text-white transition-all rounded ml-72 hover:text-gray-300"
                    >
                        Log In
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;