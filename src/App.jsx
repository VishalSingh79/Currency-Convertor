import { useState,useEffect } from 'react'
import './App.css'
import currencyl from './assets/currencyl.jpg'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  let [number,setNumber]=useState(0);
  let [takev,setTakev]=useState();
  let [from,setFrom] = useState('USD');
  let [to,setTo]=useState('INR');
  const currencyInfo=useCurrencyInfo(from);
  const currencyInfo1=useCurrencyInfo(to);
  const options=Object.keys(currencyInfo);
  const options1=Object.keys(currencyInfo1);
  
   function conversion(){  
      let value=currencyInfo[to.toUpperCase()];
      setNumber(
        number=takev*value
      )
   }
   useEffect(()=>{
      conversion();
   },[from,to])
  
  return(
    <div id='langing-page'>  
        
        <img src={currencyl}
            width={'100%'}
            height={'100%'}
            />
          
         <div id='box'>
         <div className='head1'>Currency Convertor</div>
             <div className='box1'>
                <div className='optioninput1'>
                <label className='sbox1'>From</label>
                <span>Currency Type</span>
                </div>
                <div className='optioninput'>

                <input type='number' className='sbox2' placeholder='0'    min={0} onChange={(e)=>(setTakev(takev=e.target.value))} value={takev} />

                <div className='option'>
                <select  id='type1' onChange={(e)=>setFrom(from=e.target.value)}>
                 {
                    options.map((currency)=>{
                      return( 
                        <option key={currency} value={currency} >
                        {currency}
                        </option>
                          )
                    })
                 }
                </select>
                </div>
                </div>
             </div>
             <br/>
             <br/>
            
             <div className='box1'>
               <div className='optioninput1'>
                <label className='sbox1'>To</label>
                <span id='span1'>Currency Type</span>
                </div>
                <div className='optioninput'>
                <input type='number' className='sbox2' value={number} />
                <div>
                <select  id='type2' onChange={(e)=>setTo(to=e.target.value)} >
                 {
                    options1.map((currency)=>{
                      return( 
                        <option key={currency} value={currency}>
                        {currency}
                        </option>
                          )
                    })
                 }
                </select>   
                </div>               
                </div>
             </div>
              <div id='convert' onClick={conversion}>
               <p>Convert {from} to {to}</p>
             </div>
         </div>
    </div>
  )
}

export default App

