import React, { createContext, useState, useContext } from "react";

const MainObservationsContext = createContext();

export default function MainObservationsProvider({ children }) {
  const [mainObservations, setMainObservations] = useState("");

  return (
    <MainObservationsContext.Provider
      value={{
        mainObservations,
        setMainObservations,
      }}
    >
      {children}
    </MainObservationsContext.Provider>
  );
}

export function useMainObservations() {
  const context = useContext(MainObservationsContext);
  if (!context)
    throw new Error(
      "useMainObservations must be used within a MainObservationsProvider"
    );
  const { mainObservations, setMainObservations } = context;
  return { mainObservations, setMainObservations };
}
