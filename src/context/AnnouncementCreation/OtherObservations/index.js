import React, { createContext, useState, useContext } from "react";

const OtherObservationsContext = createContext();

export default function OtherObservationsProvider({ children }) {
  const [otherObservations, setOtherObservations] = useState("");

  return (
    <OtherObservationsContext.Provider
      value={{
        otherObservations,
        setOtherObservations,
      }}
    >
      {children}
    </OtherObservationsContext.Provider>
  );
}

export function useOtherObservations() {
  const context = useContext(OtherObservationsContext);
  if (!context)
    throw new Error(
      "useOtherObservations must be used within a OtherObservationsProvider"
    );
  const { otherObservations, setOtherObservations } = context;
  return { otherObservations, setOtherObservations };
}
