import React from "react";
import language from "../../assets/language.png"
import drop from "../../assets/drop-down.png";

const MobileNav = ({  isMenuOpen, setIsMenuOpen, isSearchOpen, setIsSearchOpen }) => {
    return (
        <div className="flex items-center justify-between w-full">
            {/* Left */}

            <div className="flex items-center gap-2">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-8 h-8 text-white">
                    ☰
                </button>
                <span
                    className="flex items-center gap-1 text-[#411667] text-[14px] bg-white px-3 py-1 rounded-full border border-white/20">
                    সকল কোর্স
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="w-7 h-7 bg-[#5a1a7a] rounded-full flex items-center justify-center"
                >
                    🔍︎
                </button>
                <div className="w-10 h-10  rounded-full flex items-center justify-center cursor-pointer">
                    <span className="text-white font-bold text-[10px]"><img src={language} alt="l"/></span>
                </div>
                <button
                    className="bg-orange-400 text-white px-2 py-1 rounded-full text-[12px] font-medium hover:bg-orange-500">
                    Login
                </button>
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                    👤
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
