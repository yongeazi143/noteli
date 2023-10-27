import React, { useContext, useState, useEffect } from "react";
import { Hanko } from "@teamhanko/hanko-elements";

const AppContext = React.createContext();

export const ContextApp = ({ children }) => {
  const [activeColor, setActiveColor] = useState();
  const [activeItem, setActiveItem] = useState("Home");
  const [currentUrl, setCurrentUrl] = useState("/user/dashboard/:home");
  const [noteJsonData, setNoteJsonData] = useState({});
  const apiUrl = process.env.HANKO_API_URL;
  const hanko = new Hanko(apiUrl);

  const session = hanko.session.get();
  const userId = () => session && session.userID;

  const getNoteDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(`note__${userId()}`)) || {};
  };


  return (
    <AppContext.Provider
      value={{
        activeItem,
        setActiveItem,
        currentUrl,
        setCurrentUrl,
        activeColor,
        setActiveColor,
        userId,
        noteJsonData,
        setNoteJsonData,
        getNoteDataFromLocalStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
