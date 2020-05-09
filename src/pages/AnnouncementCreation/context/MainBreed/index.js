import React, { createContext, useState, useContext } from "react";

const MainBreedContext = createContext();

export default function MainBreedProvider({ children }) {
  const [mainBreed, setMainBreed] = useState("");

  return (
    <MainBreedContext.Provider
      value={{
        mainBreed,
        setMainBreed,
      }}
    >
      {children}
    </MainBreedContext.Provider>
  );
}

export function useMainBreed() {
  const context = useContext(MainBreedContext);
  if (!context)
    throw new Error("useMainBreed must be used within a MainBreedProvider");
  const { mainBreed, setMainBreed } = context;
  return { mainBreed, setMainBreed };
}
