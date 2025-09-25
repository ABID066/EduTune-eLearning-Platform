import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const navigationItems = [
        { label: 'ভাষা শিক্ষা', href: '#' },
        { label: 'কোর্স', href: '#' },
        { label: 'ব্লগ', href: '#' },
        { label: 'ভেরিফাই সার্টিফিকেট', href: '#' }
    ];

    return (
        <>
            <nav className="bg-[#411667] h-[70px] flex items-center relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-between w-full">
                        {/* Left section with logo and dropdown */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAxlBMVEVlLZBlLZFkLZNlLY9lLo1lLotmLYxlLY5jMIZmK5VpKpNnLJFjLpFdHYVZGn9ZFotZGothKItaJ4Z5WpW9qMrPxNPPwtbKudd6XpRiNollJZW0m7/s4PH//////v3z6PRVJXVjQoLn3un///z//v96SplgIZeJbJ78//////j/+P/07vVQJntdLYDx5vd/ZZdCAHpOFH91TpJHAGyPdaPAsc18WZtMF3Oni7OllrNpRoFlK5uJaaL04PZ5U4lrRo63p8Djzul2XHhnAAAB70lEQVR4AV2SVWLjMBBABwQry97YaRseB6RtbZeZ6f6XWiXlPrPfxyC8g0SstEEEm56c/rC18IE1WhH9UeQy7+GnVAp8+uusNp42Epg/ZG7ZZ8XfXq+stEL4SeaL/tb2zmAwHI1Lx/zd4eTPdCYidbrm00Vlv1kslisJoY4x3aOs/lXv0qDl3T2R0IS22++kqWM9P3DGIAMazvFwLrEOcnR8slzVITYyLI23CLnx+ekgSJS22yrc5CyGFLg7M04R5JBVW9JIE2TYy3R23q0jyKiiFDbHrJhKTH/i3kRTdSFNrJN0TBacyspBnWTdnZOB00tp1/VckV1L7XuD0IYU55rd6Y2ENgWZFcyYJCfZpixCd677txKbtpX5XeU13AMqXw5ClNjKg3qUWhKrZd+R1hZArxNqmhjk8vRpMNhJ3e0TOcqVAdKZe+7aEKN0d7u7vaIsK+PZkHPZRpbboY11HffvCiLLlJM1TGgBLaYFmEkT1glfnJZFlhUVeFTKgPKo9eRgP9m2iTJ/mV5dTR8qT4AeNruE1eI1tmu5IV5VFhPwzuR0b9bJhtn0oFIWvmGATp9HxzcXo6vTwlpm/LZg2qLPUiquMhoc/lpN673ndDPswWJyiQ/pjdEqJ3LOeesR2PJXQnkSyEZtOsqbjUb6D5BMMeRoaaa1AAAAAElFTkSuQmCC"
                                    alt="Logo"
                                    className="w-7 h-7"
                                />
                                <span className="text-[#411667] text-[14px] bg-white px-3 py-1 rounded-full border border-white/20">
                                    সকল কোর্স ▼
                                </span>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="এখানে সার্চ করুন"
                                    className="bg-[#5a1a7a] text-white placeholder-gray-300 px-4 py-2 rounded-full border border-white/20 w-64 text-[14px] focus:outline-none focus:border-white/40"
                                />
                            </div>
                        </div>

                        {/* Center navigation menu */}
                        <ul className="flex gap-8 text-white text-[14px] m-0 p-0">
                            {navigationItems.map((item, index) => (
                                <li key={index} className="cursor-pointer hover:text-gray-200 flex items-center gap-8">
                                    <a href={item.href}>{item.label}</a>
                                    {index !== navigationItems.length - 1 && <span className="text-white">|</span>}
                                </li>
                            ))}
                        </ul>

                        {/* Right section with search and login */}
                        <div className="flex items-center gap-4">
                            {/* Language logo */}
                            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center cursor-pointer">
                                <span className="text-white font-bold text-[12px]">বা</span>
                            </div>

                            {/* Login button */}
                            <button className="bg-orange-400 text-white px-4 py-2 rounded-full text-[14px] font-medium hover:bg-orange-500 transition-colors">
                                Log In
                            </button>

                            {/* Profile icon */}
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Tablet Layout */}
                    <div className="hidden md:flex lg:hidden items-center justify-between w-full">
                        {/* Left section */}
                        <div className="flex items-center gap-3">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAxlBMVEVlLZBlLZFkLZNlLY9lLo1lLotmLYxlLY5jMIZmK5VpKpNnLJFjLpFdHYVZGn9ZFotZGothKItaJ4Z5WpW9qMrPxNPPwtbKudd6XpRiNollJZW0m7/s4PH//////v3z6PRVJXVjQoLn3un///z//v96SplgIZeJbJ78//////j/+P/07vVQJntdLYDx5vd/ZZdCAHpOFH91TpJHAGyPdaPAsc18WZtMF3Oni7OllrNpRoFlK5uJaaL04PZ5U4lrRo63p8Djzul2XHhnAAAB70lEQVR4AV2SVWLjMBBABwQry97YaRseB6RtbZeZ6f6XWiXlPrPfxyC8g0SstEEEm56c/rC18IE1WhH9UeQy7+GnVAp8+uusNp42Epg/ZG7ZZ8XfXq+stEL4SeaL/tb2zmAwHI1Lx/zd4eTPdCYidbrm00Vlv1kslisJoY4x3aOs/lXv0qDl3T2R0IS22++kqWM9P3DGIAMazvFwLrEOcnR8slzVITYyLI23CLnx+ekgSJS22yrc5CyGFLg7M04R5JBVW9JIE2TYy3R23q0jyKiiFDbHrJhKTH/i3kRTdSFNrJN0TBacyspBnWTdnZOB00tp1/VckV1L7XuD0IYU55rd6Y2ENgWZFcyYJCfZpixCd677txKbtpX5XeU13AMqXw5ClNjKg3qUWhKrZd+R1hZArxNqmhjk8vRpMNhJ3e0TOcqVAdKZe+7aEKN0d7u7vaIsK+PZkHPZRpbboY11HffvCiLLlJM1TGgBLaYFmEkT1glfnJZFlhUVeFTKgPKo9eRgP9m2iTJ/mV5dTR8qT4AeNruE1eI1tmu5IV5VFhPwzuR0b9bJhtn0oFIWvmGATp9HxzcXo6vTwlpm/LZg2qLPUiquMhoc/lpN673ndDPswWJyiQ/pjdEqJ3LOeesR2PJXQnkSyEZtOsqbjUb6D5BMMeRoaaa1AAAAAElFTkSuQmCC"
                                alt="Logo"
                                className="w-6 h-6"
                            />
                            <span className="text-[#411667] text-[13px] bg-white px-2 py-1 rounded-full border border-white/20">
                                সকল কোর্স ▼
                            </span>
                        </div>

                        {/* Center navigation menu */}
                        <ul className="flex gap-4 text-white text-[13px] m-0 p-0">
                            {navigationItems.map((item, index) => (
                                <li key={index} className="cursor-pointer hover:text-gray-200 flex items-center gap-3">
                                    <a href={item.href}>{item.label}</a>
                                    {index !== navigationItems.length - 1 && <span className="text-white">|</span>}
                                </li>
                            ))}
                        </ul>

                        {/* Right section */}
                        <div className="flex items-center gap-3">
                            {/* Search icon */}
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="w-8 h-8 bg-[#5a1a7a] rounded-full flex items-center justify-center cursor-pointer"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                            {/* Language logo */}
                            <div className="w-7 h-7 bg-orange-400 rounded-full flex items-center justify-center cursor-pointer">
                                <span className="text-white font-bold text-[11px]">বা</span>
                            </div>

                            {/* Login button */}
                            <button className="bg-orange-400 text-white px-3 py-1 rounded-full text-[13px] font-medium hover:bg-orange-500 transition-colors">
                                Log In
                            </button>

                            {/* Profile icon */}
                            <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="flex md:hidden items-center justify-between w-full">
                        {/* Left section */}
                        <div className="flex items-center gap-2">
                            {/* Logo */}
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAxlBMVEVlLZBlLZFkLZNlLY9lLo1lLotmLYxlLY5jMIZmK5VpKpNnLJFjLpFdHYVZGn9ZFotZGothKItaJ4Z5WpW9qMrPxNPPwtbKudd6XpRiNollJZW0m7/s4PH//////v3z6PRVJXVjQoLn3un///z//v96SplgIZeJbJ78//////j/+P/07vVQJntdLYDx5vd/ZZdCAHpOFH91TpJHAGyPdaPAsc18WZtMF3Oni7OllrNpRoFlK5uJaaL04PZ5U4lrRo63p8Djzul2XHhnAAAB70lEQVR4AV2SVWLjMBBABwQry97YaRseB6RtbZeZ6f6XWiXlPrPfxyC8g0SstEEEm56c/rC18IE1WhH9UeQy7+GnVAp8+uusNp42Epg/ZG7ZZ8XfXq+stEL4SeaL/tb2zmAwHI1Lx/zd4eTPdCYidbrm00Vlv1kslisJoY4x3aOs/lXv0qDl3T2R0IS22++kqWM9P3DGIAMazvFwLrEOcnR8slzVITYyLI23CLnx+ekgSJS22yrc5CyGFLg7M04R5JBVW9JIE2TYy3R23q0jyKiiFDbHrJhKTH/i3kRTdSFNrJN0TBacyspBnWTdnZOB00tp1/VckV1L7XuD0IYU55rd6Y2ENgWZFcyYJCfZpixCd677txKbtpX5XeU13AMqXw5ClNjKg3qUWhKrZd+R1hZArxNqmhjk8vRpMNhJ3e0TOcqVAdKZe+7aEKN0d7u7vaIsK+PZkHPZRpbboY11HffvCiLLlJM1TGgBLaYFmEkT1glfnJZFlhUVeFTKgPKo9eRgP9m2iTJ/mV5dTR8qT4AeNruE1eI1tmu5IV5VFhPwzuR0b9bJhtn0oFIWvmGATp9HxzcXo6vTwlpm/LZg2qLPUiquMhoc/lpN673ndDPswWJyiQ/pjdEqJ3LOeesR2PJXQnkSyEZtOsqbjUb6D5BMMeRoaaa1AAAAAElFTkSuQmCC"
                                alt="Logo"
                                className="w-5 h-5"
                            />

                            {/* Hamburger menu */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="w-8 h-8 flex items-center justify-center text-white"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                            <span className="text-[#411667] text-[12px] bg-white px-2 py-1 rounded-full">
                                কোর্স ▼
                            </span>
                        </div>

                        {/* Right section */}
                        <div className="flex items-center gap-2">
                            {/* Search icon */}
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="w-7 h-7 bg-[#5a1a7a] rounded-full flex items-center justify-center cursor-pointer"
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                            {/* Language logo */}
                            <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center cursor-pointer">
                                <span className="text-white font-bold text-[10px]">বা</span>
                            </div>

                            {/* Login button */}
                            <button className="bg-orange-400 text-white px-2 py-1 rounded-full text-[12px] font-medium hover:bg-orange-500 transition-colors">
                                Login
                            </button>

                            {/* Profile icon */}
                            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Search Bar Dropdown */}
                {isSearchOpen && (
                    <div className="absolute top-[70px] left-0 right-0 bg-[#411667] border-t border-white/20 p-4 md:hidden z-50">
                        <input
                            type="text"
                            placeholder="এখানে সার্চ করুন"
                            className="bg-[#5a1a7a] text-white placeholder-gray-300 px-4 py-2 rounded-full border border-white/20 w-full text-[14px] focus:outline-none focus:border-white/40"
                        />
                    </div>
                )}

                {/* Tablet Search Bar Dropdown */}
                {isSearchOpen && (
                    <div className="absolute top-[70px] left-0 right-0 bg-[#411667] border-t border-white/20 p-4 hidden md:block lg:hidden z-50">
                        <input
                            type="text"
                            placeholder="এখানে সার্চ করুন"
                            className="bg-[#5a1a7a] text-white placeholder-gray-300 px-4 py-2 rounded-full border border-white/20 w-full text-[14px] focus:outline-none focus:border-white/40"
                        />
                    </div>
                )}

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-[70px] left-0 right-0 bg-[#411667] border-t border-white/20 md:hidden z-50">
                        <ul className="p-4 space-y-3">
                            {navigationItems.map((item, index) => (
                                <li key={index} className="border-b border-white/10 pb-2 last:border-b-0">
                                    <a
                                        href={item.href}
                                        className="text-white text-[14px] hover:text-gray-200 block"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;