import React from "react";

const CourseBanner = ({ img }) => {
    return (
        <div className="relative flex items-center justify-center lg:col-span-2 order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-2xl bg-[#4a1b6b] rounded-2xl sm:rounded-3xl border-4 sm:border-[6px] border-yellow-400 shadow-2xl h-48 sm:h-60 md:h-72 lg:h-96">

                {/* Inner decorative inset border */}
                <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-dotted border-white"></div>

                {/* Circular photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56">
                        <img
                            src={img}
                            alt="Course Banner"
                            className="absolute inset-0 w-full h-full object-cover transform scale-110 sm:scale-125 md:scale-140 lg:scale-150"
                        />
                    </div>
                </div>

                {/* Join button */}
                <button
                    className="
            absolute left-1/2 -translate-x-1/2
            -bottom-9 sm:bottom-4 md:-bottom-13
            px-4 py-1 sm:px-5 sm:py-1 md:px-12 md:pb-2
            text-sm sm:text-xs md:text-xl
            rounded-b-xl sm:rounded-b-2xl md:rounded-b-4xl
            border-b-2 border-x-2 sm:border-b-[3px] sm:border-x-[3px] md:border-b-4 md:border-x-4
            border-white
            bg-[#4a1b6b] text-white font-semibold shadow-md sm:shadow-lg md:shadow-xl
            hover:bg-[#5a1a7a] transition-colors
          "
                >
                    JOIN NOW
                </button>
            </div>
        </div>
    );
};

export default CourseBanner;
