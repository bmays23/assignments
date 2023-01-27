import React, { useContext } from 'react';
import {ThemeContext} from './themeContext';

function Body(props) {

    const context = useContext(ThemeContext)

    return (
        
        <div className={`${context.color}-theme`}>
            <h2>You are currently using {context.color} mode</h2>
            <button onClick={context.toggleTheme} className={`${context.color}-theme`}> Change Theme </button>

        </div>
    )
}

export default Body;