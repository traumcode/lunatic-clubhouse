import React, {useEffect, useRef} from "react";

import OnePageApp from "../components/OnePageApp";
import Privacy from "../components/Privacy";
import Terms from "../components/Terms";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OnePageApp/>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/terms' element={<Terms/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
