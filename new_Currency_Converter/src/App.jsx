import { useState } from 'react';
import './App.css';
import useCurrencyInfo from './Componenet/Hooks/useCurrencyInfo';
import Input_Box from './Componenet/Input_Box';
function App(props) {
const BackgroundImage=`https://www.pexels.com/@pixabay/`

  const[from,setFrom]=useState('usd');
  const[to,setTo]=useState('inr');
  const[amount,setAmount]=useState(0);
  const[convertedAmount,setConvertedAmount]=useState(0);
    
  const currencyInfo=useCurrencyInfo(from);

  // find key value from objects 

  const options=Object.keys(currencyInfo);

  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const converted_amt=()=>{
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${BackgroundImage}')`,
        }}
        
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         converted_amt();
                      }}
                  >
                      <div className="w-full mb-1">
                          <Input_Box
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              selectCurrency={from}
                              onCurrencyChange={(currency)=>setFrom(currency)}
                              onAmountchange={(amount)=>setAmount(amount)}
                              // amountDisabled
                              
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                             onClick={swap} 
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <Input_Box
                              label="To"
                              currencyOptions={options}
                              amount={convertedAmount}
                              selectCurrency={to}
                              onCurrencyChange={(currency)=>setTo(currency)}
                              amountDisabled
                          />
                      </div>
                      <button 
                      type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}  Total: {convertedAmount}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

}

export default App
