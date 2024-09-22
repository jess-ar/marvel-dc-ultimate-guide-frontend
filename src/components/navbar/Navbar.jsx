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

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-4 py-4 bg-background md:justify-center">
            
            <div className="flex items-center justify-between w-full h-full md:hidden">
                <div className="flex items-center">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {menuOpen ? (
                            <FontAwesomeIcon icon={faTimes} size="lg" className="mr-2 text-secondary" />
                        ) : (
                            <FontAwesomeIcon icon={faBars} size="lg" className="mr-2 text-secondary" />
                        )}
                    </button>
                    <NavLink
                        to="/home"
                        className={({ isActive }) => (isActive ? 'text-red-500 px-2 py-1 rounded flex items-center' : 'text-secondary hover:bg-navbar hover:text-white px-2 py-1 rounded flex items-center')}
                    >
                        Home
                    </NavLink>
                </div>

                <div className="flex items-center">
                    <Search />
                </div>

                <div className="flex items-center">
                    <NavLink
                        to="/login"
                        className={({ isActive }) => (isActive ? 'text-red-500 px-2 py-1 rounded flex items-center' : 'text-secondary hover:bg-navbar hover:text-white px-2 py-1 rounded flex items-center')}
                    >
                        Log In
                    </NavLink>
                </div>
            </div>

            {menuOpen && (
                <div className="absolute left-0 w-56 rounded-br-lg shadow-lg top-full bg-navbar ">
                    <ul className="flex flex-col items-start p-2 space-y-2">
                        <li className="w-full"> 
                            <button
                                onClick={() => handleNavigation('/marvel')}
                                className="block w-full px-4 py-2 text-left text-secondary hover:text-red-500"
                            >
                                Marvel
                            </button>
                        </li>
                        <li className="w-full">
                            <button
                                onClick={() => handleNavigation('/dc')}
                                className="block w-full px-4 py-2 text-left text-secondary hover:text-red-500"
                            >
                                DC
                            </button>
                        </li>
                        <li className="w-full">
                            <button
                                onClick={() => handleNavigation('/about')}
                                className="block w-full px-4 py-2 text-left text-secondary hover:text-red-500"
                            >
                                About
                            </button>
                        </li>
                        <li className="w-full">
                            <button
                                onClick={() => handleNavigation('/profile')}
                                className="block w-full px-4 py-2 text-left text-secondary hover:text-red-500"
                            >
                                Profile
                            </button>
                        </li>
                        <li className="w-full">
                            <button
                                onClick={() => handleNavigation('/extras')}
                                className="block w-full px-4 py-2 text-left text-secondary hover:text-red-500"
                            >
                                Extras
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            <div className="items-center justify-between hidden w-full h-full md:flex">
                <div className="flex-1">
                    <Search />
                </div>

                <div className="flex justify-center flex-1 space-x-8">
                    <NavLink
                        to="/home"
                        className={({ isActive }) => (isActive ? 'text-red-500 px-2 py-1 rounded flex items-center' : 'text-secondary hover:bg-navbar hover:text-white px-2 py-1 rounded flex items-center')}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? 'text-red-500 px-2 py-1 rounded flex items-center' : 'text-secondary hover:bg-navbar hover:text-white px-2 py-1 rounded flex items-center')}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => (isActive ? 'text-red-500 px-2 py-1 rounded flex items-center' : 'text-secondary hover:bg-navbar hover:text-white px-2 py-1 rounded flex items-center')}
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/extras"
                        className={({ isActive }) => (isActive ? 'text-red-500 px-2 py-1 rounded flex items-center' : 'text-secondary hover:bg-navbar hover:text-white px-2 py-1 rounded flex items-center')}
                    >
                        Extras
                    </NavLink>
                </div>

                <div className="flex justify-end flex-1 mr-2">
                    <NavLink
                        to="/login"
                        className={({ isActive }) => (isActive ? 'text-red-500 px-2 py-1 rounded flex items-center' : 'text-secondary hover:bg-navbar hover:text-white px-2 py-1 rounded flex items-center')}
                    >
                        Log In
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
