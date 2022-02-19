import React from "react";
import { Routes, Route } from "react-router-dom";
import CurrencyPage from "../views/routes/CurrencyPage/CurrencyPage";
import Home from "../views/routes/Home/Home"

export default function Content(props:{}) {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/currency/:id" element={<CurrencyPage />}/>
        </Routes>
    )
}