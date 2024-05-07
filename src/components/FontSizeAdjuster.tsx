import React, { useState, useEffect } from 'react';

function FontSizeAdjusterContainer() {
  const [isFontUpEnabled, setIsFontUpEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem('isFontUpEnabled');
      return storedValue ? JSON.parse(storedValue) : false;
    }
    return false;
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isFontUpEnabled && event.key === 'ArrowUp') {
        const elements = document.querySelectorAll('[class^="text-"]');
        elements.forEach((element) => {
          if (element instanceof HTMLElement) {
            const computedStyle = window.getComputedStyle(element);
            const currentFontSize = parseFloat(computedStyle.fontSize);
            const newFontSize = currentFontSize + 2; // Aumenta o tamanho da fonte em 2 pixels
            element.style.fontSize = `${newFontSize}px`;
          }
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFontUpEnabled]);

  return null;
}

export default FontSizeAdjusterContainer;
