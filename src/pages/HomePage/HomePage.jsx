import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./NavBar";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>tasko - A Hub of Productivity Tools</title>
        <meta
          name="description"
          content="Tasko is a productivity tool and a Progessive Web App that includes a to-do list, currency converter, and password generator to help you stay organized and efficient."
        />
      </Helmet>
      <Navbar />

      <div className="pt-32   bg-inherit  sm:flex   pb-32 md:flex-nowrap full  justify-between items-end sm:items-center  text-black dark:text-white">
        <h1 className="text-4xl md:text-6xl font-bold  px-2 mb-8 sm:ml-8 md:ml-12 2xl:ml-32 bg-transparent md:hover:translate-x-10 md:hover:-translate-y-4 duration-500 xl:w-3/5 min-w-[280px] md:min-w-[400px]">
          Get In The <span className="text-sky-400">Flow</span>
          <br /> With Tasko.
        </h1>

        <div className="flex justify-end">
          <img
            fetchpriority="high"
            width="2002"
            height="2044"
            src="/assets/hands-with-pen-2002x2044.webp"
            alt="Hands with Pen Image"
            srcSet="
        /assets/hands-with-pen-1001x1022.webp 1001w,
        /assets/hands-with-pen-400x408.webp 400w,
        /assets/hands-with-pen-2002x2044.webp 2002w"
            sizes="(max-width: 600px) 400px, (max-width: 1080px) 1001px, 2002px"
            className="sm:hover:-translate-y-5 duration-300 sm:max-w-auto ml-1 xl:max-w-[900px]"
          />
        </div>
      </div>
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-black my-10 mb-32  dark:text-white sm:hover:-translate-y-5 duration-500">
        Tasko Provides you with...
      </h2>

      <section className="flex justify-center text-black dark:text-white">
        <div
          className="grid grid-cols-1 mx-10 sm:grid-cols-2 items-center  sm:max-w-3xl xl:max-w-6xl gap-x-10 md:gap-x-20 gap-y-[8rem]"
          role="list"
        >
          <div role="listitem" className="order-0">
            <img
              width="799"
              height="892"
              src="assets/make todo lists.webp"
              alt="Make a Todo Task List with title and description in simple format"
              loading="lazy"
              className="rounded-[15px] hover:shadow-2xl sm:hover:shadow-slate-700 sm:hover:-translate-y-2 sm:dark:hover:shadow-slate-400 duration-300"
            />
          </div>
          <div role="listitem" className="order-1">
            <h2 className="font-bold text-3xl md:text-4xl mb-6">
              Todo lists to simplify your tasks
            </h2>
            <p className="text-[1.1rem] sm:text-base lg:text-xl dark:text-slate-300">
              Organize your tasks effortlessly with Tasko's intuitive todo
              lists. It helps you to stay on top of your daily tasks and
              deadlines. Now, Prioritize and categorize your tasks for maximum
              efficiency with Tasko's Tasker.
            </p>
          </div>
          <div role="listitem" className="order-2 sm:order-3">
            <img
              width="799"
              height="892"
              loading="lazy"
              src="assets/generate password and rate.webp"
              alt="Generate secure and strong passwords"
              className="rounded-[15px] hover:shadow-2xl hover:shadow-slate-700 sm:hover:-translate-y-2 dark:hover:shadow-slate-400 duration-300"
            />
          </div>
          <div role="listitem" className="order-3 sm:order-2">
            <h2 className="font-bold text-3xl mb-6 md:text-4xl">
              Strong Passwords and Latest Currency info
            </h2>
            <p className="text-[1.1rem] sm:text-base lg:text-xl dark:text-slate-300">
              Generate secure passwords with Tasko's powerful password generator
              tool. PassGen keep your online accounts safe and secure with
              robust and secure password. Stay informed about the latest
              currency exchange rates with Tasko's up-to-date currency converter
              ConCurr.
            </p>
          </div>
          <div role="listitem" className="order-4">
            <img
              width="799"
              height="892"
              loading="lazy"
              src="assets/dark and light mode.webp"
              alt="Supports light and dark mode"
              className="rounded-[15px] hover:shadow-2xl hover:shadow-slate-700 sm:hover:-translate-y-2 dark:hover:shadow-slate-400 duration-300"
            />
          </div>
          <div role="listitem" className="order-5">
            <h2 className="font-bold text-3xl mb-6 md:text-4xl">
              Comfort for your Eyes
            </h2>
            <p className="text-[1.1rem] sm:text-base lg:text-xl dark:text-slate-300">
              Enjoy a visually pleasing experience with Tasko's eye-friendly
              design. Reduce eye strain during extended usage with Tasko's
              thoughtful interface design. Customize your viewing experience
              with Tasko's adjustable themes and color schemes.
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-transparent  mt-32 pb-20  pb-15 h-9/12">
        <div className="container mx-auto px-7 z-10 xl:max-w-6xl mb-32">
          <h2 className="text-4xl text-center font-semibold mb-28 dark:text-white sm:hover:-translate-y-5 duration-500">
            Discover Our Productivity Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="bg-sky-500  rounded-lg p-4 hover:shadow-2xl  hover:shadow-slate-700 sm:hover:-translate-y-2 dark:hover:shadow-slate-400 duration-300 dark:text-black  hover:font-semibold">
              <h3 className="text-3xl font-semibold mb-3">Tasker</h3>
              <p className="mb-4 text-[1rem] opacity-70">
                Organise your chaos, Boost productivity
              </p>
              <NavLink to="/tasker">
                <button
                  className=" bg-transparent ring-1   ring-black py-1 rounded-full w-40 md:w-40 h-8 max-w-5/6 md:hover:w-52 duration-300 relative "
                  aria-label="Make a Task"
                >
                  <label
                    id="taskText"
                    className="text-center cursor-pointer p-1 px-2 md:block  text-[1.05rem] bg-transparent absolute inset-0  items-center justify-center "
                  >
                    Make a Task
                  </label>
                </button>
              </NavLink>
            </div>

            <div className="bg-orange-400 hover:shadow-2xl  hover:shadow-slate-700 sm:hover:-translate-y-2 rounded-lg p-4 dark:hover:shadow-slate-400 dark:text-black duration-300 hover:font-semibold">
              <h3 className="text-3xl font-semibold mb-3">ConCurr</h3>
              <p className="mb-4 text-[1rem] opacity-70">
                Effortless currency conversion, Worldwide
              </p>
              <NavLink to="/concurr">
                <button
                  className="  ring-1 dark:ring-slate-5 ring-black py-1 rounded-full w-40 md:w-40 h-8 max-w-5/6 md:hover:w-52 duration-300 relative "
                  aria-label="Calculate Rate"
                >
                  <label
                    id="taskText"
                    className="text-center cursor-pointer p-1 px-2 md:block  text-[1.05rem] bg-transparent absolute inset-0 flex items-center justify-center  text-black"
                  >
                    Calculate Rate
                  </label>
                </button>
              </NavLink>
            </div>

            <div className="bg-green-500 hover:shadow-2xl  hover:shadow-slate-700 sm:hover:-translate-y-2 rounded-lg p-4 dark:hover:shadow-slate-400 dark:text-black duration-300 hover:font-semibold">
              <h3 className="text-3xl font-semibold mb-3">PassGen</h3>
              <p className="mb-4 text-[1rem] opacity-70">
                Unbreakable passwords, One click away
              </p>
              <NavLink to="/passgen">
                <button
                  className=" bg-transparent ring-1  ring-black py-1 px-1 rounded-full w-40 md:w-40 h-8 max-w-5/6 md:hover:w-52 duration-300 relative "
                  aria-label="Make a Password"
                >
                  <label
                    id="taskText"
                    className="text-center cursor-pointer p-1 px-2 md:block  text-[1.05rem] bg-transparent absolute inset-0 flex items-center justify-center   text-black"
                  >
                    Make a Password
                  </label>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
