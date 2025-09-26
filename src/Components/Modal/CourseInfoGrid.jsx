import React from "react";

const CourseInfoGrid = ({ info }) => (
    <div className="grid grid-cols-1 gap-2 mb-6">
        {info.map((item, index) => (
            <div key={index} className="flex items-center text-sm text-gray-900">
                <span className="mr-2 text-base">{item.icon}</span>
                <span className="font-medium min-w-[120px]">{item.label}:</span>
                <span>{item.value}</span>
            </div>
        ))}
    </div>
);

export default CourseInfoGrid;
