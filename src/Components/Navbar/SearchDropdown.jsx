import React from "react";

const SearchDropdown = ({ isSearchOpen }) => {
    if (!isSearchOpen) return null;

    return (
        <>
            {/* Mobile */}
            <div className="absolute top-[70px] left-0 right-0 bg-[#411667] p-4 md:hidden z-50">
                <input
                    type="text"
                    placeholder="Type here to search"
                    className="bg-[#5a1a7a] text-white placeholder-gray-300 px-4 py-2 rounded-full border border-white/20 w-full text-[14px]"
                />
            </div>
            {/* Tablet */}
            <div className="absolute top-[70px] left-0 right-0 bg-[#411667] p-4 hidden md:block lg:hidden z-50">
                <input
                    type="text"
                    placeholder="Type here to search"
                    className="bg-[#5a1a7a] text-white placeholder-gray-300 px-4 py-2 rounded-full border border-white/20 w-full text-[14px]"
                />
            </div>
        </>
    );
};

export default SearchDropdown;
