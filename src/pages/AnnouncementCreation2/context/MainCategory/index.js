import React, { createContext, useState, useContext } from "react";

const MainCategoryContext = createContext();

export default function MainCategoryProvider({ children }) {
  const [mainCategory, setMainCategory] = useState("");

  return (
    <MainCategoryContext.Provider
      value={{
        mainCategory,
        setMainCategory,
      }}
    >
      {children}
    </MainCategoryContext.Provider>
  );
}

export function useMainCategory() {
  const context = useContext(MainCategoryContext);
  if (!context)
    throw new Error(
      "useMainCategory must be used within a MainCategoryProvider"
    );
  const { mainCategory, setMainCategory } = context;
  return { mainCategory, setMainCategory };
}
