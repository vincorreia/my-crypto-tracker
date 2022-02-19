import React from "react";
import "./Card.css"

interface Props {
    children?: React.ReactNode;
}
export default function Card(props: Props){
    return (
        <div className="card">
            {props.children}
        </div>
    )
}