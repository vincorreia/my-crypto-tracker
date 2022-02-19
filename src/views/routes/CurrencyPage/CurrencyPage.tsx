import React, {useState, useEffect} from "react";
import "./Currency.css"
import axios from "axios";

type Props = {
    id: number;
}
export default function CurrencyPage(props: Props) {

    const currencyId = String(props.id);

    const url = "https://api.coinlore.net/api/ticker/?id=" + currencyId;
    const photoUrl = "https://cryptoicon-api.vercel.app/api/icon/"

    const [currency, setCurrency] = useState({
        id: "",
        market_cap_usd: "",
        name: "",
        price_usd: "",
        rank: 0,
        symbol: "",
        photo: "",
    })

    const [refresh, setRefresh] = useState(0);


    function refresher(): void{
        setTimeout(()=> {
            console.log("refreshed!")
            setRefresh(refresh + 1);
        }, 120000)
    }
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
                photo: photoUrl + data.symbol.toLowerCase()
            })
        })
        refresher();
    
    }, [refresh])

    return (
        <div className="currency flex-row space-evenly">
        { currency.name === "" ? <h1>Loading...</h1> : 
        <React.Fragment>
                <div className="currency-w100 flex-row align-flex-end">
                    <div className="currency-w80 flex-row space-evenly">
                        <img src={currency.photo} alt={currency.name}/>
                    <div>
                        <h1>{currency.name}</h1>
                        <h2> {"#" + currency.rank}</h2>
                    </div>
                </div>
            </div>
                <div className="flex-row justify-center currency-w100">
                    <div>
                    <h3>{"Market Cap: $ " + currency.market_cap_usd}</h3>
                    <h3>{"Price: $ " + currency.price_usd}</h3>
                    </div>
                </div>  
        </React.Fragment>}
        </div>
    )
}