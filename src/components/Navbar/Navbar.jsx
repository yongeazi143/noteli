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
    <React.Fragment>
      <Backdrop show={toggleNav} clicked={() => setToggleNav(!toggleNav)} />
      <nav className="w-full p-2 pt-5 flex items-center justify-between bg-hero fixed z-10 font-poppins">
        <Logo />
        <div
          className={`fixed top-1/4 w-3/4 h-[50vh] flex flex-col items-center p-2 flex-1 justify-center z-20 shadow-lg bg-white rounded-2xl hide ${navState} navbar_links duration-1000 md:w-1/2`}
        >
          <ul className="lg:flex mb-5 lg:mb-0 md:mr-auto md:ml-auto">
            <WaterDrop>
              <li className="m-4 text-base font-medium">
                <NavLink
                  onClick={handleLinksOnClick}
                  to="home"
                  spy={true}
                  activeClass="active"
                  className="text-nav-blue transition-all ease-in-out duration-150 hover:text-orange cursor-pointer"
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
                  className="text-nav-blue transition-all ease-in-out duration- hover:text-orange cursor-pointer"
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
                  className="text-nav-blue transition-all ease-in-out duration-150 hover:text-orange cursor-pointer"
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
                  className="text-nav-blue transition-all ease-in-out duration-150 hover:text-orange cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-120}
                >
                  Contact Us
                </NavLink>
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
            className="cursor-pointer md:mr-10 lg:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          >
            {!toggleNav ? (
              <i className={"bx bx-menu bx-md"}></i>
            ) : (
              <i className={"bx bx-x bx-md bx-border p-2"}></i>
            )}
          </div>
        </WaterDrop>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
