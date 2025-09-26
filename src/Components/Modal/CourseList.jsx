import React from "react";

const CourseList = ({ courses, onSelect, selectedCourse }) => (
    <div className="p-6 flex flex-col gap-3 max-h-[500px] overflow-y-auto bg-white/10">
        {courses.map((course, index) => (
            <button
                key={index}
                onClick={() => onSelect(index)}
                className={`border-2 border-purple-900 text-[#3D0C59] text-left px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCourse === index
                        ? "bg-[#FFBB00] shadow-lg transform scale-105"
                        : "bg-white border border-purple-200 hover:border-purple-400 hover:bg-purple-50"
                }`}
            >
                {course}
            </button>
        ))}
    </div>
);

export default CourseList;
