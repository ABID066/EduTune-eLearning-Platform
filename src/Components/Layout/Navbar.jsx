import React, { useState } from "react";
import DesktopNav from "../Navbar/DesktopNav.jsx";
import TabletNav from "../Navbar/TabletNav.jsx";
import MobileNav from "../Navbar/MobileNav.jsx";
import SearchDropdown from "../Navbar/SearchDropdown.jsx";
import MenuDropdown from "../Navbar/MenuDropdown.jsx";
import Modal from "../Modal/Modal.jsx";


const navigationItems = [
    { label: "ভাষা শিক্ষা", href: "#" },
    { label: "কোর্স", href: "#" },
    { label: "ব্লগ", href: "#" },
    { label: "ভেরিফাই সার্টিফিকেট", href: "#" },
];

const Navbar = () => {

    const [open, setOpen] = useState("off");

    return (
        <>
            {open==="modal" && (<Modal onClose={() => setOpen("off")} />)}
            <nav className="bg-[#411667] h-[70px] flex items-center relative">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="hidden lg:flex">
                        <DesktopNav navigationItems={navigationItems} onOpen={() => setOpen(open === "modal" ? "off" : "modal")}/>
                    </div>
                    <div className="hidden md:flex lg:hidden">
                        <TabletNav
                            navigationItems={navigationItems}
                            isSearchOpen={open}
                            setIsSearchOpen={setOpen}
                            onOpen={() => setOpen(open === "modal" ? "off" : "modal")}
                        />
                    </div>
                    <div className="flex md:hidden">
                        <MobileNav
                            navigationItems={navigationItems}
                            isMenuOpen={open}
                            setIsMenuOpen={setOpen}
                            isSearchOpen={open}
                            setIsSearchOpen={setOpen}
                            onOpen={() => setOpen(open === "modal" ? "off" : "modal")}
                        />
                    </div>
                </div>

                {/* Dropdowns */}
                <SearchDropdown isSearchOpen={open}/>
                <MenuDropdown
                    isMenuOpen={open}
                    navigationItems={navigationItems}
                    setIsMenuOpen={setOpen}
                />

            </nav>
        </>
    );
};

export default Navbar;
