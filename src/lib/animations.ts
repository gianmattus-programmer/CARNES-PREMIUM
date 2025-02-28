
import { useEffect, useRef, useState } from 'react';

export function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isIntersecting };
}

export function useImageLoader() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return { isLoaded, handleImageLoaded };
}
