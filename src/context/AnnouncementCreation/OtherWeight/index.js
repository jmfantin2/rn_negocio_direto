import React, { createContext, useState, useContext } from 'react';

const OtherWeightContext = createContext();

export default function OtherWeightProvider({ children }) {
  const [youngest, setYoungest] = useState({ num: '', unit: '' });
  const [oldest, setOldest] = useState({ num: '', unit: '' });

  return (
    <OtherWeightContext.Provider
      value={{
        youngest,
        setYoungest,
        oldest,
        setOldest,
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
  const { youngest, setYoungest, oldest, setOldest } = context;
  return { youngest, setYoungest, oldest, setOldest };
}
