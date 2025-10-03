import { useState, useEffect } from 'react';

interface UseScrollPositionOptions {
  threshold?: number;
  debounceMs?: number;
}

export function useScrollPosition(options: UseScrollPositionOptions = {}) {
  const { threshold = 150, debounceMs = 100 } = options;
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const checkScrollPosition = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      setIsAtBottom(distanceFromBottom <= threshold);
    };

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(checkScrollPosition, debounceMs);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    checkScrollPosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [threshold, debounceMs]);

  return isAtBottom;
}
