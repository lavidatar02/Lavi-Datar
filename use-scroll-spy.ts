import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset = 200) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      let current = '';
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = id;
          }
        }
      }
      
      if (current !== activeId) {
        setActiveId(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset, activeId]);

  return activeId;
}
