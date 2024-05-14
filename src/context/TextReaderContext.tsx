import React from "react";

interface TextReaderContextProps {
    isSpeaking: boolean;
    setIsSpeaking: (isSpeaking: boolean) => void;
  }
  
  const TextReaderContext = React.createContext<TextReaderContextProps>(
    { isSpeaking: true, setIsSpeaking: () => {} }
  );
  
  export default TextReaderContext;
  