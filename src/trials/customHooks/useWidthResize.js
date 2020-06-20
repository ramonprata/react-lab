import { useState, useEffect } from 'react';

export const useWidthResize = (mobileSize = 480) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWidthResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidthResize);
    return () => {
      window.removeEventListener('resize', handleWidthResize);
    };
  });
  const isMobile = width <= mobileSize;
  return { width, isMobile };
};
