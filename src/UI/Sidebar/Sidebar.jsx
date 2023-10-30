import { createContext, useState } from "react";
import Logo from "../Logo/Logo";
import LogoutUser from "../../routes/auth/Logout/Logout";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../context";

export const SidebarContext = createContext();

const Sidebar = ({ children, show }) => {
  const [expanded, setExpanded] = useState(false);
  const { setActiveItem } = useGlobalContext();
  const navigate = useNavigate();
  const handleNotesCreation = () => {
    setActiveItem("New-notes");
    navigate("/user/dashboard/:new-note");
  };
  return (
    <aside
      className={`h-screen transition-transform fixed z-30 ${
        show ? null : "-translate-x-36 w-0"
      }`}
    >
      <nav
        className="h-full flex border flex-col bg-white border-r shadow border-gray-dark
      "
      >
        <header className="flex flex-col items-center justify-center">
          <div
            className={`pt-4 pb-2  flex justify-between items-center  bg-white ${
              expanded ? "gap-20" : "gap-0"
            }`}
          >
            <div
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
            >
              <Logo />
            </div>
            <button
              className="cursor-pointer p-1.5"
              onClick={() => setExpanded((curr) => !curr)}
            >
              <i
                className={`bx ${
                  expanded
                    ? "bxs-chevron-left-square"
                    : "bxs-chevron-right-square"
                } bx-md text-footer`}
              ></i>
            </button>
          </div>
          {/* New Note Button */}
          <div className="relative w-full px-3 group">
            <button
              className={`h-9 bg-orange rounded text-white font-poppins font-medium cursor-pointer overflow-hidden transition-all hover:bg-opacity-90 text-center ${
                expanded ? "w-full" : "w-max py-2 px-3"
              }`}
              onClick={handleNotesCreation}
            >
              {expanded ? (
                "New Note"
              ) : (
                <i className="bx bx-plus bx-sm text-white"></i>
              )}
            </button>
            <span
              className={expanded ? "absolute left-4 p-1 top-1 " : "hidden"}
            >
              <i className="bx bx-plus bx-sm text-white"></i>
            </span>

            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-dark-blue text-white text-sm w-max top-2
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
              >
                {"New"}
              </div>
            )}
          </div>
        </header>

        {/* List Items */}

        <SidebarContext.Provider value={{ expanded }}>
          <ul className=" px-3 mt-5">{children}</ul>
        </SidebarContext.Provider>
        <LogoutUser expanded={expanded} />
      </nav>
    </aside>
  );
};

export default Sidebar;
