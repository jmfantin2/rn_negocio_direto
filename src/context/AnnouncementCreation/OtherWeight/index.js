import React, { createContext, useState, useContext } from 'react';

const OtherWeightContext = createContext();

export default function OtherWeightProvider({ children }) {
  const [otherWeight, setOtherWeight] = useState('1');

  return (
    <OtherWeightContext.Provider
      value={{
        otherWeight,
        setOtherWeight,
      }}
    >
      {children}
    </OtherWeightContext.Provider>
  );
}

export function useOtherWeight() {
  const context = useContext(OtherWeightContext);
  if (!context)
    throw new Error('useOtherWeight must be used within a OtherWeightProvider');
  const { otherWeight, setOtherWeight } = context;
  return { otherWeight, setOtherWeight };
}
