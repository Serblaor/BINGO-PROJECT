// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onLogout }) => {
    return (
        <nav>
            <div className="logo">
                <Link to="/">Logo</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                {!isAuthenticated ? (
                    <>
                        <li>
                            <Link to="/signin">SignIn</Link>
                        </li>
                        <li>
                            <Link to="/signup">SignUp</Link>
                        </li>
                    </>
                ) : (
                    <li>
                        <button onClick={onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
