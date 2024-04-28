import React, { useState, useCallback } from 'react';

// Um hook personalizado que gerencia o estado de aumento de fonte
export const useToggleFontIncrease = () => {
    const [isFontUpEnabled, setIsFontUpEnabled] = useState(false);

    const toggleFontIncrease = useCallback(() => {
        setIsFontUpEnabled(prevState => !prevState);
        console.log(isFontUpEnabled ? 'Aumentar fonte desativado' : 'Aumentar fonte ativado');
    }, [isFontUpEnabled]);

    return { isFontUpEnabled, toggleFontIncrease };
};
