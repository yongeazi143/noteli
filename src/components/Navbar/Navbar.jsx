import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll, Link as NavLink } from "react-scroll";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Logo from "../../UI/Logo/Logo";
import WaterDrop from "../../hoc/Animation/WaterDrop/WaterDrop";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navState = toggleNav && "visible";

  const handleLinksOnClick = () => {
    setTimeout(() => {
      setToggleNav(false);
    }, 500);
  };

  return (
    <>
      <Backdrop show={toggleNav} clicked={() => setToggleNav(!toggleNav)} />
      <nav className="w-full p-2 pt-5 flex items-center justify-between bg-hero  dark:bg-footer fixed z-10 font-poppins">
        <div className=" w-[10%]">
          <Logo />
        </div>
        <div
          className={`fixed top-1/4 w-3/4 h-[60vh] flex flex-col items-center p-2 flex-1 justify-center z-20 shadow-lg  dark:shadow-neutral-300 bg-white dark:bg-footer
           rounded-2xl hide ${navState} navbar_links duration-1000`}
        >
          <ul className=" flex flex-col items-center justify-center lg:flex-row mb-5 lg:mb-0 md:mr-auto md:ml-auto">
            <WaterDrop>
              <li className="m-4 text-base font-medium">
                <NavLink
                  onClick={handleLinksOnClick}
                  to="home"
                  spy={true}
                  activeClass="active"
                  className="text-nav-blue dark:text-blue transition-all ease-in-out duration-150 hover:text-orange cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Home
                </NavLink>
              </li>
            </WaterDrop>
            <WaterDrop>
              <li className="m-4 text-base font-medium">
                <NavLink
                  onClick={handleLinksOnClick}
                  to="features"
                  spy={true}
                  activeClass="active"
                  className="text-nav-blue dark:text-blue  transition-all ease-in-out duration- hover:text-orange cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Features
                </NavLink>
              </li>
            </WaterDrop>
            <WaterDrop>
              <li className="m-4 text-base font-medium">
                <NavLink
                  onClick={handleLinksOnClick}
                  to="about-us"
                  spy={true}
                  activeClass="active"
                  className="text-nav-blue dark:text-blue  transition-all ease-in-out duration-150 hover:text-orange cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-130}
                >
                  About Us
                </NavLink>
              </li>
            </WaterDrop>
            <WaterDrop>
              <li className="m-4 text-base font-medium">
                <NavLink
                  onClick={handleLinksOnClick}
                  to="contact-us"
                  spy={true}
                  activeClass="active"
                  className="text-nav-blue dark:text-blue  transition-all ease-in-out duration-150 hover:text-orange cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-120}
                >
                  Contact Us
                </NavLink>
              </li>
            </WaterDrop>
            <WaterDrop>
              <li className="m-4 text-base font-medium">
                <Link className="text-nav-blue dark:text-blue  transition-all ease-in-out duration-150 hover:text-orange cursor-pointer">
                  👋 Star us on Github 🙏
                </Link>
              </li>
            </WaterDrop>
          </ul>
          <WaterDrop>
            <Link
              onClick={handleLinksOnClick}
              to="/login"
              className="text-black hover:text-white transition-all ease-in-out duration-150 m-4 text-base font-medium bg-white px-5 py-2 rounded-full hover:bg-orange ring-1 ring-orange"
            >
              Login
            </Link>
          </WaterDrop>
        </div>
        <WaterDrop>
          <div
            className="cursor-pointer text-white md:mr-10 lg:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          >
            {!toggleNav ? (
              <i className={"bx bx-menu bx-md"}></i>
            ) : (
              <i
                className={"bx bx-x bx-md bx-border p-2 dark:border-orange"}
              ></i>
            )}
          </div>
        </WaterDrop>
      </nav>
    </>
  );
};

export default Navbar;
