import React from "react";

const ModalWrapper = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 p-1 flex justify-center lg:items-center overflow-y-auto">
            <div className="mt-[10%] lg:mt-0 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl
                  w-full max-w-5xl relative overflow-hidden border border-white/20
                  max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center
                                text-gray-500 hover:text-red-500 hover:bg-red-50
                                rounded-full transition-colors z-[9999] cursor-pointer"
                > ✕ </button>
                {children}
            </div>
        </div>
    );
};

export default ModalWrapper;
