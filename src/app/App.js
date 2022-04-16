import React, {useEffect, useRef} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import OnePageApp from "./OnePageApp";
import Privacy from "../components/Privacy";
import Terms from "../components/Terms";
import Whitepaper from "../components/Whitepaper";
import pdfgen from '../assets/whitepaper/Wp_alpha.pdf'


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OnePageApp/>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/terms' element={<Terms/>}/>
                <Route path='/white' element={<Whitepaper pdf={pdfgen}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
