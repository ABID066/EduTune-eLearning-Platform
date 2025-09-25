import React from 'react';
import img1 from "../../assets/courses1.png"
import img2 from "../../assets/courses2.png"
import img3 from "../../assets/courses3.png"
import img4 from "../../assets/courses4.png"
import img5 from "../../assets/courses5.png"
import img6 from "../../assets/courses6.png"

const Courses = () => {
    const courses = [
        { id: 1, title: 'ক্যাডেট অ্যাডমিশন প্রস্তুতি', category: 'বয়স ৪-৬ বছর', image: img1 },
        { id: 2, title: 'আবাকাস ফেইস গণিত', category: 'বয়স ৪-৬ বছর', image: img2 },
        { id: 3, title: 'স্পোকেন ইংলিশ', category: 'বয়স ৪-৬ বছর', image: img3 },
        { id: 4, title: 'পিসাপুর গণিত', category: 'বয়স ৪-৬ বছর', image: img4 },
        { id: 5, title: 'জালি ক্যানভাস', category: 'বয়স ৪-৬ বছর', image: img5 },
        { id: 6, title: 'স্পোকেন ইংলিশ', category: 'বয়স ৪-৬ বছর', image: img6 },
    ];

    return (
        <section className="bg-gray-100 py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main heading */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4a1b6b] mb-2">
                        আমাদের কোর্স সমূহ
                    </h2>
                </div>

                {/* Courses grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white p-4 rounded-b-2xl rounded-t-[50px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-dotted border-3 border-yellow-400"
                        >
                            {/* Course image container */}
                            <div
                                className="h-40 sm:h-40 lg:h-60 relative bg-[#490271] border-b-6 rounded-b-lg rounded-t-4xl border-yellow-500 flex items-center justify-center overflow-hidden">
                                <img
                                    alt={course.title}
                                    src={course.image}
                                    className="object-contain h-full w-auto scale-140"
                                />
                            </div>


                            {/* Course info */}
                            <div className="px-3 pt-3 pb-0 ">
                                <h3 className="text-base sm:text-lg font-bold text-[#3D0C59] mb-2">
                                    {course.title}
                                </h3>

                                <div className="flex items-center justify-between">
                                    <span
                                        className="bg-yellow-400 text-[#490271] px-6 py-1 rounded-lg text-xs sm:text-sm font-bold">
                                        {course.category}
                                    </span>


                                    <button
                                        className="bg-white border border-gray-300 text-[#3D0C59] px-3 py-1 rounded-full text-md sm:text-lg font-medium hover:bg-gray-50 transition-colors">
                                        বিস্তারিত
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* All courses button */}
                <div className="text-center">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4a1b6b] mb-4">
                    সকল কোর্স
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Courses;
