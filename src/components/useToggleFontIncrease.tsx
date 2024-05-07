import React, { useState, useCallback, useEffect } from 'react';

// Um hook personalizado que gerencia o estado de aumento de fonte. Nasce como desativado por padrão.
export const useToggleFontIncrease = () => {
    const [isFontUpEnabled, setIsFontUpEnabled] = useState(false);

    // const toggleFontIncrease = useCallback(() => {
    //     setIsFontUpEnabled(prevState => !prevState);
    //     console.log(isFontUpEnabled ? 'Aumentar fonte desativado' : 'Aumentar fonte ativado');
    // }, [isFontUpEnabled]);

    // return { isFontUpEnabled, toggleFontIncrease };

    const toggleFontIncrease = useCallback(() => {
        setIsFontUpEnabled(prevState => !prevState);
    }, []);

    useEffect(() => {
        const storedValue = localStorage.getItem('isFontUpEnabled');
        if (storedValue) {
            setIsFontUpEnabled(storedValue === 'true');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isFontUpEnabled', String(isFontUpEnabled));
    }, [isFontUpEnabled]);

    return { isFontUpEnabled, toggleFontIncrease };
};

