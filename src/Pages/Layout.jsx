import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
                {children}
            <Footer />
        </div>
    );
};

export default Layout;