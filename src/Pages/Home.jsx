import React from 'react';
import Hero from "../Components/Home/Hero.jsx";
import Courses from "../Components/Home/Courses.jsx";
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



            </Layout>
        </>
    );
};

export default Home;