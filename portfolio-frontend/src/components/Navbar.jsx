import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const navClassName = ({ isActive }) => (isActive ? 'navLink active' : 'navLink');

    return (
        <nav className="navbar">
            <NavLink to="/" className="brandMark">
                Jesse Navarro
            </NavLink>

            <div className="navLinks" aria-label="Primary">
                <NavLink to="/" end className={navClassName}>
                    Home
                </NavLink>
                <NavLink to="/projects" className={navClassName}>
                    Projects
                </NavLink>
                <NavLink to="/admin-login" className={navClassName}>
                    Admin
                </NavLink>
            </div>
        </nav>
    );
};