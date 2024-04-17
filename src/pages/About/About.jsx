import React from "react";
import Navbar from "../HomePage/NavBar";
import { Helmet } from "react-helmet";

function About() {
  function redirectToLink() {
    window.location.href = "https://github.com/avnish-shivpure/tasko/tree/main";
  }
  return (
    <>
      <Helmet>
        <title>About tasko</title>
        <meta
          name="description"
          content="This is the about section for Tasko a productivity tool"
        />
      </Helmet>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center bg-transparent  pt-44">
        <div className=" p-4 mx-3 rounded-3xl bg-purple-400/90 items-center flex justify-center flex-col  text-[1.3rem] md:max-w-3xl 2xl:max-w-4xl text-neutral-800 dark:text-neutral-100/90 shadow-2xl shadow-slate-700/55 dark:shadow-slate-400/55 duration-500">
          <div className="text-center font-serif text-4xl mb-6 text-neutral-900 dark:text-neutral-200 ">
            <label>About Us...</label>
          </div>
          <p className="px-4">
            Welcome to Tasko, a remarkable frontend learning project that
            embodies simplicity and efficiency. Crafted by a dedicated frontend
            engineer eager to showcase their skills. Tasko serves as an example
            of clean design and user-centric development.
          </p>
          <br />
          <p className="px-4">
            Tasko's core essence can be captured in its mantra: "Get Organized,
            Get Everything Done." This phrase encapsulates the project's primary
            goal which is to provide users with a streamlined and simple
            platform for managing their tasks and boosting productivity.
          </p>
          <br />
          <p className="px-4">
            Tasko is beautiful example of frontend engineer's ability to create
            a polished, professional product that addresses real-world needs
            with elegance and precision. For a closer look at this project's
            inner workings, feel free to explore the website code at GitHub.
          </p>

          <button
            aria-label="Link to github"
            className="m-3 mt-6 p-2 px-4 rounded-3xl ring-2 ring-indigo-400 bg-indigo-100 hover:ring-0  hover:bg-lime-200 text-neutral-900  font-semibold hover:font-bold drop-shadow-lg hover:-translate-y-2 duration-200 hover:fill-neutral-300"
            onClick={redirectToLink}
          >
            <div className="flex justify-between items-center">
              Project at
              <span>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 ml-2 fill-neutral-900"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
