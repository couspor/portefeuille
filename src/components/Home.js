import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <div className="bg-black w-full min-h-screen overflow-auto my-auto">
      <div className="container mx-auto px-4 text-red-500 ">
        <h1 className="mt-32 font-dosis">
          <span className="text-xl font-semibold">
            <pre>Hello there! My name is </pre>
            <span className="font-bold text-5xl lg:text-6xl">
              Avinash Mishra.
            </span>
          </span>
          <br />
        </h1>
        <div className="sm:w-5/6 font-dosis">
          <h3
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            }  transform transition duration-2000 ease-in-out`}
          >
            <span className="font-bold text-2xl lg:text-4xl">
              I make things for the internet.
            </span>
            <br />
            <span className="font-semibold text-xl lg:text-3xl">
              I'm a front end web developer based in Bangalore, specialzing in
              building and designing websites and applications and everything in
              between.
              <br />
              <span className="">
                Thank you for visiting, feel free to have a look around and if
                you want to work together, drop me an &nbsp;
                <a
                  href="mailto:theavinashmishra13@gmail.com"
                  className="underline"
                >
                  e-mail
                </a>
              </span>
            </span>
          </h3>
          <div className="mt-10">
            <NavLink
              className=" animate-float bg-black font-bold border-2 px-10 py-3 text-lg uppercase rounded-lg hover:text-black hover:bg-red-500 focus:outline-none"
              to="/projects"
            >
              Discover More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
