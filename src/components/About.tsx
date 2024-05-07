"use client"
import Link from "next/link";
import TextReader from "./TextReader";

export default function About() {

    return(

        <section className="p-6 md:p-10 bg-white dark:bg-gray-700 dark:text-white">
            
            <div className="container mx-auto space-y-1 text-start md:text-center">
                
            <TextReader text="O que é a SalesForce">
                
                <h2 id="text17" tabIndex={16} className="md:pl-10 text-4xl md:text-6xl font-bold mt-10 text-start mb-10 md:mb-0">O  que é a Salesforce?</h2>

            </TextReader>

            <TextReader text="A Salesforce é uma plataforma de CRM em nuvem que permite às empresas de todos os tamanhos se aproximarem de seus clientes de maneira nunca antes possível. Desde vendas e marketing até serviço ao cliente e análise de dados, a Salesforce oferece uma gama completa de aplicações para automatizar processos de negócios, melhorar a eficiência e impulsionar o crescimento.">
                
                <p id="text18" tabIndex={17} className="font-manrope md:pt-10 md:p-10 text-xl md:text-2xl text-start leading-10">A Salesforce é uma plataforma de CRM em nuvem que permite às empresas de todos os tamanhos se aproximarem de seus clientes de maneira nunca antes possível. Desde vendas e marketing até serviço ao cliente e análise de dados, a Salesforce oferece uma gama completa de aplicações para automatizar processos de negócios, melhorar a eficiência e impulsionar o crescimento. <span className="text-[#3EA0E7]">Saiba mais sobre a Salesforce.</span> </p>

            </TextReader>

            </div>
            

            <div className="container grid justify-center md:gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
                
                <div className="flex flex-col md:px-8 md:py-6 mt-10 md:mt-0">
                    
                    <TextReader text="Produtos">

                        <h2 id="text19" tabIndex={18} className="mb-2 text-lg font-manrope sm:text-xl title-font dark:text-white">Produtos</h2>

                    </TextReader>     

                    <TextReader text="Escrever uma frase sobre diferencial dos produtos.">
                        
                        <p id="text20" tabIndex={19} className="flex-1 mb-4 leading-relaxed dark:text-white font-manrope">Por que a Salesforce é Diferente?</p>

                    </TextReader>

                    <Link className="inline-flex items-center space-x-2 text-sm dark:text-[#3EA0E7] mt-10" href='/Product'>
                        
                        <TextReader text="Saiba mais">

                            <span id="text21" tabIndex={20} className="font-sen">Saiba mais</span>

                        </TextReader>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
                
                <div className="flex flex-col md:px-8 md:py-6 mt-10 md:mt-0 lg:border-none xl:border-solid">
                    
                    <TextReader text="Serviços">

                        <h2 id="text22" tabIndex={21} className="mb-2 text-lg font-manrope sm:text-xl title-font dark:text-white">Serviços</h2>

                    </TextReader>

                        <p id="text23" tabIndex={22} className="flex-1 mb-4 text-base leading-relaxed font-manrope dark:text-white">Conheça sobre os serviços que fornecemos</p>


                    <Link className="inline-flex items-center space-x-2 text-sm dark:text-[#3EA0E7]" href="/Services">
                        
                    <TextReader text="Saiba mais">

                        <span id="text24" tabIndex={23} className="font-sen">Saiba mais</span>

                    </TextReader>


                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </Link>

                </div>

                <div className="flex flex-col md:px-8 md:py-6 mt-10 md:mt-0">
                    
                <TextReader text="CRM">

                    <h2 id="text25" tabIndex={24}  className="mb-2 text-lg font-manrope sm:text-xl title-font dark:text-white">CRM</h2>

                </TextReader>

                <TextReader text="Falar o que é o CRM e como isso agrega para cada empresa.">

                    <p id="text26" tabIndex={25} className="flex-1 mb-4 text-base leading-relaxed dark:text-white font-manrope mt-5">O que é o CRM e como isso agrega para cada empresa?.</p>

                </TextReader>

                    <Link className="inline-flex items-center space-x-2 text-sm dark:text-[#3EA0E7]" href="/CRM">
                        
                    <TextReader text="Saiba mais">

                        <span id="text27" tabIndex={26} className="font-sen">Saiba mais</span>

                    </TextReader>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>

                    </Link>

                </div>

                <div className="flex flex-col md:px-8 md:py-6 mt-10 md:mt-0 mb-10 md:mb-0">
                    
                <TextReader text="Contato">

                    <h2 id="text28" tabIndex={27} className="mb-2 text-lg font-manrope sm:text-xl title-font dark:text-white">Contato</h2>

                </TextReader>

                <TextReader text="Explicar as formas de contato para que cada cliente possa escolher um e entrar em contato.">
                    <p id="text29" tabIndex={28} className="flex-1 mb-4 text-base leading-relaxed dark:text-white font-manrope">Saiba como entrar em contato</p>

                </TextReader>

                    <Link className="inline-flex items-center space-x-2 text-sm dark:text-[#3EA0E7] mt-10" href="/Contact">

                    <TextReader text="Saiba mais">

                        <span id="text30" tabIndex={29} className="font-sen">Saiba mais</span>

                    </TextReader> 

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </Link>

                </div>

            </div>

        </section>
    );
}