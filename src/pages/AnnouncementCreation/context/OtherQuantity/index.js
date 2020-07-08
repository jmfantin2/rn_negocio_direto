import React, { createContext, useState, useContext } from "react";

const OtherQuantityContext = createContext();

export default function OtherQuantityProvider({ children }) {
  const [otherQuantity, setOtherQuantity] = useState("");

  return (
    <OtherQuantityContext.Provider
      value={{
        otherQuantity,
        setOtherQuantity,
      }}
    >
      {children}
    </OtherQuantityContext.Provider>
  );
}

export function useOtherQuantity() {
  const context = useContext(OtherQuantityContext);
  if (!context)
    throw new Error(
      "useOtherQuantity must be used within a OtherQuantityProvider"
    );
  const { otherQuantity, setOtherQuantity } = context;
  return { otherQuantity, setOtherQuantity };
}
