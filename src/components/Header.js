import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import Navigation from './Navigation';

const Header = ({ gallery }) => {
    return (
        <div>
            <header className="bg-white p-3 mb-3 d-flex flex-row justify-content-between border-class">
                <span className="">
                    {useLocation().pathname === '/home' ? <span className="title">חיים בתמונות</span> : <Navigation gallery={gallery} />}
                </span>
                <FaCamera className="camera-icon" />
            </header>
        </div>
    )
}

export default Header;
