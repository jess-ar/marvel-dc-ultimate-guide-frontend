import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed bottom-0 left-0 z-50 flex justify-around w-full py-2 bg-navbar">
            <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? 'text-primary' : 'text-secondary')}
            >
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faHome} size="lg" />
                    <p className="mt-1 text-xs">Home</p>
                </div>
            </NavLink>

            <NavLink
                to="/menu"
                className={({ isActive }) => (isActive ? 'text-primary' : 'text-secondary')}
            >
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                    <p className="mt-1 text-xs">Menu</p>
                </div>
            </NavLink>

            <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? 'text-primary' : 'text-secondary')}
            >
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                    <p className="mt-1 text-xs">Profile</p>
                </div>
            </NavLink>
        </nav>
    );
};

export default Navbar;