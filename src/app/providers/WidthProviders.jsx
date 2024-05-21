import React, { createContext, useContext, useState, useEffect } from 'react';

const WidthProviders = createContext();

export const useWindowWidth = () => {
  return useContext(WidthProviders);
};

export const WindowWidthProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <WidthProviders.Provider value={width}>{children}</WidthProviders.Provider>
  );
};
