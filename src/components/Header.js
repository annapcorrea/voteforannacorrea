import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="navdiv">
                    <div className="logo"><a href="/Home">Anna Correa</a></div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <FontAwesomeIcon icon={faTimes} className="menu-icon-close" />
                        ) : (
                            <FontAwesomeIcon icon={faBars} className="menu-icon-open" />
                        )}
                    </div>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="/About">About Me</a></li>
                        <li><a href="/Blog">Blog</a></li>
                        <li><a href="/Coding">Coding</a></li>
                        <li><a href="/Contact" className="contact-me">Contact Me</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
