

/* Importação geral */
import React from 'react';
import { motion } from 'framer-motion';

interface HighlightedFieldProps {
  children: React.ReactNode;
  isFocused: boolean;
  highlightColor?: string;
}

const HighlightedField: React.FC<HighlightedFieldProps> = ({ children, isFocused, highlightColor = 'red' }) => {
  return (
    <motion.div
      initial={{ border: '2px solid transparent' }}
      animate={{ border: isFocused ? '2px solid ${highlightColor}' : '2px solid transparent' }}
    >
      {children}
    </motion.div>
  );
};

export default HighlightedField;
