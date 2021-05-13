import React from "react";
import { NavLink } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="bg-black text-red-500 ">
      <div className="container flex item-center justify-between w-full mx-auto">
        <nav className="flex">
          <NavLink
            to="/"
            className="inline-flex items-center px-3 py-2 text-2xl antialiased font-dosis"
          >
            <span className="inline-block px-3 py-2 border-2 font-bold hover:bg-red-500 hover:text-black rounded-lg">
              AM
            </span>
          </NavLink>
        </nav>
        <div>
          <nav className="flex">
            <NavLink
              to="/projects"
              className="inline-flex items-center py-3 px-3 my-6 mr-2 relative text-2xl text-red-500 hover:underline antialiased font-dosis transition-all ease-out duration-1000"
              activeClassName="underline tracking-widest transition-all ease-in-out duration-500 font-bold"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center py-3 px-3 my-6 ml-2 relative text-2xl text-red-500 hover:underline antialiased font-dosis transition-all ease-out duration-1000"
              activeClassName="underline tracking-widest transition-all ease-in-out duration-500 font-bold"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
