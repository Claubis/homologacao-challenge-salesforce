

import React, { useState, useCallback } from 'react';

// Um hook personalizado que gerencia o estado de aumento de fonte
export const useToggleFontDecrease = () => {
    const [isFontDownEnabled, setIsFontDownEnabled] = useState(false);

    const toggleFontDecrease = useCallback(() => {
        setIsFontDownEnabled(prevState => !prevState);
        console.log(isFontDownEnabled ? 'Diminuir fonte desativado' : 'Diminuir fonte ativado');
    }, [isFontDownEnabled]);

    return { isFontDownEnabled, toggleFontDecrease };
};
