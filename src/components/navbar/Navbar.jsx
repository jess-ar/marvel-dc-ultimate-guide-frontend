import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed bottom-0 flex justify-around w-full p-4 bg-navbar">

            <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? 'text-primary' : 'text-secondary')}
            >
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faHome} size="lg" />
                    <p className="mt-1">Home</p>
                </div>
            </NavLink>

            <NavLink
                to="/menu"
                className={({ isActive }) => (isActive ? 'text-primary' : 'text-secondary')}
            >
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                    <p className="mt-1">Menu</p>
                </div>
            </NavLink>

            <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? 'text-primary' : 'text-secondary')}
            >
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                    <p className="mt-1">Profile</p>
                </div>
            </NavLink>
        </nav>
    );
};

export default Navbar;