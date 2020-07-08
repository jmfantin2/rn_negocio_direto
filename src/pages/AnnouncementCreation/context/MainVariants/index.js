import React, { createContext, useState, useContext } from "react";

const MainVariantsContext = createContext();

export default function MainVariantsProvider({ children }) {
  const [mainVariants, setMainVariants] = useState([]);

  return (
    <MainVariantsContext.Provider
      value={{
        mainVariants,
        setMainVariants,
      }}
    >
      {children}
    </MainVariantsContext.Provider>
  );
}

export function useMainVariants() {
  const context = useContext(MainVariantsContext);
  if (!context)
    throw new Error(
      "useMainVariants must be used within a MainVariantsProvider"
    );
  const { mainVariants, setMainVariants } = context;
  return { mainVariants, setMainVariants };
}
