import React from 'react';
import img from "../assets/world 1.png";

const Images = () => {
    return (
        <div className="my-50 mx-10">
            <img
                className="block w-full max-w-[1000px] h-auto mx-auto"
                src={img}
                alt="world"
            />
        </div>
    );
};

export default Images;
