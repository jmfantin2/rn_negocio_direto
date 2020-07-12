import React, { createContext, useState, useContext } from "react";

const LocationContext = createContext();

export default function LocationProvider({ children }) {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <LocationContext.Provider
      value={{
        state,
        setState,
        city,
        setCity,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context)
    throw new Error("useLocation must be used within a LocationProvider");
  const { state, setState, city, setCity } = context;
  return { state, setState, city, setCity };
}
