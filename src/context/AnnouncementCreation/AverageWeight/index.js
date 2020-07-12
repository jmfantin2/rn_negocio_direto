import React, { createContext, useState, useContext } from "react";

const AverageWeightContext = createContext();

export default function AverageWeightProvider({ children }) {
  const [averageWeight, setAverageWeight] = useState("");

  return (
    <AverageWeightContext.Provider
      value={{
        averageWeight,
        setAverageWeight,
      }}
    >
      {children}
    </AverageWeightContext.Provider>
  );
}

export function useAverageWeight() {
  const context = useContext(AverageWeightContext);
  if (!context)
    throw new Error(
      "useAverageWeight must be used within a AverageWeightProvider"
    );
  const { averageWeight, setAverageWeight } = context;
  return { averageWeight, setAverageWeight };
}
