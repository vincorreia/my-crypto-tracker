export default interface Currency {
    id: string;
    market_cap_usd: string;
    name: string;
    price_usd: string;
    rank: number;
    symbol: string;
    photo?: string;
    percent_change_1h: string;
    percent_change_7d: string;
    percent_change_24h: string;
}