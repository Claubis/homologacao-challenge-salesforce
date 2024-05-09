
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
import FontSizeAdjusterContainer from '../components/FontSizeAdjuster'; //Para aumentar as fontes
import FontSizeDecreaserContainer from "../components/FontSizeDecreaserContainer"; // Para diminuir a fonte


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  /* Aumentar a fonte */
  const [isFontUpEnabled, setIsFontUpEnabled] = useState(false);

  useEffect(() => {
      const storedValue = localStorage.getItem('isFontUpEnabled');
      console.log('Stored value:', storedValue);
      setIsFontUpEnabled(storedValue === 'true');
  }, []);

  /* Diminuir a fonte */
  const [isFontDownEnabled, setIsFontDownEnabled] = useState(false);

  useEffect(() => {
      const storedValue = localStorage.getItem('isFontDownEnabled');
      console.log('Stored value:', storedValue);
      setIsFontDownEnabled(storedValue === 'true');
  }, []);

  return (

    <SessionProvider session={session}>

      {/* Vai verificar se está verdadeiro o status para poder aumentar ou não a fonte. */}
      {isFontUpEnabled && <FontSizeAdjusterContainer />}

      {isFontDownEnabled && <FontSizeDecreaserContainer />}
        
        <Navbar/>
        <WatsonAssistantChat/>
        {isClient && <VLibras forceOnload={true} />}
          
          <Component {...pageProps} />
          <Footer/>


    </SessionProvider>

  );
}

export default MyApp;
