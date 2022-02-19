import React from "react";
import Currency from "../interfaces/currency";
import Card from "./layout/Card";
import IsUp from "./IsUp";

export default function Coin(props: {coin:Currency}) {

    const data = props.coin;

    return (
        <Card>
            <div className="flex-row space-between">
                <div className="flex-row align-center gap-1">
                    <img height="90" width="90" src={data.photo} alt={data.name}/>
                    <div>
                        <h1>{data.name}</h1>
                        <h3>{`${data.symbol} #${data.rank}`}</h3>
                    </div>
                </div>
                <div className="flex-column justify-center align-flex-end">
                    <h4>{`Market Cap: $ ${Number(data.market_cap_usd).toLocaleString()}`}</h4>
                    <h4>{`Price USD: $ ${Number(data.price_usd).toLocaleString()}`}</h4>
                    <div className="flex-row up-or-down">
                        <IsUp number={Number(data.percent_change_1h)} label="1h:"/>
                        <IsUp number={Number(data.percent_change_24h)} label="24h:"/>
                        <IsUp number={Number(data.percent_change_7d)} label="7d:"/>
                    </div>
                </div>
            </div>
        </Card>
    )
}