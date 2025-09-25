import React from "react";
import language from "../../assets/language.png"
import drop from "../../assets/drop-down.png"

const DesktopNav = ({ navigationItems }) => {
    return (
        <div className="flex items-center justify-between w-full">
            {/* Left section */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[#411667] text-[14px] bg-white px-3 py-1 rounded-full border border-white/20">
                    সকল কোর্স
                    <img src={drop} alt="d" className="w-2 h-2 ml-1"/>
                  </span>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="🔍︎ Type here to search"
                        className="bg-[#5a1a7a] text-white placeholder-gray-400  placeholder-text-center  px-4 py-2 rounded-full border border-white/20 w-55 text-[14px] focus:outline-none focus:border-white/40"
                    />
                </div>
            </div>

            {/* Center */}
            <ul className="flex gap-4 text-white text-[14px] m-0 p-0">
                {navigationItems.map((item, index) => (
                    <li key={index} className="cursor-pointer hover:text-gray-200 flex items-center gap-4">
                        <a href={item.href}>{item.label}</a>
                        {index !== navigationItems.length - 1 && <span className="text-white">|</span>}
                    </li>
                ))}
            </ul>

            {/* Right */}
            <div className="flex items-center gap-4">
                <div className="w-11 h-11  rounded-full flex items-center justify-center cursor-pointer">
                    <span className="text-white font-bold text-[12px]"><img src={language} alt="l"/></span>
                </div>
                <button className="bg-orange-400 text-white px-4 py-1 border-2 border-white rounded-full text-[14px] font-medium hover:bg-orange-500 transition-colors">
                    Log In
                </button>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                    <svg width="16" height="16" fill="none" stroke="#666" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M20 21V19C20 17.9 19.6 16.9 18.8 16.2C18.1 15.4 17.1 15 16 15H8C6.9 15 5.9 15.4 5.2 16.2C4.4 16.9 4 17.9 4 19V21M16 7C16 9.2 14.2 11 12 11C9.8 11 8 9.2 8 7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7Z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default DesktopNav;
