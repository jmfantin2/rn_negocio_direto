import React, { createContext, useState, useContext } from 'react';

const OtherAgeRangeContext = createContext();

export default function OtherAgeRangeProvider({ children }) {
  const [youngest2, setYoungest2] = useState({ num: '1', unit: 'M' });
  const [oldest2, setOldest2] = useState({ num: '1', unit: 'Y' });

  return (
    <OtherAgeRangeContext.Provider
      value={{
        youngest2,
        setYoungest2,
        oldest2,
        setOldest2,
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
  const { youngest2, setYoungest2, oldest2, setOldest2 } = context;
  return { youngest2, setYoungest2, oldest2, setOldest2 };
}
