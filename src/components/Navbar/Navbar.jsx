import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navState = toggleNav && "visible";
  return (
    <React.Fragment>
      <Backdrop show={toggleNav} clicked={() => setToggleNav(!toggleNav)} />
      <nav className="w-full p-2 pt-5 flex items-center justify-between bg-hero fixed z-10 font-poppins">
        <header className="relative md:ml-10 w-1/4 font-unica">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 79 79"
            fill="none"
          >
            <path
              d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z"
              fill="#65DAFF"
            />
          </svg>
          <h1 className="absolute left-5 top-1 font-bold text-xl">
            Note.<span className="text-orange">li</span>
          </h1>
        </header>
        <div
          className={`fixed top-1/4 w-3/4 h-[50vh] flex flex-col items-center p-2 flex-1 justify-center z-20 shadow-lg bg-white rounded-2xl hide ${navState} navbar_links duration-1000 md:w-1/2`}
        >
          <ul className="lg:flex lg:flex-1 ">
            <li className="m-4 text-base font-medium">
              <a
                href="#"
                className="text-nav-blue transition-all ease-in-out duration-150 hover:text-orange"
              >
                Home
              </a>
            </li>
            <li className="m-4 text-base font-medium">
              <a
                href="#"
                className="text-nav-blue transition-all ease-in-out duration- hover:text-orange"
              >
                Features
              </a>
            </li>
            <li className="m-4 text-base font-medium">
              <a
                href="#"
                className="text-nav-blue transition-all ease-in-out duration-150 hover:text-orange"
              >
                About Us
              </a>
            </li>
            <li className="m-4 text-base font-medium">
              <a
                href="#"
                className="text-nav-blue transition-all ease-in-out duration-150 hover:text-orange"
              >
                Testimonials
              </a>
            </li>
          </ul>
          <Link
            to="/login"
            className="text-black hover:text-white transition-all ease-in-out duration-150 m-4 text-base font-medium bg-white px-5 py-2 rounded-full hover:bg-orange ring-1 ring-orange"
          >
            Login
          </Link>
        </div>
        <div
          className="cursor-pointer md:mr-10 lg:hidden"
          onClick={() => setToggleNav(!toggleNav)}
        >
          {!toggleNav ? (
            <i className={"bx bx-menu bx-md"}></i>
          ) : (
            <i className={"bx bx-x bx-md bx-border p-2"}></i>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
