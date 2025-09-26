import React from "react";

const MenuDropdown = ({ isMenuOpen, navigationItems, setIsMenuOpen }) => {
    if (isMenuOpen!=="menu") return null;

    return (
        <div className="absolute top-[70px] left-0 right-0 bg-[#411667] border-t border-white/20 md:hidden z-50">
            <ul className="p-4 space-y-3">
                {navigationItems.map((item, index) => (
                    <li key={index} className="border-b border-white/10 pb-2 last:border-b-0">
                        <a
                            href={item.href}
                            className="text-white text-[14px] hover:text-gray-200 block"
                            onClick={() => setIsMenuOpen(isMenuOpen === "menu" ? "off" : "menu")}

                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuDropdown;
