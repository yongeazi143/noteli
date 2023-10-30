import React, { useContext, useState, useReducer, useEffect } from "react";
import { Hanko } from "@teamhanko/hanko-elements";
import { v4 as uuid } from "uuid";

const apiUrl = process.env.HANKO_API_URL;
const hanko = new Hanko(apiUrl);
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
