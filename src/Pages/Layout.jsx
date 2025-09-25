import React from 'react';
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";

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