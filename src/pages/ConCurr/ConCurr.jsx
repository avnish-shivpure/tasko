import React, { useState, useEffect } from "react";
import InputBox from "./InputBox";
import useFetchData from "../../hooks/currInfo";
import Navbar from "../HomePage/NavBar";
import { Helmet } from "react-helmet";

function ConCurr() {
  const [amount, setAmount] = useState();
  const [convAmount, setConvAmount] = useState();
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  // const changeHandler = (input) => {
  //   setAmount(input);
  // };

  const { data, loading } = useFetchData(from); //this datas will give bouth {"keys": value} but we want the user to get value
  //we need to give the user the options i.e. keys
  if (loading) {
    return (
      <div className="bg-slate-800 min-h-screen min-w-screen text-center pt-[300px] text-3xl text-orange-400">
        {" "}
        <div>Loading...</div>
      </div>
    );
  } else {
    // const primaryOptions = Object.keys(data);
    const options = Object.keys(data);

    // useEffect(() => {
    //   if (!loading && data) {
    //     convert();
    //   }
    // }, [loading, data]);

    const convert = () => {
      const newAmount = amount * Number(data[to]);
      setConvAmount(newAmount);
    };

    const swap = () => {
      //   if (to === "USD" || to === "GBP") {

      setFrom(to);
      setTo(from);
      // console.log("your from", from, "your to", to); //we should also change the amount value
      setAmount(convAmount);
      setConvAmount(amount);
    };

    //changes the amount if inpot changes
    const changeHandler = (input) => {
      setAmount(input);
    };

    return (
      <>
        <Helmet>
          <title>ConCurr - Currency converter by tasko</title>
          <meta
            name="description"
            content="ConCurr is a currency converter app and website which help you convert international currencies instantly."
          />
        </Helmet>
        <div className="bg-transparent ">
          <div>
            <Navbar className={""} />
          </div>
          <div className="pt-52  text-center ">
            <h2 className=" text-6xl text-orange-500 dark:text-orange-400 mb-4 sm:hover:-translate-y-3 duration-700 hover:font-semibold">
              ConCurr
            </h2>
            <h2 className=" text-[1.4rem] mb-12 mx-[10px] text-center dark:text-white">
              'Effortless currency conversion, Worldwide'
            </h2>
          </div>
          <div className="  flex justify-center my-2  pb-24">
            <div className=" sm:max-w-[700px] md:max-w-3xl  2xl:max-w-4xl  md:mx-4">
              <div className=" sm:hover:-translate-y-3  mx-2 rounded-xl p-3 sm:p-5 backdrop-blur-sm bg-orange-400/90 shadow-2xl shadow-slate-700/55 dark:shadow-slate-400/55 duration-500">
                <form
                  className=" bg-transparent"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="w-full mb-1">
                    <InputBox
                      label="From"
                      arialbl={"Currency to be converted"}
                      amount={amount}
                      onAmountChange={changeHandler}
                      onCurrencyChange={setFrom}
                      currencyOptions={options}
                      selectCurrency={from}
                      inputDisabled={false} 
                      
                    />
                  </div>
                  <div className="relative w-full ">
                    <button
                      aria-label="Swap Currencies"
                      type="button"
                      className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 px-1  bg-amber-50 border-amber-200 hover:bg-amber-100 rounded-xl text-orange-600  hover:shadow-md font-bold duration-150 active:bg-amber-400 active:text-white text-[1.2rem] p-1 md:p-2`}
                      onClick={swap}
                    >
                      swap
                    </button>
                  </div>
                  <div className="w-full mt-3 sm:mt-4 mb-4">
                    <InputBox
                      arialbl={"Currency to be converted into"}
                      label="To"
                      amount={convAmount}
                      onAmountChange={setConvAmount}
                      onCurrencyChange={setTo}
                      currencyOptions={options}
                      selectCurrency={to}
                      inputDisabled={false} //giving default value to our props
                      //className = ""
                    />
                  </div>
                  <button
                    aria-label="Convert Amount"
                    onClick={convert}
                    type="submit"
                    className="w-full bg-amber-50 text-orange-600 text-2xl px-4 py-3 sm:mt-1 rounded-lg hover:bg-amber-100 active:translate-y-2 hover:shadow-md active:bg-white active:text-amber-500 active:outline-dotted active:inset-2 active:outline-1 duration-150 "
                  >
                    Convert
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ConCurr;
