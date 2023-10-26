import { useContext } from "react";
import { useGlobalContext } from "../../../context";
import { SidebarContext } from "../Sidebar/Sidebar";

const SidebarItem = ({ icon, value, status, alert, onClick }) => {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group tracking-wider whitespace-nowrap
        ${
          status
            ? "bg-footer text-white"
            : "hover:bg-gray-100 text-nav-blue hover:text-white"
        }
    `}
      onClick={() => {
        onClick();
      }}
    >
      <i className={`bx  ${icon} bx-sm`}></i>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {value}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-dark-blue ${
            expanded ? "" : "top-2 right-3"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-dark-blue text-white text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {value}
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
