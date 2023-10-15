import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../App.css';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>
            <hr />
            <Outlet />
        </nav>
    );
};

export default NavBar;