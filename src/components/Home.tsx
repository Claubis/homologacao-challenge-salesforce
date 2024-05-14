"use client"

/* importações gerais */
import React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react';


/* Importação de componentes */
import TextReader from "./TextReader"; // Fazer a leitura da tela ao clicar em um elemento
import  FocusableComponent from '../components/FocusableComponent'; // Para dar foco ao usar a tecla TAB
import FontSizeAdjusterContainer from '../components/FontSizeAdjuster'; //Para aumentar as fontes
import FontSizeDecreaserContainer from "./FontSizeDecreaserContainer"; // Para diminuir a fonte

/* Impotação do modulo de animação */
import { motion } from "framer-motion"

export default function Home(){

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

    return(

        <section className="dark:bg-gray-700 dark:text-white">

            {/* Vai verificar se está verdadeiro o status para poder aumentar ou não a fonte. */}
            {isFontUpEnabled && <FontSizeAdjusterContainer />}

            {isFontDownEnabled && <FontSizeDecreaserContainer />}

            
            <div className="grid md:flex md:justify-center md:items-center min-h-[70vh] p-6 md:p-10">
                
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{opacity:1, x:0}}
                exit={{ opacity: 0, x:0}}
                transition={{duration:0.5}}
                className="flex flex-col gap-10 justify-start items-start">
                        
                        <TextReader text="Bem vindo à SalesForce">

                        <FocusableComponent id="text8" tabIndex={7}>
                            <h1 id="text8" tabIndex={7}  className="text-4xl md:text-6xl font-bold leading-none text-left dark:text-white">Bem vindo à <br />SalesForce </h1>
                        </FocusableComponent>

                        </TextReader>
 

                    <div>


                        <TextReader text="Cada produto que oferecemos desempenha um papel na construção de conexões que impulsionam o sucesso, e esse sucesso pode ser aproveitado para criar mudanças positivas.">
                            
                            <p id="text9" tabIndex={8} className="text-lx md:text-2xl font-manrope dark:text-white leading-7 md:leading-10">Cada produto que oferecemos desempenha um papel na construção de conexões que impulsionam o sucesso, e esse sucesso pode ser aproveitado para criar mudanças positivas.
                            </p>
                        
                        </TextReader>


                    </div>

                    <div className="self-center md:self-start px-8 py-3 font-sen rounded bg-segunda dark:bg-[#3EA0E7] dark:text-gray-50 text-white hover:bg-primeira hover:text-[#3EA0E7]">
                    
                        
                        <TextReader text="Entre em contato">
                        
                            <Link className="text-xl" id="text10" tabIndex={9} href="/Contact">Entre em contato</Link>
                        
                        </TextReader>


                    </div>
                </ motion.div >


                    <motion.div
                    initial={{opacity:0, y:200, scale:0.5}}
                    whileInView={{opacity:1, y:0, scale:1}}
                    exit={{opacity:0, y:0, scale:0.5}}
                    transition={{duration:0.5}}
                    >

                            
                        <img id="text11" tabIndex={10} src={'/assets/Home/image2.png'} alt="Imagem ilustrativa com personagem da Salesforce em traje animal marrom, com fundo mostrando três produtos da Salesforce representados por gráficos, processo e cartão de visita." className="w-[800px]"></img>


                    </motion.div>

                

            </div>

</section>

    );

}

