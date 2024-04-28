

import React, { useState, useCallback } from 'react';

// Um hook personalizado que gerencia o estado de aumento de fonte
export const useTextReader = () => {
    const [isTextReaderOn, setIsTextReaderOn] = useState(false);

    const toggleTextReaderOn = useCallback(() => {
        setIsTextReaderOn(prevState => !prevState);
        console.log(isTextReaderOn ? 'Leitor de tela desativado' : 'Leitor de tela desativado ativado');
    }, [isTextReaderOn]);

    return { isTextReaderOn, toggleTextReaderOn };
};
