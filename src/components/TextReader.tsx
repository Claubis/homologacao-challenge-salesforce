import React from 'react';

interface TextReaderProps  {
    text: string;
    children: React.ReactNode;
}

const TextReader: React.FC<TextReaderProps> = ({text, children  }) => {
  
  const handleClick  = () => {
    
    console.log('Texto para ser lido:', text);

    // Checa se o navegador suporta a síntese de fala
    if ('speechSynthesis' in window) {

      // Cria uma nova instância de SpeechSynthesisUtterance
      const utterance = new SpeechSynthesisUtterance(text);

      // Define a língua da fala (exemplo em inglês)
      utterance.lang = 'pt-BR';

      // Inicia a fala
      window.speechSynthesis.speak(utterance);

    } else {
      console.error('Seu navegador não suporta a síntese de fala.');
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children }
    </div>
  );
};

export default TextReader;
