import { useEffect,useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
            const data = await res.json();
            setData(data[currency]);
        } catch (error) {
            console.error("Failed to fetch currency data:", error);
            setData({});
        }
    };
    fetchData();
}, [currency]);
    return data;
}

export default useCurrencyInfo