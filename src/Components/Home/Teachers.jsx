import React from 'react';
import img from "../../assets/teachers.png";
import Image from "../Common/Image.jsx";
import {HeadLine1} from "../Common/Text.jsx";

const Teachers = () => {
    return (
        <div className="mt-30 mx-10">

            <Image img={img} alt="teacher"/>


            <hr className="border-t-4 border-[#3D0C59]"/>
            <hr className="border-t-4 border-[#FFBB00]"/>


            <div className="text-center mt-4 mb-40 sm:my-6">
                <HeadLine1 title="শিক্ষক মন্ডলি"/>
            </div>

        </div>
    );
};

export default Teachers;