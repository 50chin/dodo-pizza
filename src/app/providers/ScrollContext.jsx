import React, { createContext, useEffect, useState } from 'react';

export const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (window.scrollY > nav.offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={isFixed}>{children}</ScrollContext.Provider>
  );
};
