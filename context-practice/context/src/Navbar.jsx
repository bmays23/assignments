import React, { useContext } from 'react';
import {ThemeContext} from './themeContext';

function Navbar(props) {

    const context = useContext(ThemeContext)

    return (
        <nav className={`${context.color}-theme`}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </nav>
    )
}

export default Navbar;