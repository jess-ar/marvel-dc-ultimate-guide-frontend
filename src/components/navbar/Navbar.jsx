import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Search from '@/components/search/Search'; 

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-4 py-4 bg-background md:justify-center">
            
            {/* Mobile Version (menu, home, search, login) */}
            <div className="flex items-center justify-between w-full h-full md:hidden">
                {/* Menu Icon and Home Text */}
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faBars} size="lg" className="mr-2 text-secondary" />
                    <NavLink
                        to="/home"
                        className={({ isActive }) => (isActive ? 'text-red-500 px-2 py-1 rounded flex items-center' : 'text-secondary hover:bg-navbar hover:text-white px-2 py-1 rounded flex items-center')}
                    >
                        Home
                    </NavLink>
                </div>

                {/* Search for mobile */}
                <div className="flex items-center">
                    <Search />
                </div>

                {/* Log In */}
                <div className="flex items-center">
                    <NavLink
                        to="/login"
                        className={({ isActive }) => (isActive ? 'text-red-500 px-2 py-1 rounded flex items-center' : 'text-secondary hover:bg-navbar hover:text-white px-2 py-1 rounded flex items-center')}
                    >
                        Log In
                    </NavLink>
                </div>
            </div>

            {/* Desktop and Tablet Version (from 700px onwards) */}
            <div className="items-center justify-between hidden w-full h-full md:flex">
                
                {/* Search Component (on the left) */}
                <div className="flex-1">
                    <Search />
                </div>

                {/* Navigation Links (centered) */}
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

                {/* Log In on the right */}
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
