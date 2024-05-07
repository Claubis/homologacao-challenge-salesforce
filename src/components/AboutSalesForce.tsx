"use client"
import TextReader from "./TextReader";
import Image from "next/image";

/* Impotação do modulo de animação */
import { motion } from "framer-motion"

export default function AboutSalesForce(){

    return(

        <section className="p-6 bg-white dark:bg-gray-700 dark:text-gray-50">
            
            <div className="mx-auto flex flex-col p-4 space-y-5 gap-3">
                
            <TextReader text="Sobre a salesforce">
                <h1 className="text-4xl md:text-6xl font-bold leading-none text-start mt-10">Sobre a salesforce</h1>
            </TextReader>

            <TextReader text="A Salesforce é uma empresa de software que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas.">
                <p className="text-xl font-manrope text-start">A Salesforce é uma empresa de software que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas.</p>
            </TextReader>

            <TextReader text="É uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.">

                <p className="text-xl font-manrope">
                É uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.
                </p>

            </TextReader>

            <TextReader text="A revolução no gerenciamento de relacionamento com clientes">

                <h1 className="font-bold text-2xl">A revolução no gerenciamento de relacionamento com clientes</h1>

            </TextReader>

            <TextReader text="A Salesforce emergiu como uma força transformadora no universo do CRM (Customer Relationship Management), redefinindo como as empresas se conectam, interagem e mantêm relacionamentos com seus clientes. Como uma plataforma líder globalmente, a Salesforce oferece soluções inovadoras em nuvem que cobrem todas as esferas do relacionamento com o cliente, desde vendas e atendimento ao cliente até marketing digital e análise de dados.">
                <p className="text-xl font-manrope leading-10">A Salesforce emergiu como uma força transformadora no universo do CRM (Customer Relationship Management), redefinindo como as empresas se conectam, interagem e mantêm relacionamentos com seus clientes. Como uma plataforma líder globalmente, a Salesforce oferece soluções inovadoras em nuvem que cobrem todas as esferas do relacionamento com o cliente, desde vendas e atendimento ao cliente até marketing digital e análise de dados.</p>
            </TextReader>

                <div className="flex">
                    
                    <div className="flex justify-center items-center">
                    
                    <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{opacity:1, x:0}}
                    exit={{ opacity: 0, x:0 }}
                    transition={{duration:0.5}}>

                        <TextReader text="O que torna a Salesforce única?">
                            <h2 className="font-bold text-4xl md:text-6xl md:leading-[80px] text-[#8F278F]">O que torna a <br />Salesforce <br /> única?</h2>
                            
                        </TextReader>
                    </motion.div>
                    </div>

                    <div className="hidden md:flex justify-end items-end text-end ">

                    <motion.div
                    initial={{opacity:0, y:200, scale:0.5}}
                    whileInView={{opacity:1, y:0, scale:1}}
                    exit={{opacity:0, y:200, scale:0.5}}
                    transition={{duration:0.5}}
                    >
                        <Image src="/assets/FormDescoberta/Imagem2.jpg" alt="Imagem dos serviços da SalesForce" width={500} height={500}></Image>


                    </motion.div>
                    
                    </div>

                </div>

            </div>

        </section>
    );

}