import React from "react";
import CourseInfoGrid from "./CourseInfoGrid";
import CourseActions from "./CourseActions";
import img2 from "../../assets/courses2.png";

const CourseDetails = ({ courseName, info }) => (
    <div className="p-6 bg-white/10 relative col-span-2">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6 leading-tight">
            {courseName}
        </h2>

        {/* Image on mobile, floated on desktop */}
        <div className="mb-6 flex justify-center lg:hidden">
            <img src={img2} alt="Course visual" className="w-full max-w-sm rounded-xl" />
        </div>

        {/* Info Grid */}
        <CourseInfoGrid info={info} />

        {/* Price */}
        <div className="mb-6">
            <span className="text-3xl font-bold text-gray-700">৳28,000</span>
            <span className="text-xs font-bold ml-2 border border-gray-500 px-2 py-1 rounded text-blue-500">
        FULL COURSE FEES
      </span>
        </div>

        {/* Action Buttons */}
        <CourseActions />

        {/* Desktop-positioned image */}
        <div className="hidden lg:block absolute top-4 right-4">
            <img src={img2} alt="Course visual" className="w-75 rounded-xl" />
        </div>
    </div>
);

export default CourseDetails;
