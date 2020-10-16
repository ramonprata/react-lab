import { useEffect } from 'react';

export const useWeelListener = (
  componentRef,
  scrollDirection = 'vertical',
  amountScroll = 1
) => {
  const scrollVertical = scrollDirection === 'vertical';

  let scrolDirection = {
    top: 0,
    left: 0,
  };

  const handleWeel = (e) => {
    if (componentRef && componentRef.current) {
      if (!scrollVertical) {
        e.preventDefault();
        scrolDirection.left =
          componentRef.current.scrollLeft + e.deltaY * amountScroll;
      } else {
        scrolDirection.top = e.deltaY * amountScroll;
      }
      componentRef.current.scrollTo({
        ...scrolDirection,
        behaviour: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (componentRef && Boolean(componentRef.current)) {
      componentRef.current.addEventListener('wheel', handleWeel, {
        passive: false,
      });
      return () => {
        componentRef.current.removeEventListener('wheel', handleWeel);
      };
    }
  }, []);
};
