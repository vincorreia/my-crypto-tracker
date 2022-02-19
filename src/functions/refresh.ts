import React from "react";

export default function refresher(refresh: number, setRefresh: React.Dispatch<React.SetStateAction<number>>): void {
    setTimeout(()=> {
        console.log("refreshed!")
        setRefresh(refresh + 1);
    }, 120000)
}