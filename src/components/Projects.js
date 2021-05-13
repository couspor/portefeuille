/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import reactjs from "../assets/react.svg";
import typescript from "../assets/typescript-icon.svg";
import tailwind from "../assets/tailwindcss-icon.svg";
import javascript from "../assets/javascript.svg";

const Projects = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center font-dosis bg-black"
      id="stack"
    >
      <h1 className="text-4xl font-bold text-red-500 mt-16">Projects</h1>

      <div className="flex flex-col lg:flex-row">
        <div className="flex antialiased m-2">
          <div className="z-50 p-3 mt-10 max-w-md w-md  bg-transparent border-2 border-red-500 rounded-2xl">
            <div className="font-semibold text-2xl mb-2 ml-2 text-red-500 tracking-wider underline ">
              Fertility Quotient Calculator
            </div>
            <div className="flex">
              <button className="transform mouse-pointer text-red-500 text-xl px-3 font-bold rounded hover:bg-red-500 focus:outline-none hover:text-black rounded-2xl">
                <a
                  href="https://couspor.github.io/fertility-quotient-calculator/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
              <button className="transform mouse-pointer text-red-500 text-xl px-3 font-bold rounded hover:bg-red-500 focus:outline-none hover:text-black rounded-2xl">
                <a
                  href="https://github.com/couspor/ovulation-prediction-calendar"
                  target="_blank"
                >
                  Github repository
                </a>
              </button>
            </div>
            <div className="my-2 mx-2 mr-5">
              <p className="text-red-500 text-xl">
                A simple app to give the user a general idea about their
                fertility based on minor test values.
              </p>
            </div>
            <div>
              <div className="font-semibold text-l mb-2 ml-2 text-red-500">
                Tech Stack:
              </div>
              <div className="ml-2">
                <span className="inline-block bg-red-600 rounded-2xl px-2 py-1 text-md font-bold text-black">
                  HTML
                </span>
                <span className="inline-block bg-blue-400 rounded-2xl px-2 py-1 ml-2 text-md font-bold text-black">
                  Tailwind
                </span>
                <span className="inline-block bg-blue-700 rounded-2xl px-2 py-1 ml-2 text-md font-bold text-black">
                  Typescript
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex antialiased m-2">
          <div className="z-50 p-3 mt-10 max-w-md w-md grid grid-row bg-transparent border-2 border-red-500 rounded-2xl">
            <div className="font-semibold text-2xl mb-2 ml-2 text-red-500 tracking-wider underline ">
              Ovulation Prediction Calendar
            </div>
            <div className="flex">
              <button className="transform mouse-pointer text-red-500 text-xl px-3 font-bold rounded hover:bg-red-500 focus:outline-none hover:text-black rounded-2xl">
                <a
                  href="https://couspor.github.io/ovulation-prediction-calendar/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
              <button className="transform mouse-pointer text-red-500 text-xl px-3 font-bold rounded hover:bg-red-500 focus:outline-none hover:text-black rounded-2xl">
                <a
                  href="https://github.com/couspor/ovulation-prediction-calendar"
                  target="_blank"
                >
                  Github repository
                </a>
              </button>
            </div>
            <div className="my-2 mx-2 mr-5">
              <p className="text-red-500 text-xl">
                A calendar interface that helps you predict your next ovulation
                period. Made using Vue.js and Bulma CSS.
              </p>
            </div>
            <div>
              <div className="font-semibold text-l mb-2 ml-2 text-red-500">
                Tech Stack:
              </div>
              <div className="ml-2">
                <span className="inline-block bg-teal-600 rounded-2xl px-2 py-1 text-md font-bold text-black">
                  Vue.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-red-500 text-l font-semibold italic">
        more coming soon...
      </span>
      <h1 className="text-4xl font-bold text-red-500 mt-8">
        Technologies I Use
      </h1>
      <div className="flex flex-wrap justify-center mt-8 mb-32">
        <span className="w-20 h-20 bg-transparent border-2 border-red-500 shadow-2xl m-2 rounded-full flex items-center p-5 animate-refloat">
          <img
            src={reactjs}
            alt="react"
            className="flex items-center justify-center"
          />
        </span>
        <span className="w-20 h-20 bg-transparent border-2 border-red-500 shadow-2xl m-2 rounded-full flex items-center p-5  animate-float">
          <img
            src={typescript}
            alt="ts"
            className="flex items-center justify-center"
          />
        </span>
        <span className="w-20 h-20 bg-transparent border-2 border-red-500 shadow-2xl m-2 rounded-full flex items-center p-5 animate-refloat">
          <img
            src={tailwind}
            alt="tw"
            className="flex items-center justify-center"
          />
        </span>
        <span className="w-20 h-20 bg-transparent border-2 border-red-500 shadow-2xl m-2 rounded-full flex items-center p-5 animate-float">
          <img
            src={javascript}
            alt="js"
            className="flex items-center justify-center"
          />
        </span>
      </div>
    </div>
  );
};

export default Projects;
