import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav mt-3 mb-5 justify-content-center">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/hat" className="nav-link">Hat Pattern Generator</Link>
            <Link to="/socks" className="nav-link">Sock Pattern Generator</Link>
        </nav>
    );
}

export default Nav;