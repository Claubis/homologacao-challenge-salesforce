

import React, { useState, useCallback } from 'react';

// Um hook personalizado que gerencia o estado de aumento de fonte
export const useChangeLanguage = () => {
    const [isLanguageOn, setLanguageOn] = useState(false);

    const toggleAlterLanguage = useCallback(() => {
        setLanguageOn(prevState => !prevState);
        console.log(isLanguageOn ? 'Alterar idioma desativado' : 'Alterar idioma ativado');
    }, [isLanguageOn]);

    return { isLanguageOn, toggleAlterLanguage };
};
