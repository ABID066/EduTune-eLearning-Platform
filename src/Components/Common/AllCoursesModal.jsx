import React, { useState } from "react";
import {MdOutlineAccessTimeFilled, MdOutlineOndemandVideo} from "react-icons/md";
import {PiBagFill} from "react-icons/pi";
import {FaBook, FaCertificate, FaCheck, FaClipboard, FaCube} from "react-icons/fa";
import {LuNotebookPen} from "react-icons/lu";
import {GoPersonFill} from "react-icons/go";

import img2 from "../../assets/courses2.png"

const AllCoursesModal = () => {
    const [selectedCourse, setSelectedCourse] = useState(1);

    const courses = [
        "ক্যাটেগরি এনিমেশন প্রস্তুতি",
        "আবাকাস মেন্টাল মেথ",
        "স্পোকেন ইংলিশ",
        "শিল্পকলা মেথ",
        "জলি ফনিক্স",
        "স্পোকেন ইংলিশ",
        "শিল্পকলা মেথ",
        "জলি ফনিক্স",
        "গণিত প্রিয়",
        "বিজ্ঞান মেলা",
        "ইতিহাস পাঠ"
    ];

    return (
        <>
                <div className="fixed inset-0 flex items-center justify-center z-50 p-1">
                    {/* Modal Content */}
                    <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl w-full max-w-5xl relative overflow-hidden border border-white/20">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center
               text-gray-500 hover:text-red-500 hover:bg-red-50
               rounded-full transition-colors z-[9999] cursor-pointer"
                        >
                            ✕
                        </button>


                        <div className="grid grid-cols-1 lg:grid-cols-3 max-h-[90vh]">
                            {/* Left Side: Course List - 1/3 width */}
                            <div className="p-6 flex flex-col gap-3 max-h-[500px] overflow-y-auto bg-white/10  col-span-1">
                                {courses.map((course, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedCourse(index)}
                                        className={`border-2 border-purple-900 text-[#3D0C59] text-left px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                                            selectedCourse === index
                                                ? "bg-[#FFBB00]  shadow-lg transform scale-105"
                                                : "bg-white  border border-purple-200 hover:border-purple-400 hover:bg-purple-50"
                                        }`}
                                    >
                                        {course}
                                    </button>
                                ))}
                            </div>

                            {/* Right Side: Course Details - 2/3 width */}
                            <div className="p-6 bg-white/10  relative col-span-2">
                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-8 translate-x-8"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/30 to-yellow-200/30 rounded-full translate-y-4 -translate-x-4"></div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold text-gray-700 mb-6 leading-tight">
                                        Abacus Mastering Mental Math for Kids
                                    </h2>

                                    {/* Course Details Grid */}
                                    <div className="grid grid-cols-1 gap-2 mb-6">
                                        {[
                                            { icon: <FaClipboard />, label: "Course Level", value: "Beginner" },
                                            { icon: <PiBagFill />, label: "Total Level", value: "5 (0 to 4)" },
                                            { icon: <FaCube />, label: "Age Range", value: "4 to 7 years" },
                                            { icon: <MdOutlineAccessTimeFilled />, label: "Course Duration", value: "12 Months" },
                                            { icon: <FaBook />, label: "Books", value: "05" },
                                            { icon: <FaCheck />, label: "Abacus Tool", value: "01" },
                                            { icon: <MdOutlineOndemandVideo />, label: "Live Class", value: "84" },
                                            { icon: <FaBook />, label: "Video Class", value: "84" },
                                            { icon: <LuNotebookPen />, label: "Exam", value: "05 (Level wise)" },
                                            { icon: <FaCube />, label: "Worksheets", value: "Yes" },
                                            { icon: <FaCertificate />, label: "Certificate", value: "Yes" },
                                            { icon: <GoPersonFill />, label: "Teachers", value: "Pubali Maty, Easmin Sultana Rupa & 6 more" }
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center text-sm text-gray-700">
                                                <span className="mr-2 text-base">{item.icon}</span>
                                                <span className="font-medium min-w-[120px]">{item.label}:</span>
                                                <span className="">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <span className="text-3xl font-bold text-gray-700">৳28,000</span>
                                        <span className="text-xs font-bold ml-2 border border-gray-500 px-2 py-1 rounded text-blue-500">FULL COURSE FEES</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 mb-6">
                                        <button className="bg-gradient-to-r font-bold from-gray-800 to-gray-900 text-white px-15 py-3 rounded-xl font-medium hover:from-gray-900 hover:to-black transition-all shadow-lg hover:shadow-xl">
                                            Join batch
                                        </button>
                                        <button className="flex items-center gap-2 border-2 border-gray-300 px-6 py-3 rounded-xl font-medium hover:border-gray-400 hover:bg-gray-50 transition-all">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                            </svg>
                                            Share
                                        </button>
                                    </div>

                                    {/* Course Image - Positioned to match the design */}
                                    <div className="absolute top-4 right-4 h-100">
                                        <img src={img2} alt="alt"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default AllCoursesModal;