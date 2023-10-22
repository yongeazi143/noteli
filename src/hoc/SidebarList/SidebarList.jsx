import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import Sidebar from "../../UI/Sidebar/Sidebar";
import SidebarItem from "../../UI/SidebarItem/SidebarItem";

const SidebarList = ({ toggleSidebar }) => {
  const { activeItem, setActiveItem } = useGlobalContext();
  const navigate = useNavigate();
  const handleItemClick = (value) => {
    setActiveItem(value);
    navigate(`/user/dashboard/:${value.toLowerCase()}`); //todo Updating the URL here
  };

  return (
    <Sidebar show={toggleSidebar}>
      <SidebarItem
        icon="bx-home"
        value="Home"
        status={activeItem === "Home"}
        onClick={() => handleItemClick("Home")}
      />
      <SidebarItem
        icon="bx-note"
        value="Notes"
        status={activeItem === "Notes"}
        onClick={() => handleItemClick("Notes")}
      />
      <SidebarItem
        icon="bxs-analyse"
        value="Explore"
        status={activeItem === "Explore"}
        onClick={() => handleItemClick("Explore")}
      />
      <SidebarItem
        icon="bx-book-bookmark"
        value="Favourites"
        status={activeItem === "Favourites"}
        onClick={() => handleItemClick("Favourites")}
      />
      <hr className="my-2 border-gray-dark" />
      <SidebarItem
        icon="bx-share"
        value="Shared With Me"
        status={activeItem === "Shared With Me"}
        onClick={() => handleItemClick("Shared With Me")}
      />
      <SidebarItem
        icon="bx-user"
        value="Profile"
        alert
        status={activeItem === "Profile"}
        onClick={() => handleItemClick("Profile")}
      />
      <SidebarItem
        icon="bx-cog"
        value="Settings"
        alert
        status={activeItem === "Settings"}
        onClick={() => handleItemClick("Settings")}
      />
    </Sidebar>
  );
};

export default SidebarList;
