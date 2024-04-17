import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const CollapsedMenu = forwardRef(
  ({ toggleHam, hamOpen, isDarkMode, toggleDarkMode }, ref) => {
    return (
      <div className="menu-collapse md:collapse absolute top-0 right-0  z-20  duration-200  w-[160px] h-[250px] mt-1 mr-1 " ref={ref}>
        <div
          className=" bg-white/70 dark:bg-slate-600/70 backdrop-blur-lg backdrop-filter p-5 rounded-2xl "
          
        >
          <div className="md:hidden flex justify-center ">
            <button onClick={toggleHam} aria-label="Close Menu" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 mb-2 translate-x-10 "
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm14.47 3.97a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06L18 10.81V21a.75.75 0 0 1-1.5 0V10.81l-2.47 2.47a.75.75 0 1 1-1.06-1.06l3.75-3.75ZM2.25 9A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ul
            className={`  md:hidden space-y-3  ${
              hamOpen ? "flex flex-col items-center" : "hidden"
            }`}
          >
            <li>
              <NavLink
                to="/tasker"
                className="duration-150 hover:text-[1.3rem] hover:text-black hover:ring-0 hover:bg-sky-400 ring-1 rounded-3xl py-[5px] px-3 hover:px-4 hover:mx-1 ring-black dark:ring-white"
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
        </div>
      </div>
    );
  }
);

export default CollapsedMenu;
