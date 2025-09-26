import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import CourseList from "./CourseList";
import CourseDetails from "./CourseDetails";
import { FaClipboard, FaCube, FaBook, FaCheck, FaCertificate, FaArrowLeft } from "react-icons/fa";
import { MdOutlineAccessTimeFilled, MdOutlineOndemandVideo } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";
import { GoPersonFill } from "react-icons/go";

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

const courseInfo = [
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
    { icon: <GoPersonFill />, label: "Teachers", value: "Pubali Maty, Easmin Sultana Rupa & 6 more" },
];

const Modal = ({ onClose }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleCourseSelect = (index) => {
        setSelectedCourse(index);
        setShowDetails(true);
    };

    const handleBack = () => {
        setShowDetails(false);
    };

    return (
        <ModalWrapper onClose={onClose}>
            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden">
                {!showDetails ? (
                    <CourseList
                        courses={courses}
                        onSelect={handleCourseSelect}
                        selectedCourse={selectedCourse}
                    />
                ) : (
                    <div className="p-6">
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 mb-4 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            <FaArrowLeft />
                            <span>Back to Courses</span>
                        </button>
                        <CourseDetails
                            courseName={courses[selectedCourse] || "Select a Course"}
                            info={courseInfo}
                        />
                    </div>
                )}
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-3 max-h-[90vh]">
                <CourseList
                    courses={courses}
                    onSelect={setSelectedCourse}
                    selectedCourse={selectedCourse}
                />
                <CourseDetails
                    courseName={courses[selectedCourse] || "Abacus Mastering Mental Math For Kids"}
                    info={courseInfo}
                />
            </div>
        </ModalWrapper>
    );
};

export default Modal;
