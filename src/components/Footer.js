import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-black -my-32">
      <div className="md:w-2/3 w-full px-4 text-red-500 flex flex-col">
        <div className="flex item-center justify-between w-full mx-auto text-3xl">
          <h1 className="w-full md:w-2/3 font-dosis mt-6 sm:text-3xl">
            Let's work together. <br /> Get in touch
          </h1>
          <div className="inline-flex px-3 py-3 mt-12">
            <SocialIcon
              url="https://www.linkedin.com/in/avinashmishra13/"
              className="mr-4"
              target="_blank"
              fgcolor="#fff"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://github.com/couspor"
              className="mr-4"
              target="_blank"
              fgcolor="#fff"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://twitter.com/mewbshlie"
              className="mr-4"
              target="_blank"
              fgcolor="#fff"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="mailto:theavinashmishra13@gmail.com"
              className="mr-4"
              target="_blank"
              fgcolor="#fff"
              style={{ height: 30, width: 30 }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <hr className="border-red-500" />
          <p className="w-full text-center my-3 text-gray-600">
            Copyright © 2021 Avinash Mishra
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
