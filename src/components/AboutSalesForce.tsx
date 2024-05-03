"use client"
import TextReader from "./TextReader";
import Image from "next/image";

export default function AboutSalesForce(){

    return(

        <section className="py-6 bg-white dark:bg-gray-700 dark:text-gray-50">
            
            <div className="mx-auto flex flex-col p-4 space-y-8 md:px-24  gap-5">
                
            <TextReader text="Sobre a salesforce">
                <h1 className="text-4xl md:text-6xl font-manrope leading-none text-start  text-[#3EA0E7] mt-10">Sobre a salesforce</h1>
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
                        <TextReader text="O que torna a Salesforce única?">
                            <h2 className="font-bold text-6xl leading-[80px] text-[#8F278F]">O que torna a <br />Salesforce <br /> única?</h2>
                        </TextReader>
                    </div>

                    <div className="hidden md:flex justify-end items-end text-end ">
                        <Image src="/assets/FormDescoberta/Imagem2.jpg" alt="Imagem dos serviços da SalesForce" width={500} height={500}></Image>
                    </div>

                </div>

                <TextReader text="Personalização poderosa: A Salesforce permite uma personalização sem precedentes para atender às necessidades específicas de cada negócio, garantindo que cada interação com o cliente seja tão eficaz quanto possível.">
                    <p className="text-xl font-manrope leading-10"><strong>Personalização poderosa:</strong> A Salesforce permite uma personalização sem precedentes para atender às necessidades específicas de cada negócio, garantindo que cada interação com o cliente seja tão eficaz quanto possível.</p>
                </TextReader>

                <TextReader text="Inovação contínua:Com atualizações regulares e uma dedicação à inovação, a Salesforce está sempre na vanguarda da tecnologia CRM, oferecendo aos seus usuários novas funcionalidades e melhorias">
                    <p className="text-xl font-manrope leading-10"><strong>Inovação contínua:</strong> Com atualizações regulares e uma dedicação à inovação, a Salesforce está sempre na vanguarda da tecnologia CRM, oferecendo aos seus usuários novas funcionalidades e melhorias.</p>
                </TextReader>

                <TextReader text="Um ecossistema abrangente:A Salesforce não é apenas uma aplicação, mas um ecossistema completo. Através do Salesforce AppExchange, empresas podem acessar milhares de aplicativos integrados para expandir e personalizar sua plataforma Salesforce.">
                    <p className="text-xl font-manrope leading-10"><strong>Um ecossistema abrangente:</strong> A Salesforce não é apenas uma aplicação, mas um ecossistema completo. Através do Salesforce AppExchange, empresas podem acessar milhares de aplicativos integrados para expandir e personalizar sua plataforma Salesforce.</p>
                </TextReader>

                <TextReader text="Cloud computing: Sendo uma plataforma baseada na nuvem, a Salesforce oferece flexibilidade e acessibilidade incomparáveis, permitindo que as equipes acessem dados críticos de qualquer lugar, a qualquer hora, impulsionando a produtividade e a colaboração.">
                    <p className="text-xl font-manrope leading-10"><strong>Cloud computing:</strong>  Sendo uma plataforma baseada na nuvem, a Salesforce oferece flexibilidade e acessibilidade incomparáveis, permitindo que as equipes acessem dados críticos de qualquer lugar, a qualquer hora, impulsionando a produtividade e a colaboração.</p>
                </TextReader>

                
            <TextReader text="Conheça nossa formulário de Descoberta que te ajuda a saber o melhor produto para sua empresa">
                <span className="font-sen text-xl">Conheça nossa formulário de Descoberta que te ajuda a saber o melhor produto para sua empresa</span>
            </TextReader>


            <TextReader text="Preencha agora">

                <button className="px-8 py-3 text-lg font-sen rounded bg-segunda text-white dark:bg-segunda dark:text-white">Preencha agora</button>
            </TextReader>

            

            </div>

        </section>
    );

}