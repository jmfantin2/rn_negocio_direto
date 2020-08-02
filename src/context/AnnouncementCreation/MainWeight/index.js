import React, { createContext, useState, useContext } from 'react';

const MainWeightContext = createContext();

export default function MainWeightProvider({ children }) {
  const [youngest, setYoungest] = useState({ num: '', unit: '' });
  const [oldest, setOldest] = useState({ num: '', unit: '' });

  return (
    <MainWeightContext.Provider
      value={{
        youngest,
        setYoungest,
        oldest,
        setOldest,
      }}
    >
      {children}
    </MainWeightContext.Provider>
  );
}

export function useMainWeight() {
  const context = useContext(MainWeightContext);
  if (!context)
    throw new Error('useMainWeight must be used within a MainWeightProvider');
  const { youngest, setYoungest, oldest, setOldest } = context;
  return { youngest, setYoungest, oldest, setOldest };
}
