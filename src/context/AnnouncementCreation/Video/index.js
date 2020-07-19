import React, { createContext, useState, useContext } from 'react';

const VideoContext = createContext();

export default function VideoProvider({ children }) {
  const [video, setVideo] = useState(null);

  return (
    <VideoContext.Provider
      value={{
        video,
        setVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const context = useContext(VideoContext);
  if (!context) throw new Error('useVideo must be used within a VideoProvider');
  const { video, setVideo } = context;
  return { video, setVideo };
}
