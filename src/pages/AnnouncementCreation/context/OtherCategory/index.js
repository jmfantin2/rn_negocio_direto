import React, { createContext, useState, useContext } from "react";

const OtherCategoryContext = createContext();

export default function MainCategoryProvider({ children }) {
  const [otherCategory, setOtherCategory] = useState("");

  return (
    <OtherCategoryContext.Provider
      value={{
        otherCategory,
        setOtherCategory,
      }}
    >
      {children}
    </OtherCategoryContext.Provider>
  );
}

export function useOtherCategory() {
  const context = useContext(OtherCategoryContext);
  if (!context)
    throw new Error(
      "useOtherCategory must be used within a OtherCategoryProvider"
    );
  const { otherCategory, setOtherCategory } = context;
  return { otherCategory, setOtherCategory };
}
