import React, { createContext, useState, useContext } from "react";

const DaysActiveContext = createContext();

export default function DaysActiveProvider({ children }) {
  const [daysActive, setDaysActive] = useState(2);

  return (
    <DaysActiveContext.Provider
      value={{
        daysActive,
        setDaysActive,
      }}
    >
      {children}
    </DaysActiveContext.Provider>
  );
}

export function useDaysActive() {
  const context = useContext(DaysActiveContext);
  if (!context)
    throw new Error("useDaysActive must be used within a DaysActiveProvider");
  const { daysActive, setDaysActive } = context;
  return { daysActive, setDaysActive };
}
