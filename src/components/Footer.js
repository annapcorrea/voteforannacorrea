import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faEnvelope, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { faInstagram as faInstagramBrand, faLinkedin as faLinkedinBrand } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-icons">
                    <a href="https://www.instagram.com/annapcorrea" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagramBrand} className="social-icon" />
                    </a>
                    <a href="mailto:apereiracorrea@mail.valenciacollege.edu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/annapcorrea" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinBrand} className="social-icon" />
                    </a>
                </div>
                <div className='pages-footer'>
                    <a href='/About'> About Me </a>
                    <a class="ellipse">•</a>
                    <a href='/Blog'> Blog </a>
                    <a class="ellipse">•</a>
                    <a href='/Coding'> Coding </a>
                    <a class="ellipse">•</a>
                    <a href='/Contact'> Contact Me </a>
                </div>
                <div className='copyright'>
                    <p> © 2024 Anna Correa </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;