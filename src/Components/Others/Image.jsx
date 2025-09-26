import React from 'react';

const Image = ({img, alt}) => {
    return (
        <div>
            <img
                className="block w-full max-w-[1000px] h-auto mx-auto"
                src={img}
                alt={alt}
            />
        </div>
    );
};

export default Image;
