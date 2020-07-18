import React, { createContext, useState, useContext } from "react";

const MainQuantityContext = createContext();

export default function MainQuantityProvider({ children }) {
  const [mainQuantity, setMainQuantity] = useState("");

  return (
    <MainQuantityContext.Provider
      value={{
        mainQuantity,
        setMainQuantity,
      }}
    >
      {children}
    </MainQuantityContext.Provider>
  );
}

export function useMainQuantity() {
  const context = useContext(MainQuantityContext);
  if (!context)
    throw new Error(
      "useMainQuantity must be used within a MainQuantityProvider"
    );
  const { mainQuantity, setMainQuantity } = context;
  return { mainQuantity, setMainQuantity };
}
