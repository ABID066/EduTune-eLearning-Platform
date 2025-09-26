import React from "react";

const CourseActions = () => (
    <div className="flex gap-3 mb-6">
        <button className="bg-gradient-to-r font-bold from-gray-800 to-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:from-gray-900 hover:to-black transition-all shadow-lg hover:shadow-xl">
            Join batch
        </button>
        <button className="flex items-center gap-2 border-2 border-gray-300 px-6 py-3 rounded-xl font-medium hover:border-gray-400 hover:bg-gray-50 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            Share
        </button>
    </div>
);

export default CourseActions;
