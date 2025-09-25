import React from 'react';

const CourseFooterBanner = ({ img }) => {
    return (
        <div className="mt-12 lg:mt-16">
            <img className="block w-full h-auto" src={img} alt="Footer banner" />
        </div>
    );
};

export default CourseFooterBanner;