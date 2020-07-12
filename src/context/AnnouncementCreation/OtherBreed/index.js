import React, { createContext, useState, useContext } from "react";

const OtherBreedContext = createContext();

export default function OtherBreedProvider({ children }) {
  const [otherBreed, setOtherBreed] = useState("");

  return (
    <OtherBreedContext.Provider
      value={{
        otherBreed,
        setOtherBreed,
      }}
    >
      {children}
    </OtherBreedContext.Provider>
  );
}

export function useOtherBreed() {
  const context = useContext(OtherBreedContext);
  if (!context)
    throw new Error("useOtherBreed must be used within a OtherBreedProvider");
  const { otherBreed, setOtherBreed } = context;
  return { otherBreed, setOtherBreed };
}
