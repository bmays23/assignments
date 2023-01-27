import React, { useContext } from 'react';
import {ThemeContext} from './themeContext';

function Footer(props) {

    const context = useContext(ThemeContext)

    return (
        <h3 className={`${context.color}-theme`}>
            FooterFooterFooter
        </h3>
    )
}

export default Footer;