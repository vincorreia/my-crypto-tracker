import React, {useState, useEffect} from "react";
import "./Currency.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import IsUp from "../../../components/IsUp";
import refresher from "../../../functions/refresh";

export default function CurrencyPage() {

    const api_key = process.env.REACT_APP_API_KEY;
    const historical_data_url = "https://www.alphavantage.co/query?"

    const currencyId = useParams().id;

    const url = "https://api.coinlore.net/api/ticker/?id=" + currencyId;
    const photoUrl = "https://cryptoicon-api.vercel.app/api/icon/"

    const [currency, setCurrency] = useState({
        id: "",
        market_cap_usd: "",
        name: "",
        price_usd: "",
        rank: 0,
        percent_change_24h: 0,
        percent_change_1h: 0,
        percent_change_7d: 0,
        symbol: "",
        photo: "",
    })


    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        axios.get(url).then(result => {
            const data = result.data[0];
            const mkt_cap = Number(data.market_cap_usd).toLocaleString();
            const price = Number(data.price_usd).toLocaleString();
            setCurrency({
                id: data.id,
                market_cap_usd: mkt_cap,
                name: data.name,
                price_usd: price,
                rank: data.rank,
                symbol: data.symbol,
                percent_change_24h: Number(data.percent_change_24h),
                percent_change_1h: Number(data.percent_change_1h),
                percent_change_7d: Number(data.percent_change_7d),
                photo: photoUrl + data.symbol.toLowerCase()
            })
        })
        refresher(refresh, setRefresh);
    
    }, [refresh, url])

    useEffect(() => {
        const params = {
            params: {
            function: 'DIGITAL_CURRENCY_DAILY',
            symbol: currency.symbol,
            market: 'USD',
            apikey: api_key as string
        }}

        if(params.params.symbol !== ""){
            console.log(`Params: ${params.params.symbol}`);

            axios.get(historical_data_url, params).then(result => {
                console.log(result);
            })
        }  
    }, [api_key, currency])



    return (
        <div className="currency flex-row space-evenly">
        { currency.name === "" ? <h1>Loading...</h1> : 
        <React.Fragment>
                <div className="flex-row justify-flex-end currency-w50">
                    <div className="currency-w80 flex-row space-evenly">
                        <img width="150" height="150" src={currency.photo} alt={currency.name}/>
                    <div>
                        <h1>{currency.name}</h1>
                        <h2> {currency.symbol} {" - Rank #" + currency.rank}</h2>
                    </div>
                </div>
            </div>
                <div className="flex-row justify-center currency-w50">
                    <div>
                        <h3>{"Market Cap: $ " + currency.market_cap_usd}</h3>
                        <h3>{"Price: $ " + currency.price_usd}</h3>
                        <div className="flex-row percentage-change">
                            <IsUp number={currency.percent_change_1h} label="1h:"/>
                            <IsUp number={currency.percent_change_24h} label="24h:"/>
                            <IsUp number={currency.percent_change_7d} label="7d:"/>
                        </div>
                    </div>
                </div>  
        </React.Fragment>}
        </div>
    )
}