import React from 'react'
import { useEffect,useState } from 'react'
function useCurrencyInfo(currency) {

    const [data,setData]=useState({});
    useEffect(()=>{
       fetch(` https://v6.exchangerate-api.com/v6/e27795d03903ae7b19d8a0fe/latest/${currency}`)
       .then((response)=>response.json())
       .then((res)=>setData(res.conversion_rates))
       .catch((error)=> alert("Check Your Internet Connection"))
    },[currency])
    
    return data
}

export default useCurrencyInfo
