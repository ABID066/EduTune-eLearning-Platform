import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Elephant from "../assets/elephant-8809485_640 1.png"
import Girl from "../assets/the .png"
import Hero from "../Components/Hero.jsx";
import Courses from "../Components/Courses.jsx";
import Footer from "../Components/Footer.jsx";
import Images from "../Components/Images.jsx";
import Layout from "./Layout.jsx";
import Teachers from "../Components/Teachers.jsx";

const Home = () => {

    return (
        <>
            <Layout>

            <Hero/>

            <Courses/>
                <Teachers/>

            <Images/>

            </Layout>
        </>
    );
};

export default Home;