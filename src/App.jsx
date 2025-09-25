import React from 'react';
import Home from "./Pages/Home.jsx";
import CourseDetails from "./Pages/CourseDetails.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/course-details/:id" element={<CourseDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;