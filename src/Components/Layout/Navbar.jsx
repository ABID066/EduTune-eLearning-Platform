import React, { useState } from "react";
import DesktopNav from "../Navbar/DesktopNav.jsx";
import TabletNav from "../Navbar/TabletNav.jsx";
import MobileNav from "../Navbar/MobileNav.jsx";
import SearchDropdown from "../Navbar/SearchDropdown.jsx";
import MenuDropdown from "../Navbar/MenuDropdown.jsx";
import AllCoursesModal from "../Common/AllCoursesModal.jsx";


const navigationItems = [
    { label: "ভাষা শিক্ষা", href: "#" },
    { label: "কোর্স", href: "#" },
    { label: "ব্লগ", href: "#" },
    { label: "ভেরিফাই সার্টিফিকেট", href: "#" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {isModalOpen && (<AllCoursesModal/>)}
            <nav className="bg-[#411667] h-[70px] flex items-center relative">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="hidden lg:flex">
                        <DesktopNav navigationItems={navigationItems} onOpen={() => setIsModalOpen(true)}/>
                    </div>
                    <div className="hidden md:flex lg:hidden">
                        <TabletNav
                            navigationItems={navigationItems}
                            isSearchOpen={isSearchOpen}
                            setIsSearchOpen={setIsSearchOpen}
                        />
                    </div>
                    <div className="flex md:hidden">
                        <MobileNav
                            navigationItems={navigationItems}
                            isMenuOpen={isMenuOpen}
                            setIsMenuOpen={setIsMenuOpen}
                            isSearchOpen={isSearchOpen}
                            setIsSearchOpen={setIsSearchOpen}
                        />
                    </div>
                </div>

                {/* Dropdowns */}
                <SearchDropdown isSearchOpen={isSearchOpen}/>
                <MenuDropdown
                    isMenuOpen={isMenuOpen}
                    navigationItems={navigationItems}
                    setIsMenuOpen={setIsMenuOpen}
                />

            </nav>
        </>
    );
};

export default Navbar;
