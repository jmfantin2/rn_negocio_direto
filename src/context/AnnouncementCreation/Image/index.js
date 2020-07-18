import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export default function ImageProvider({ children }) {
  const [image, setImage] = useState('');

  return (
    <ImageContext.Provider
      value={{
        image,
        setImage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}

export function useImage() {
  const context = useContext(ImageContext);
  if (!context) throw new Error('useImage must be used within a ImageProvider');
  const { image, setImage } = context;
  return { image, setImage };
}
