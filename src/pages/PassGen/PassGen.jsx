import React, { memo, useCallback } from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from "../HomePage/NavBar";
import PassInput from "./PassInput";
import { Helmet } from "react-helmet";

function PassGen() {
  const [pass, setPass] = useState("");
  const [selectNum, setSelectNum] = useState(false);
  const [selectChar, setSelectChar] = useState(false);
  const [selectLength, setSelectLength] = useState(10);
  const [toggle, setToggle] = useState(false);

  const insideGenerator = useCallback(() => {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (selectNum) {
      letters += "0123456789";
    }
    if (selectChar) {
      letters += "!@#$%^&*_-+?/";
    }
    let passString = "";
    for (let i = 1; i <= selectLength; i++) {
      passString += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    setPass(passString);
  }, [selectChar, selectLength, selectNum]); // Dependence array

  //eighther use call back here or in the above function but it needs to be called through another variable
  //like debouncedInsideGenerator = useCallback(insideGenerator,[])

  const debouncedInsideGenerator = insideGenerator;
  useEffect(() => {
    const timeoutId = setTimeout(debouncedInsideGenerator, 380); // Execute after 380 mili seconds

    return () => clearTimeout(timeoutId); // Cleanup function to clear timeout
  }, [debouncedInsideGenerator]);

  const textAreaRef = useRef(null);
  const copyPassword = useCallback(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus(); //we add ? to check whetrer string is emptyor not
      //textAreaRef.current.setSelectionRange(0,20)//its an HTML input element
      //navigator.clipboard.writeText(pass)
      setTimeout(() => {
        //textAreaRef.current.select();
        window.navigator.clipboard.writeText(pass);
      }, 0);
    }
  }, [pass]);

  return (
    <div>
      <Helmet>
        <title>PassGen - Password generator by tasko</title>
        <meta
          name="description"
          content="PassGen is a password generator and creator app which help you secure and strong passwords on the fly."
        />
      </Helmet>
      <div>
        <Navbar className={""} />
      </div>
      <div className="pt-52  mx-auto  w-auto md:max-w-4xl pb-24 ">
        <h2 className=" text-6xl text-green-500 dark:text-green-400  mb-4 text-center hover:-translate-y-3 duration-700 hover:font-semibold">
          PassGen
        </h2>
        <h2 className=" text-[1.4rem] mb-12 mx-1 text-center dark:text-white">
          'Unbreakable passwords One click away'
        </h2>

        <section className=" text-center items-center text-xl  mx-1 p-1 sm:hover:-translate-y-1 duration-700">
          <PassInput
            copyPassword={copyPassword}
            textAreaRef={textAreaRef}
            toggle={toggle}
            pass={pass}
            setToggle={setToggle}
          />
        </section>
        {/* </section>
        <section className="flex flex-wrap items-center justify-center w-full md:w-1/2"> */}

        <h3 className=" mt-9  my-2 text-2xl text-center mb-4 dark:text-white">
          <span className="animate-pulse  bg-transparent  py-1  px-4 rounded-3xl">
            Set Parameters to Generate
          </span>
        </h3>
        <section className="flex justify-center  px-1 mb-10 dark:text-slate-50 sm:hover:-translate-y-3 duration-700">
          <div className=" bg-green-500/90 dark:bg-green-400 py-3 px-1  rounded-full  w-10/12  sm:w-8/12  text-center items-center drop-shadow-lg text-slate-700 duration-150 shadow-2xl shadow-slate-700/55 dark:shadow-slate-400/55">
            <div className="f text-[1.3rem] sm:text-2xl">
              <label className="px-2">Length: </label>
              <input
                aria-label="Password Length"
                type="range"
                className="cursor-pointer "
                min={6}
                max={50}
                value={selectLength}
                //now this much wont change the slider so you need to
                //add an onchange evnt which will change the setLength
                onChange={(e) => {
                  setSelectLength(e.target.value);
                }}
              />
              <label className="px-2">{selectLength}</label>
            </div>
            <div className="flex  justify-center  text-[1.2rem] sm:text-[1.35rem] mt-2  ">
              <input
                aria-label="Password with Numbers"
                className="text-"
                type="checkbox"
                onChange={() => setSelectNum(!selectNum)}
              />
              <p className="flex  px-2 mr-5">Numbers</p>

              <input
                aria-label="Password with Characters"
                className="flex "
                type="checkbox"
                onChange={() => setSelectChar(!selectChar)} //this done to prevent hte code to ececute while rendering
              />
              <p className="flex px-2 pb-1">Characters</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PassGen;
