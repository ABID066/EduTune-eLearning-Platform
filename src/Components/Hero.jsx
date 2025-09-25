import React from 'react';
import Girl from "../assets/the .png";
import Elephant from "../assets/elephant-8809485_640 1.png";
import Rocket from "../assets/pngtree-cute-cartoon-rocket-ship-launching-into-space-png-image_19851668 1.png";
import Toy from "../assets/TOY.png";
import Bee from "../assets/BEE.png";

const Hero = () => {
    return (
        <>
            <section className="min-h-auto relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-stretch">
                        {/* Left side - Girl with rocket (1/3 width) */}
                        <div className="w-1/3 relative flex items-center justify-center">
                            {/* Girl positioned behind rocket */}
                            <div className="absolute right-8 -top-25">
                                <img
                                    className="w-[280px] xl:w-[350px] h-[340px] xl:h-[420px] object-contain relative z-5"
                                    src={Girl}
                                    alt="girl"
                                />
                            </div>
                            {/* Rocket positioned in front and slightly to the right */}
                            <div className="absolute right-8 top-25">
                                <img
                                    className="w-[340px] xl:w-[420px] h-[270px] xl:h-[340px] object-contain relative z-10"
                                    src={Rocket}
                                    alt="rocket"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-10 left-10 text-cyan-400 text-3xl">⭐</div>
                            <div className="absolute top-32 left-4 text-orange-400 text-2xl">⭐</div>
                            <div className="absolute bottom-20 left-20 text-yellow-400 text-2xl">⭐</div>
                        </div>

                        {/* Right side - Text content and images (2/3 width) */}
                        <div className="w-2/3 relative pl-12">
                            {/* Text content */}
                            <div className="mb-12">
                                <h1 className="text-4xl xl:text-5xl font-bold text-[#4a1b6b] mb-6 leading-tight">
                                    সেরা শিক্ষকদের সাথে<br/>
                                    <span className="text-[#f59e0b]">সন্তানের শেখাও হোক সেরা</span>
                                </h1>

                                <p className="text-gray-700 text-sm xl:text-base mb-10 leading-relaxed max-w-[600px]">
                                    একাডেমিক থেকে দক্ষতা উন্নয়নে এডুটিউন আছে আপনার শিক্ষাকে আরওা<br/>
                                    সহজ করতে। শিক্ষার্থীদের গাণিতিক, মানসিক, প্রযুক্তিগত এবং ভাষাগত দক্ষতা <br/>
                                    বৃদ্ধি করে তাদেরকে চতুর্থ শিল্প বিপ্লবের একজন যোগ্য নাগরিক হিসাবে গড়ে <br/>
                                    তোলাই আমাদের প্রধান লক্ষ্য।
                                </p>

                                <div className="flex gap-2">
                                    <button className="bg-[#411667] text-white px-8 xl:px-10 py-2 border-yellow-500 border-2 rounded-l-full text-base xl:text-lg font-medium hover:bg-[#5a1a7a] transition-colors">
                                        ফ্রি ক্লাস
                                    </button>
                                    <button className="bg-[#411667] text-white px-8 xl:px-10 py-2 border-yellow-500 border-2 rounded-r-full text-base xl:text-lg font-medium hover:bg-[#5a1a7a] transition-colors">
                                        কমিউনিটি
                                    </button>
                                </div>
                            </div>

                            {/* Images under text - Bee and Elephant with Toy */}
                            <div className="absolute top-30 right-0 flex items-start justify-end">
                                <div className="relative">
                                    <img
                                        className="w-[220px] xl:w-[280px] h-[270px] xl:h-[340px] object-contain relative z-10"
                                        src={Elephant}
                                        alt="elephant"
                                    />

                                    <div className="absolute top-25 -left-16 z-15">
                                        <img
                                            className="w-[80px] xl:w-[100px] h-[80px] xl:h-[100px] object-contain"
                                            src={Bee}
                                            alt="bee"
                                        />
                                    </div>

                                    <div className="absolute top-20 -right-20 z-15">
                                        <img
                                            className="w-[110px] xl:w-[140px] h-[130px] xl:h-[160px] object-contain"
                                            src={Toy}
                                            alt="toy character"
                                        />
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 text-orange-400 text-3xl">⭐</div>
                                <div className="absolute top-20 right-16 text-yellow-400 text-2xl">⭐</div>
                                <div className="absolute bottom-8 right-32 text-cyan-400 text-2xl">⭐</div>
                                <div className="absolute bottom-0 right-0 text-pink-400 text-lg">✨</div>
                            </div>
                        </div>
                    </div>

                    {/* Tablet Layout */}
                    <div className="hidden md:flex lg:hidden flex-col">
                        {/* Top Section - Text Content */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#4a1b6b] mb-6 leading-tight">
                                সেরা শিক্ষকদের সাথে<br/>
                                <span className="text-[#f59e0b]">সন্তানের শেখাও হোক সেরা</span>
                            </h1>

                            <p className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed px-4">
                                একাডেমিক থেকে দক্ষতা উন্নয়নে এডুটিউন আছে আপনার শিক্ষাকে আরওা
                                সহজ করতে। শিক্ষার্থীদের গাণিতিক, মানসিক, প্রযুক্তিগত এবং ভাষাগত দক্ষতা
                                বৃদ্ধি করে তাদেরকে চতুর্থ শিল্প বিপ্লবের একজন যোগ্য নাগরিক হিসাবে গড়ে
                                তোলাই আমাদের প্রধান লক্ষ্য।
                            </p>

                            <div className="flex gap-2 justify-center">
                                <button className="bg-[#411667] text-white px-6 md:px-8 py-2 border-yellow-500 border-2 rounded-l-full text-sm md:text-base font-medium hover:bg-[#5a1a7a] transition-colors">
                                    ফ্রি ক্লাস
                                </button>
                                <button className="bg-[#411667] text-white px-6 md:px-8 py-2 border-yellow-500 border-2 rounded-r-full text-sm md:text-base font-medium hover:bg-[#5a1a7a] transition-colors">
                                    কমিউনিটি
                                </button>
                            </div>
                        </div>

                        {/* Bottom Section - Images */}
                        <div className="flex justify-around items-center relative">
                            {/* Girl with rocket */}
                            <div className="relative">
                                <img
                                    className="w-[150px] md:w-[180px] h-[180px] md:h-[220px] object-contain relative z-5"
                                    src={Girl}
                                    alt="girl"
                                />
                                <img
                                    className="w-[170px] md:w-[200px] h-[140px] md:h-[170px] object-contain absolute top-4 md:top-15 left-26 z-10"
                                    src={Rocket}
                                    alt="rocket"
                                />
                            </div>

                            {/* Elephant group */}
                            <div className="relative">
                                <img
                                    className="w-[140px] md:w-[170px] h-[170px] md:h-[200px] object-contain relative z-10"
                                    src={Elephant}
                                    alt="elephant"
                                />
                                <img
                                    className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] object-contain absolute -top-6 -left-8 z-15"
                                    src={Bee}
                                    alt="bee"
                                />
                                <img
                                    className="w-[70px] md:w-[80px] h-[80px] md:h-[90px] object-contain absolute top-4 -right-8 z-15"
                                    src={Toy}
                                    alt="toy character"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="flex md:hidden flex-col">
                        {/* Hero Images */}
                        <div className="flex justify-center items-center mb-8 relative">
                            <div className="relative">
                                <img
                                    className="w-[120px] h-[140px] object-contain relative z-5"
                                    src={Girl}
                                    alt="girl"
                                />
                                <img
                                    className="w-[140px] h-[110px] object-contain absolute top-15 left-8 z-10"
                                    src={Rocket}
                                    alt="rocket"
                                />
                            </div>

                            <div className="relative ml-4">
                                <img
                                    className="w-[100px] h-[120px] object-contain relative z-10"
                                    src={Elephant}
                                    alt="elephant"
                                />
                                <img
                                    className="w-[35px] h-[35px] object-contain absolute -top-4 -left-6 z-15"
                                    src={Bee}
                                    alt="bee"
                                />
                                <img
                                    className="w-[50px] h-[60px] object-contain absolute top-2 -right-6 z-15"
                                    src={Toy}
                                    alt="toy character"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center px-2">
                            <h1 className="text-2xl sm:text-3xl font-bold text-[#4a1b6b] mb-4 leading-tight">
                                সেরা শিক্ষকদের সাথে<br/>
                                <span className="text-[#f59e0b]">সন্তানের শেখাও হোক সেরা</span>
                            </h1>

                            <p className="text-gray-700 text-xs sm:text-sm mb-6 leading-relaxed">
                                একাডেমিক থেকে দক্ষতা উন্নয়নে এডুটিউন আছে আপনার শিক্ষাকে আরওা
                                সহজ করতে। শিক্ষার্থীদের গাণিতিক, মানসিক, প্রযুক্তিগত এবং ভাষাগত দক্ষতা
                                বৃদ্ধি করে তাদেরকে চতুর্থ শিল্প বিপ্লবের একজন যোগ্য নাগরিক হিসাবে গড়ে
                                তোলাই আমাদের প্রধান লক্ষ্য।
                            </p>

                            <div className="flex gap-1 justify-center">
                                <button className="bg-[#411667] text-white px-4 py-2 border-yellow-500 border-2 rounded-l-full text-xs sm:text-sm font-medium hover:bg-[#5a1a7a] transition-colors">
                                    ফ্রি ক্লাস
                                </button>
                                <button className="bg-[#411667] text-white px-4 py-2 border-yellow-500 border-2 rounded-r-full text-xs sm:text-sm font-medium hover:bg-[#5a1a7a] transition-colors">
                                    কমিউনিটি
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background decorative stars - responsive */}
                <div className="absolute top-10 left-1/4 text-cyan-400 text-lg sm:text-xl lg:text-2xl opacity-60">⭐</div>
                <div className="absolute bottom-16 left-1/3 text-yellow-400 text-lg sm:text-xl lg:text-2xl opacity-60">⭐</div>
                <div className="absolute bottom-10 right-1/4 text-pink-400 text-sm sm:text-base lg:text-lg opacity-60">✨</div>
                <div className="absolute top-32 left-1/2 text-yellow-400 text-sm sm:text-base lg:text-lg opacity-40">⭐</div>
                <div className="absolute top-40 right-1/2 text-pink-400 text-lg sm:text-xl lg:text-2xl opacity-40">✨</div>
            </section>
        </>
    );
};

export default Hero;