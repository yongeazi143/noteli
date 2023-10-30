import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation, redirect } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import toast from "react-hot-toast";
import SidebarList from "../../../hoc/SidebarList/SidebarList";
import { useGlobalContext } from "../../../../context";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Search from "../../../containers/Search/Search";
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
      toast.error("Session Expired");
      setTimeout(() => handleReload(), 1000);
    }

    hanko.onUserLoggedOut(() => {
      setCurrentUrl("/user/dashboard/:home");
    });
  }, [sessionStatus, location.pathname]);
  return (
    <>
      <Backdrop
        show={toggleSidebar}
        clicked={() => setToggleSidebar(!toggleSidebar)}
      />
      <section className="flex flex-col ">
        <nav className="h-[73px] w-full fixed  px-5 flex items-center justify-between border-b border-gray-dark shadow bg-white top-0 z-20">
          <button onClick={() => setToggleSidebar(!toggleSidebar)}>
            <i className="bx bx-menu bx-sm text-nav-blue"></i>
          </button>
          <ul className="flex items-center justify-evenly  gap-5">
            <Search />
            <li>
              <i className={"bx bx-bell bx-sm text-nav-blue"}></i>
            </li>
          </ul>
        </nav>
        <SidebarList toggleSidebar={toggleSidebar} />
        {/* Conditionally Render Contents */}
        <div className="mt-[73px]">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
