import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const ContextApp = ({ children }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const [currentUrl, setCurrentUrl] = useState("/user/dashboard/:home");

  return (
    <AppContext.Provider
      value={{
        activeItem,
        setActiveItem,
        currentUrl,
        setCurrentUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
