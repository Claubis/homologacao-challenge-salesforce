
/* Importações gerais */

import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/* 
Instalar:
npm install next-auth react
*/
import { SessionProvider, useSession } from "next-auth/react";

/* Importações de estilos */
import '../globals.css';

/* Importações de componentes */
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
// import { LanguageProvider } from '../contexts/LanguageContext';
// import { FontSizeProvider } from '../contexts/FontSizeContext';
import VLibras from '@djpfs/react-vlibras';
import WatsonAssistantChat from '../components/WatsonAssistantChat';


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <SessionProvider session={session}>
      <Navbar/>
      <WatsonAssistantChat/>
      {isClient && <VLibras forceOnload={true} />}
        
        <Component {...pageProps} />
        <Footer/>
    </SessionProvider>

  );
}

export default MyApp;
