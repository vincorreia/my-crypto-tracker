import React from "react";
import { Routes, Route } from "react-router-dom";
import CurrencyPage from "../views/routes/CurrencyPage/CurrencyPage"

export default function Content(props:{}) {
    return(
        <Routes>
            <Route path="/" element={<CurrencyPage id={90} />}/>
        </Routes>
    )
}