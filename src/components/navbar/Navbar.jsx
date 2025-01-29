import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import Search from '@/components/search/Search';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Cerrar menú al hacer clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full shadow-md h-14 bg-[linear-gradient(to_right,#DC2626,#7A1317,#000000,#0C518B,#0291CD)]">
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
                        to="/welcome"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-black px-2 py-1 rounded font-bold md:ml-28 lg:ml-72'
                                : 'text-white hover:text-slate-950 px-2 py-1 rounded transition-all md:ml-28 lg:ml-72'
                        }
                    >
                        Log In
                    </NavLink>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div
                        ref={menuRef}
                        className="absolute left-0 w-56 rounded-br-lg shadow-lg top-full bg-[linear-gradient(to_right,#0C518B,#0291CD)]"
                    >
                        <ul className="flex flex-col items-start p-2 space-y-2">
                            <li>
                                <button
                                    onClick={() => {
                                        navigate('/home');
                                        closeMenu();
                                    }}
                                    className="block w-full px-4 py-2 text-left text-white transition-all hover:text-gray-300"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => {
                                        navigate('/marvel');
                                        closeMenu();
                                    }}
                                    className="block w-full px-4 py-2 text-left text-white transition-all hover:text-gray-300"
                                >
                                    Marvel
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        navigate('/dc');
                                        closeMenu();
                                    }}
                                    className="block w-full px-4 py-2 text-left text-white transition-all hover:text-gray-300"
                                >
                                    DC
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        navigate('/about');
                                        closeMenu();
                                    }}
                                    className="block w-full px-4 py-2 text-left text-white transition-all hover:text-gray-300"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        navigate('/extras');
                                        closeMenu();
                                    }}
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
                                    ? 'text-[#007DBF] px-2 py-1 rounded font-bold'
                                    : 'text-white hover:text-[#007DBF] px-2 py-1 rounded transition-all'
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
                        className={({ isActive }) =>
                            isActive
                                ? 'text-black px-2 py-1 rounded font-bold md:ml-28 lg:ml-72'
                                : 'text-white hover:text-slate-950 px-2 py-1 rounded transition-all md:ml-28 lg:ml-72'
                        }
                    >
                        Log In
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
