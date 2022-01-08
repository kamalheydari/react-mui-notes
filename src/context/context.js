import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //? States
  const [notes, setNotes] = useState([]);

  //? Handlers
  const addNote = (title, details, category) => {
    setNotes([
      ...notes,
      { id: new Date().getTime().toString(), title, details, category },
    ]);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <AppContext.Provider value={{ addNote, handleDelete, notes }}>
      {children}
    </AppContext.Provider>
  );
};

//? Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
