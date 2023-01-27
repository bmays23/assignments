import React, {useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import {ThemeContextProvider} from './themeContext';

function App(props) {


    return (
        <div className="container">

            <ThemeContextProvider>
                <Navbar />
                <Body />
                <Footer />
            </ThemeContextProvider>
        
        </div>
    )
}

export default App;