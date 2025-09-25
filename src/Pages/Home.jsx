import React from 'react';
import Navbar from "../Components/Home/Navbar.jsx";
import Elephant from "../assets/elephant-8809485_640 1.png"
import Girl from "../assets/the .png"
import Hero from "../Components/Home/Hero.jsx";
import Courses from "../Components/Home/Courses.jsx";
import Footer from "../Components/Home/Footer.jsx";
import Images from "../Components/Home/Images.jsx";
import Layout from "./Layout.jsx";
import Teachers from "../Components/Home/Teachers.jsx";
import AboutUs from "../Components/Home/AboutUs.jsx";

const Home = () => {

    return (
        <>
            <Layout>

            <Hero/>

            <Courses/>
                <Teachers/>
                <AboutUs/>

            <Images/>

            </Layout>
        </>
    );
};

export default Home;