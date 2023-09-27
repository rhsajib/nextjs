import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            {/* // with reloading the page */}
            <a href="/test">Test</a>
            
            {/* // without reloading the page */}
            {/* put a '/' at the begining of 'to' attribute inside of the Link tag*/}
            {/* <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link> */}


            <ActiveLink to="/home">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contacts">Contacts</ActiveLink>
        </nav>
    );
};

export default Header;