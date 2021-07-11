import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer text-white text-center p-3">
            כל הזכויות שמורות &copy; מילי שמידט | <Link to="/about" className="about">מה רואים פה?</Link>
        </footer>
    );
}

export default Footer;