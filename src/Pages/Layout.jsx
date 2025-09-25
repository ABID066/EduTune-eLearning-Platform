import React from 'react';
import Navbar from "../Components/Layout/Navbar.jsx";
import Footer from "../Components/Layout/Footer.jsx";

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