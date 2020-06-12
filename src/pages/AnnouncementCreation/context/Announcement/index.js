import React, { createContext, useState, useContext } from "react";

const DynamicContext = createContext();

export default function DynamicProvider({ children }) {
  const [dynamic, toggle] = useState(false);

  return (
    <DynamicContext.Provider
      value={{
        dynamic,
        toggle,
      }}
    >
      {children}
    </DynamicContext.Provider>
  );
}

export function useDynamic() {
  const context = useContext(DynamicContext);
  if (!context)
    throw new Error("useDynamic must be used within a DynamicProvider");
  const { dynamic, toggle } = context;
  return { dynamic, toggle };
}
