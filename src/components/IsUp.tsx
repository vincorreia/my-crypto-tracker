import React from "react";

interface Props {
    number: number;
    label: string;
}

export default function IsUp(props: Props): React.ReactElement {
    if(props.number > 0){
        return <h4 className="green">{`▲ ${props.label} ${props.number}`}</h4>
    }
    
    return <h4 className="red">{`▼ ${props.label} ${props.number}`}</h4>
}