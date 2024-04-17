import React, { useId } from "react";

function InputBox({
  label,
  arialbl,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  inputDisabled = false, //giving default value to our props
  className = "",
}) {
  // if want to connect/bind two attributes of different tags we use useId() hook
  //but dont use it for keys

  const amountInputId = useId();
  return (
    <div
      className={`bg-white p-3 rounded-lg text-md flex ${className} text-[1rem] sm:text-lg  dark:bg-gray-50`}
    >
      <div className="w-3/4">
        <label
        aria-label="Amount Input Label"
          className=" mb-2 inline-block text-xl text-orange-600 w-1/2 font-semibold"
          htmlFor={amountInputId}
        >
          {label}
        </label>
        <input
          id={amountInputId}
          disabled={inputDisabled} //in this case its not necessary
          className=" w-full md:w-[500px] outline-none bg-transparent py-1.5 placeholder:text-slate-400"
          type="number"
          placeholder="Amount" // in below && expression if onAmountCahnge is not defined then nothing will happen to input
          value={amount} // && is used to make sure that if onAmountCahnge exist and prevent errors if onAmountChange is not defined or is not a function
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } //onAmountChange(e.target.value)is wrong as JS take input as string even is type is number
        />
      </div>
      <div className=" flex flex-wrap justify-end text-right">
        <p className="text-slate-600 mb-2 w-full">
          Currency Type
        </p>
        <select
        aria-label={arialbl}
          className="rounded-lg px-1 py-1 dark:bg-gray-200 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {/* //  Now if we want to loop the available currency in the data we use map 
                // but always make sure to include key = {} in your tag like below...
                //   now we will add map function to currenency,,  which should give data.conversions[currency] 
                for first input box and data.conversions[currency][available currencies]*/}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
