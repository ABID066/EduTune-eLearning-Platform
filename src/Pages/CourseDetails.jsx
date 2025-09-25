import React from "react";
import logobanner from "../assets/lgo.png";
import CourseTitle from "../Components/CourseDetails/CourseTitle.jsx";
import CourseInfo from "../Components/CourseDetails/CourseInfo.jsx";
import CourseBanner from "../Components/CourseDetails/CourseBanner.jsx";
import CourseFooterBanner from "../Components/CourseDetails/CourseFooterBanner.jsx";
import CourseQNA from "../Components/CourseDetails/CourseQNA.jsx";

import img1 from "../assets/courses1.png";
import img2 from "../assets/courses2.png";
import img3 from "../assets/courses3.png";
import img4 from "../assets/courses4.png";
import img5 from "../assets/courses5.png";
import img6 from "../assets/courses6.png";

import { useParams } from "react-router-dom";
import Layout from "./Layout.jsx";

const CourseDetails = () => {
    const { id } = useParams();
    console.log("Course ID:", id);
    
    const imgMap = {
        1: img1,
        2: img2,
        3: img3,
        4: img4,
        5: img5,
        6: img6,
    };
    
    const bannerImg = imgMap[id] || img1;

    return (
        <Layout>
            <div className="relative">
                <section className="bg-white py-12 px-4 sm:px-8 lg:px-20">
                    <CourseTitle title="ABACUS MASTERING MENTAL MATH FOR KIDS"/>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start">
                        <CourseInfo
                            items={[
                                "Course Level : Beginner",
                                "Total Level : 5 (0 to 4)",
                                "Age Range : 4 to 7 Years",
                                "Free Books : 05",
                                "Free Abacus Tool : 01",
                                "Live Class : 84",
                                "Exam : 05 (Level wise)",
                                "Certificate : Yes",
                            ]}
                            price="৳28,000/-"
                        />

                        <CourseBanner img={bannerImg}/>
                    </div>

                    <CourseQNA/>

                    <CourseFooterBanner img={logobanner}/>
                </section>
            </div>
        </Layout>
    );
};

export default CourseDetails;
