import React from "react";

export default function Input({
  label,
  amount,
  onamountchange,
  oncurrencychange,
  Scurrency = "usd",
  currencyOptions = [],
  Disabled
}) {
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label htmlFor="price">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          id="price"
          placeholder="amount"
         
          value={amount}
          onChange={(e) =>
            onamountchange && e.target.value!=0 && onamountchange(Number(e.target.value))
          }
          disabled={Disabled}
        />
      </div>
      <div className="w-1/2 justify-end text-right ">
       <div> <label htmlFor="CurrencyType">CurrencyType</label></div>
        <select
          id="CurrencyType"
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={Scurrency}
          onChange={(e) => oncurrencychange(e.target.value)}
         
        >
          {currencyOptions.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
