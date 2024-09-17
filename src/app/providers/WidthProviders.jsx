import React, { createContext, useContext, useState, useEffect } from 'react';

const WindowWidthContext = createContext();

export const useWindowWidth = () => {
  return useContext(WindowWidthContext);
};

export const WindowWidthProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWidth);

    // Убирает обработчик во время размонтирования компонента
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={width}>
      {children}
    </WindowWidthContext.Provider>
  );
};
