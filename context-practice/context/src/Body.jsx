import React, { useContext } from 'react';
import ThemeContext from './themeContext';

function Body(props) {

    const context = useContext(ThemeContext)

    return (
        
        <div className={`${context}-theme`}>
            <h2>You are currently using {context} mode</h2>
            <button className={`${context}-theme`}> Change Theme </button>

        </div>
    )
}

export default Body;