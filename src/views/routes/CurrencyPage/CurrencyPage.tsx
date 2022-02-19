import React, {useState, useEffect} from "react";
import "./Currency.css"
import axios from "axios";
import Currency from "../../../interfaces/currency"

export default function CurrencyPage() {
    const url = "https://api.coinlore.net/api/ticker/?id=90";

    const [currency, setCurrency] = useState({
        id: "",
        market_cap_usd: "",
        name: "",
        price_usd: "",
        rank: 0,
        symbol: "",
        photo: "",
    })

    useEffect(() => {
        axios.get(url).then(result => {
            const data = result.data[0];
            const mkt_cap = Number(data.market_cap_usd).toLocaleString();
            setCurrency({
                id: data.id,
                market_cap_usd: mkt_cap,
                name: data.name,
                price_usd: data.price_usd,
                rank: data.rank,
                symbol: data.symbol,
                photo: ""
            })
        })
    }, [])

    return (
        <div className="currency flex-row space-evenly">
            <div className="currency-w100 flex-row align-flex-end">
                <div className="currency-w80">
                    <h1>{currency.name !== "" ? currency.name : "Loading..."}</h1>
                    <h2>{currency.id !== "" ? "#" + currency.id : null}</h2>
                </div>
            </div>
                <div className="flex-row align-flex-start currency-w100">
                    <h3>{currency.market_cap_usd !== "" ? "Market Cap: $ " + currency.market_cap_usd : null}</h3>
                    
                </div>
        </div>
    )
}