// Exemplo de arquivo src/types/html.d.ts
import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    // Extends HTMLAttributes to include non-standard attributes used by VLibras
    'vw'?: boolean;
    'vw-access-button'?: boolean;
    'vw-plugin-wrapper'?: boolean;
  }
}
