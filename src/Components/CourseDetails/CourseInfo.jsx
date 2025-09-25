import React from 'react';

const CourseInfo = ({ items, price }) => {
    return (
        <div className="lg:col-span-1 space-y-2 lg:space-y-1 mt-10 sm:mt-10 md:mt-5 order-2 lg:order-1">
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="bg-[#4a1b6b] text-white text-center px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-md text-xs sm:text-sm font-medium"
                >
                    {item}
                </div>
            ))}

            <div className="text-2xl sm:text-3xl text-center font-bold text-[#4a1b6b] mt-6 lg:mt-8">
                {price}
            </div>
        </div>
    );
};

export default CourseInfo;