import React from 'react';

const CourseTitle = ({title}) => {
    return (
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4a1b6b] mb-8 lg:mb-12">
            {title}
        </h1>
    );
};

export default CourseTitle;