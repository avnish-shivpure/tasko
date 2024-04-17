import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import CollapsedMenu from "./CollapsedMenu";

function Navbar({ className }) {
  const [isDarkMode, setIsDarkMode] = useState();
  const [hamOpen, setHamOpen] = useState(false); // Initial state

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
    document.documentElement.classList.toggle("dark", prefersDarkMode);
  }, []); // Empty dependency array to run only on mount

  const refHam = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hamOpen && refHam.current && !refHam.current.contains(event.target)) {
        setHamOpen(false);
        console.log(hamOpen, "inside the handle function");
      }
    };

    if (refHam.current) {
      // Attach event listener only if ref is available
      document.addEventListener("touchstart", handleClickOutside, {
        capture: true,
      });
    }

    return () => {
      if (refHam.current) {
        document.removeEventListener("touchstart", handleClickOutside);
      }
    };
  }, [hamOpen]);

  const toggleHam = () => {
    setHamOpen((prevMode) => !prevMode);
    // console.log(hamOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    //   {
    //   const newMode = !prevMode;
    //   document.documentElement.classList.toggle("dark", newMode);
    //   return newMode;
    // });
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <nav
      className={` backdrop-blur-lg py-5 w-screen fixed left-[50%] -translate-x-[50%] flex items-center justify-between  px-5 md:px-10 ${className} text-black dark:text-white font-sans z-10`}
    >
      <NavLink
        to="/"
        className=" font-bold font-serif text-3xl mr-3 hover:translate-x-2 duration-500"
      >
        tasko
      </NavLink>
      <ul className="hidden md:flex items-center gap-5 ">
        <li>
          <NavLink
            to="/tasker"
            className="duration-150 hover:text-[1.3rem] hover:text-black hover:ring-0 hover:bg-sky-300 ring-1 rounded-3xl py-[5px] px-3 hover:px-4 hover:mx-1 ring-black dark:ring-white"
          >
            Tasker
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/concurr"
            className="duration-150 hover:text-[1.3rem] hover:text-black hover:ring-0 hover:bg-orange-400 ring-1 rounded-3xl py-[5px] px-3 hover:px-4 hover:mx-1 ring-black dark:ring-white"
          >
            ConCurr
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/passgen"
            className="duration-150 hover:text-[1.3rem] hover:text-black hover:ring-0 hover:bg-green-400 ring-1 rounded-3xl py-[5px] px-3 hover:px-4 hover:mx-1 ring-black dark:ring-white"
          >
            PassGen
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="duration-150 hover:text-[1.3rem] hover:text-black hover:ring-0 hover:bg-purple-400 ring-1 rounded-3xl py-[5px] px-3 hover:px-4 hover:mx-1 ring-black dark:ring-white"
          >
            About
          </NavLink>
        </li>
        <li>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Light/Dark Mode"
            className={`duration-150 hover:text-black hover:ring-0 ${
              isDarkMode ? "hover:bg-yellow-400" : "hover:bg-purple-400"
            } ring-1 rounded-3xl py-[4px] px-[4px] hover:px-4 hover:mx-1 ring-black dark:ring-white`}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
        </li>
      </ul>

      {hamOpen ? (
        <CollapsedMenu
          ref={refHam}
          toggleHam={toggleHam}
          hamOpen={hamOpen}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      ) : (
        <button
          className="md:hidden duration-200 mr-3"
          onClick={toggleHam}
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}
    </nav>
  );
}

export default Navbar;
