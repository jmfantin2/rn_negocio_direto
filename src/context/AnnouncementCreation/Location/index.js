import React, { createContext, useState, useContext } from 'react';

const LocationContext = createContext();

export default function LocationProvider({ children }) {
  const [uf, setUF] = useState('');
  const [city, setCity] = useState('');

  return (
    <LocationContext.Provider
      value={{
        uf,
        setUF,
        city,
        setCity,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context)
    throw new Error('useLocation must be used within a LocationProvider');
  const { uf, setUF, city, setCity } = context;
  return { uf, setUF, city, setCity };
}
