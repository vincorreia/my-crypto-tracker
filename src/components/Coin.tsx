import React from "react";
import "./Coin.css"
import Currency from "../interfaces/currency";
import Card from "./layout/Card";
import IsUp from "./IsUp";

export default function Coin(props: {coin:Currency}) {

    const data = props.coin;

    return (
        <Card>
            <div className="flex-row space-between flex-column-w1100">
                <div className="flex-row align-center gap-1 name-n-image">
                    <img className="coin-image" height="75" width="75" src={data.photo} alt={data.name}/>
                    <div className="coin-name">
                        <h2 className="coin-title">{data.name}</h2>
                        <h3 className="coin-subtitle">{`${data.symbol} #${data.rank}`}</h3>
                    </div>
                </div>
                    <div className="flex-row up-or-down align-center">
                            <IsUp number={Number(data.percent_change_1h)} label="1h:"/>
                            <IsUp number={Number(data.percent_change_24h)} label="1d:"/>
                            <IsUp number={Number(data.percent_change_7d)} label="7d:"/>
                    </div>
                    <div className="flex-column justify-center mkt-cap-container">
                        <h4>{`Market Cap: $ ${Number(data.market_cap_usd).toLocaleString()}`}</h4>
                        <h4>{`Price USD: $ ${Number(data.price_usd).toLocaleString()}`}</h4>
                    </div>
                </div>
        </Card>
    )
}