import React from 'react';
import img from "../../assets/teachers.png";

const Teachers = () => {
    return (
        <div className="mt-50 mx-10">


            <img
                className="block w-full max-w-[1000px] h-auto mx-auto"
                src={img}
                alt="t"
            />

            <hr className="border-t-4 border-[#3D0C59]"/>
            <hr className="border-t-4 border-[#FFBB00]"/>


            <div className="text-center mt-4 mb-40 sm:my-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4a1b6b] mb-2">
                    শিক্ষক মন্ডলি
                </h2>
            </div>

        </div>
    );
};

export default Teachers;