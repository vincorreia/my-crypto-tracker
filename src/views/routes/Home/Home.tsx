import "./Home.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Currency from "../../../interfaces/currency";
import Coin from "../../../components/Coin";
import refresher from "../../../functions/refresh";
import Pagination from "../../../components/Pagination";

// interface Coin {
//     csupply: string;
//     id: string;
//     market_cap_usd: string;
//     msupply: string;
//     name: string;
//     nameid: string;
//     percent_change_1h: string;
//     percent_change_7d: string;
//     percent_change_24h: string;
//     price_btc: string;
//     price_usd: string;
//     rank: number;
//     symbol: string;
//     tsupply: string;
//     volume24: number;
//     volume24a: number;
// }

export default function Home() {


    const [coins, setCoins] = useState<Currency[]>([]);
    const [refresh, setRefresh] = useState(0);

    var page = useParams().page
    if(!page){
        page = "1";
    }

    const offset = (Number(page) * 50 - 50)

    useEffect(()=> {
    axios.get(`https://api.coinlore.net/api/tickers/?start=${offset}&limit=50`).then(result => {
        const data = result.data.data;
        setCoins(data);
        refresher(refresh, setRefresh)
    })
    }, [refresh, page])


    return (
        <div className="flex-column home-wrap">
            {coins.length < 50 ? "Loading" : coins.map((coin, i) => {
                return (
                <Link key={coin.id} to={"/currency/" + coin.id}>
                    <div className="flex-row">
                        <Coin coin={{...coin, photo: `https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}}/>
                    </div>
                </Link>)
            })}
            <Pagination page={Number(page)} maximum={140} />
        </div>
    )
}