"use client"

import Link from "next/link";
import TextReader from "./TextReader";

export default function AboutServices() {

    return(

        <section className="dark:bg-gray-700 dark:text-white">

            <div className=" mx-auto space-y-12 dark:bg-gray-700">
                
                <div className="flex flex-col overflow-hidden shadow-sm lg:flex-row dark:bg-gray-700">
                   
                    <img src="/assets/AboutServices/imagem1.png" alt="Imagem com pédio da empresa" className=" h-full md:w-[700px] dark:bg-gray-500 aspect-video " />
                    
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-200  dark:bg-gray-700">
                        
                    <TextReader text="Serviços">
                        <h3 className="mt-10 md:mt-0 text-4xl md:text-6xl font-bold dark:text-white">Serviços</h3>
                    </TextReader>

                    <TextReader text="Utilizando o Salesforce Customer 360, nossa plataforma de CRM integrada, sua empresa oferece experiências personalizadas para seus clientes. Nossa solução fornece produtos poderosos e conectados para melhorar seu marketing, vendas, commerce, atendimento ao cliente, TI . e muito mais.">
                        <p className="my-6 dark:text-white font-manrope text-xl leading-10">Utilizando o Salesforce Customer 360, nossa plataforma de CRM integrada, sua empresa oferece experiências personalizadas para seus clientes. Nossa solução fornece produtos poderosos e conectados para melhorar seu marketing, vendas, commerce, atendimento ao cliente, TI . e muito mais.</p>
                    </TextReader>
                        
                        <Link className="inline-flex items-center space-x-2 text-sm dark:text-[#639CD0]" href="/Services">

                        <TextReader text="Saiba mais">
                            <span className="font-sen">Saiba mais</span>
                        </TextReader>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>

                        </Link>

                    </div>

                </div>
               
            </div>

        </section>

    );
}