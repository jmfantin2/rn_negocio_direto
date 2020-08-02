import React, { createContext, useState, useContext } from 'react';

const OtherAgeRangeContext = createContext();

export default function OtherAgeRangeProvider({ children }) {
  const [youngest, setYoungest] = useState({ num: '', unit: '' });
  const [oldest, setOldest] = useState({ num: '', unit: '' });

  return (
    <OtherAgeRangeContext.Provider
      value={{
        youngest,
        setYoungest,
        oldest,
        setOldest,
      }}
    >
      {children}
    </OtherAgeRangeContext.Provider>
  );
}

export function useOtherAgeRange() {
  const context = useContext(OtherAgeRangeContext);
  if (!context)
    throw new Error(
      'useOtherAgeRange must be used within a OtherAgeRangeProvider'
    );
  const { youngest, setYoungest, oldest, setOldest } = context;
  return { youngest, setYoungest, oldest, setOldest };
}
