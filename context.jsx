import React, { useContext, useState, useReducer, useEffect } from "react";
import _Hanko from "./hanko/hanko";

const hanko = _Hanko.hankoInstance();
const AppContext = React.createContext();
const session = hanko.session.get();
const userId = () => session && session.userID;
const NOTE_KEY = `note__${userId()}`;
export const ContextApp = ({ children }) => {
  const [activeColor, setActiveColor] = useState("#8ac3a3");
  const [activeItem, setActiveItem] = useState("Home");
  const [currentUrl, setCurrentUrl] = useState("/user/dashboard/:home");
  const [notes, dispatch] = useReducer(noteReducer, initialNotes);
  const [noteJsonData, setNoteJsonData] = useState(
    JSON.parse(localStorage.getItem(NOTE_KEY))
  );
  const [userIdInStorage, setUserIdInStorage] = useState([]);
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
        notes,
        dispatch,
        noteJsonData,
        setNoteJsonData,
        NOTE_KEY,
        userIdInStorage,
        setUserIdInStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const noteReducer = (notes, action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      const newNote = {
        id: action.id,
        color: action.color,
        contents: action.note,
        createdAt: action.date,
      };
      return [...notes, newNote];
    }
    case "EDIT_NOTE": {
      return notes.map((note) => {
        if (note.id === action.note.id) {
          return action.note;
        } else {
          return note;
        }
      });
    }

    case "READ_NOTE": {
      return notes.filter((note) => note.id === action.id);
    }

    case "DELETE_NOTE": {
      return notes.filter((note) => note.id !== action.id);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const initialNotes = [];
