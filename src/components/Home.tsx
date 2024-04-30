"use client"
import React from "react";
import TextReader from "./TextReader";
import Link from "next/link";


export default function Home(){

    return(

        <section className="dark:bg-gray-700 dark:text-white">
            
            <div className="grid md:flex md:justify-center md:items-center min-h-[70vh] p-6 md:p-10">
                
                <div className="flex flex-col gap-10 justify-start items-start">

                    <div>
                        <TextReader text="Bem vindo à SalesForce">
                            <h1 className="text-4xl md:text-6xl font-manrope leading-none text-left dark:text-white">Bem vindo à <br /> SALESFORCE</h1>
                        </TextReader>
                    </div>

                
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

                </div>

                <div className="flex justify-center md:justify-start">
                    
                    <img src={'/assets/Home/image2.png'} width={1500} height={500} alt="Imagem Da página principal"></img>

                </div>

            </div>

</section>

    );

}

