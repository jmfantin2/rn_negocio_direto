import React, { createContext, useState, useContext } from "react";

const OtherVariantsContext = createContext();

export default function OtherVariantsProvider({ children }) {
  const [otherVariants, setOtherVariants] = useState([]);

  return (
    <OtherVariantsContext.Provider
      value={{
        otherVariants,
        setOtherVariants,
      }}
    >
      {children}
    </OtherVariantsContext.Provider>
  );
}

export function useOtherVariants() {
  const context = useContext(OtherVariantsContext);
  if (!context)
    throw new Error(
      "useOtherVariants must be used within a OtherVariantsProvider"
    );
  const { otherVariants, setOtherVariants } = context;
  return { otherVariants, setOtherVariants };
}
