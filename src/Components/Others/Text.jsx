import React from "react";

export function HeadLine1 ({title}) {
    return (
        <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4a1b6b] mb-2">
                {title}
            </h2>
        </div>
    )
}

