"use client"

/* importações gerais */
import React from "react";
import Link from "next/link";

/* Importação de componentes */
import TextReader from "./TextReader";

/* Impotação do modulo de animação */
import { motion } from "framer-motion"


export default function Home(){

    return(

        <section className="dark:bg-gray-700 dark:text-white">
            
            <div className="grid md:flex md:justify-center md:items-center min-h-[70vh] p-6 md:p-10">
                
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{opacity:1, x:0}}
                exit={{ opacity: 0, x:0}}
                transition={{duration:0.5}}
                className="flex flex-col gap-10 justify-start items-start">
                    
                        <TextReader text="Bem vindo à SalesForce">

                            <h1 className="text-4xl md:text-6xl font-bold leading-none text-left dark:text-white">Bem vindo à <br />SalesForce </h1>

                        </TextReader>
                    

                
                    <div>

                        <TextReader text="Cada produto que oferecemos desempenha um papel na construção de conexões que impulsionam o sucesso, e esse sucesso pode ser aproveitado para criar mudanças positivas.">
                            
                            <p className="text-lx md:text-2xl font-manrope dark:text-white leading-7 md:leading-10">Cada produto que oferecemos desempenha um papel na construção de conexões que impulsionam o sucesso, e esse sucesso pode ser aproveitado para criar mudanças positivas.
                            </p>
                        
                        </TextReader>

                    </div>

                    <div className="self-center md:self-start px-8 py-3 font-sen rounded bg-segunda dark:bg-[#3EA0E7] dark:text-gray-50 text-white text-xl hover:bg-primeira hover:text-[#3EA0E7]">
                        
                        <TextReader text="Entre em contato">
                        
                        <Link href="/Contact">Entre em contato</Link>
                        
                        </TextReader>

                    </div>
                </ motion.div >


                    <motion.div
                    initial={{opacity:0, y:200, scale:0.5}}
                    whileInView={{opacity:1, y:0, scale:1}}
                    exit={{opacity:0, y:0, scale:0.5}}
                    transition={{duration:0.5}}
                    >
                        <img src={'/assets/Home/image2.png'} width={1500} height={500} alt="Imagem Da página principal"></img>
                    </motion.div>

                

            </div>

</section>

    );

}

