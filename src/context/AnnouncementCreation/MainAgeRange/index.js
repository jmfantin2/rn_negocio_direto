import React, { createContext, useState, useContext } from 'react';

const MainAgeRangeContext = createContext();

export default function MainAgeRangeProvider({ children }) {
  const [youngest, setYoungest] = useState({ num: '1', unit: 'M' });
  const [oldest, setOldest] = useState({ num: '1', unit: 'Y' });

  return (
    <MainAgeRangeContext.Provider
      value={{
        youngest,
        setYoungest,
        oldest,
        setOldest,
      }}
    >
      {children}
    </MainAgeRangeContext.Provider>
  );
}

export function useMainAgeRange() {
  const context = useContext(MainAgeRangeContext);
  if (!context)
    throw new Error(
      'useMainAgeRange must be used within a MainAgeRangeProvider'
    );
  const { youngest, setYoungest, oldest, setOldest } = context;
  return { youngest, setYoungest, oldest, setOldest };
}
