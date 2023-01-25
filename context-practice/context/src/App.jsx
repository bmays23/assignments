import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import ThemeContext from './themeContext';

function App() {
    return (
        <div className="container">
        <ThemeContext.Provider value="dark">
            <Navbar />
            <Body />
            <Footer />
        </ThemeContext.Provider>
        </div>
    )
}

export default App;