import React from 'react';

function Input_box({
    label,
    amount,
    currecnyOptions=[],
    onAmountChanges,
    onCurrencyChanges,
    className="",
   amountDisabled="false"
}) {

    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {/* {label} */}
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>onAmountChanges && onAmountChanges(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    

            onChange={(e)=>onCurrencyChanges && onCurrencyChanges(e.target.value)}
                >
                    
                    {currecnyOptions.map((val)=>
                         <option value="usd">
                            {val}
                        </option>)}
                
                </select>
            </div>
        </div>
    );
}

export default Input_box
