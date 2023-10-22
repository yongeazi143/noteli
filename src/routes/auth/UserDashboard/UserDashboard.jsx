import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation, redirect } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import SidebarList from "../../../hoc/SidebarList/SidebarList";
import { useGlobalContext } from "../../../../context";
const apiUrl = process.env.HANKO_API_URL;
const hanko = new Hanko(apiUrl);

const UserDashboard = () => {
  const { setCurrentUrl } = useGlobalContext();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const sessionStatus = hanko.session.isValid();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleReload = () => {
      navigate("/login", { replace: true });
      setCurrentUrl(pathname);
    };
    if (!sessionStatus) {
      handleReload();
    }

    hanko.onUserLoggedOut(() => {
      setCurrentUrl("/user/dashboard/:home");
    });
  }, [sessionStatus, location.pathname]);
  return (
    <section className="flex flex-col">
      <nav className="h-[10vh] p-2 flex items-center justify-between border-b border-gray-dark shadow ">
        <button onClick={() => setToggleSidebar(!toggleSidebar)}>
          <i className="bx bx-menu bx-sm text-nav-blue"></i>
        </button>
        <ul className="flex items-center justify-evenly  gap-2">
          <li className="search relative ">
            {/* Search Container */}
            <input
              type="text"
              name="note"
              className="hidden md:block text-black text-sm h-9 leading-7 pt-0 pr-3 pl-10  outline-none font-poppins overflow-hidden"
              autoComplete="off"
              placeholder="Search note..."
            />
            <span className="md:absolute left-1 top-2">
              <i className="bx bx-search bx-sm text-nav-blue"></i>
            </span>
          </li>
          <li>
            <i className={"bx bx-bell bx-sm text-nav-blue"}></i>
          </li>
        </ul>
      </nav>
      <div className="flex items-start justify-start bg-white w-full">
        <SidebarList toggleSidebar={toggleSidebar} />
        {/* Conditionally Render Contents */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
