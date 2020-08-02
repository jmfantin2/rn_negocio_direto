import React, { createContext, useState, useContext } from 'react';

const MainWeightContext = createContext();

export default function MainWeightProvider({ children }) {
  const [mainWeight, setMainWeight] = useState('1');

  return (
    <MainWeightContext.Provider
      value={{
        mainWeight,
        setMainWeight,
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
  const { mainWeight, setMainWeight } = context;
  return { mainWeight, setMainWeight };
}
