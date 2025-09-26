import React from "react";
import language from "../../assets/language.png"

const TabletNav = ({ navigationItems, isSearchOpen, setIsSearchOpen, onOpen }) => {
    return (
        <div className="flex items-center justify-between w-full">

            {/* Left */}
            <div className="flex items-center gap-2">
                  <button
                      onClick={onOpen}
                      className="flex items-center gap-1 text-[#411667] text-[14px] bg-white px-3 py-1 rounded-full border border-white/20">
                    সকল কোর্স
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
            </div>

            {/* Center */}
            <ul className="flex gap-4 text-white text-[13px] m-0 p-0">
                {navigationItems.map((item, index) => (
                    <li key={index} className="cursor-pointer hover:text-gray-200 flex items-center gap-3">
                        <a href={item.href}>{item.label}</a>
                        {index !== navigationItems.length - 1 && <span className="text-white">|</span>}
                    </li>
                ))}
            </ul>

            {/* Right */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setIsSearchOpen(isSearchOpen === "search" ? "off" : "search")}
                    className="w-8 h-8 bg-[#5a1a7a] rounded-full flex items-center justify-center"
                >
                    🔍︎
                </button>
                <div className="w-10 h-10  rounded-full flex items-center justify-center cursor-pointer">
                    <span className="text-white font-bold text-[11px]"><img src={language} alt="l"/></span>
                </div>
                <button
                    className="bg-orange-400 text-white  px-3 py-1 border-1 border-white rounded-full text-[13px] font-medium hover:bg-orange-500">
                    Log In
                </button>
                <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                    👤
                </div>
            </div>
        </div>
    );
};

export default TabletNav;
