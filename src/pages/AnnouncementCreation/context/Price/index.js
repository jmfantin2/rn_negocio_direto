import React, { createContext, useState, useContext } from "react";

const PriceContext = createContext();

export default function PriceProvider({ children }) {
  const [price, setPrice] = useState("");

  return (
    <PriceContext.Provider
      value={{
        price,
        setPrice,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
}

export function usePrice() {
  const context = useContext(PriceContext);
  if (!context) throw new Error("usePrice must be used within a PriceProvider");
  const { price, setPrice } = context;
  return { price, setPrice };
}
