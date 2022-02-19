import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Currency from "../../../interfaces/currency";


interface Coin {
    csupply: string;
    id: string;
    market_cap_usd: string;
    msupply: string;
    name: string;
    nameid: string;
    percent_change_1h: string;
    percent_change_7d: string;
    percent_change_24h: string;
    price_btc: string;
    price_usd: string;
    rank: number;
    symbol: string;
    tsupply: string;
    volume24: number;
    volume24a: number;
}

export default function Home() {


    const [coins, setCoins] = useState<Coin[]>([]);

    useEffect(()=> {
    axios.get("https://api.coinlore.net/api/tickers/?start=0&limit=50").then(result => {
        const data = result.data.data;
        setCoins(data);
    })
    }, [])

    return (
        <div>
            {coins.length < 50 ? null : coins.map((coin, i) => {
                return (
                <Link to={"/currency/" + coin.id}>
                    <div className="flex-row">
                        <img width="90" height="90" src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt={coin.name} />
                        <h1 key={i}>{coin.name}</h1>
                    </div>
                </Link>)
            })}
        </div>
    )
}