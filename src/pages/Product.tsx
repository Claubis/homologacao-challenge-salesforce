
import Image from "next/image";
import Link from "next/link";
import TextReader from '../components/TextReader'

export default function Product(){
    return(

        <div>

            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 dark:bg-gray-700 dark:text-white">
                
                <div className="flex flex-col mx-auto overflow-hidden rounded justify-center">
                    
                    <div className=" flex justify-center bg-gray-200 dark:bg-gray-500 lg:max-w-8xl">
                        <Image src="/assets/Details/imagem2.png" alt="Imagem com um personagem da SalesForce que vai explicar sobre os produtos" width={500} height={500} />
                    </div>
                    
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-6xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-300 dark:bg-gray-400">

                        <div className="space-y-2">

                            <TextReader text="Por que a Salesforce é Diferente?">
                                <h1 rel="noopener noreferrer" className="inline-block text-4xl md:text-5xl font-manrope text-white">Por que a Salesforce é Diferente?</h1>
                            </TextReader>   
                        
                        </div>

                        <div className="leading-10 flex flex-col gap-10">
                            
                            <TextReader text="Personalização: Com a Salesforce, você pode personalizar quase tudo. Utilize o Salesforce Sales Cloud para se adequar à forma como sua equipe de vendas trabalha. Explore o Sales Cloud.">
                                <p className="font-manrope text-xl"><strong>Personalização:</strong> Com a Salesforce, você pode personalizar quase tudo. Utilize o Salesforce Sales Cloud para se adequar à forma como sua equipe de vendas trabalha. Explore o Sales Cloud.</p>
                            </TextReader>   

                            <TextReader text="Inovação Constante: A plataforma está sempre evoluindo, garantindo acesso às últimas funcionalidades com o Salesforce Einstein, nossa inteligência artificial. Descubra o Salesforce Einstein.">

                                <p className="font-manrope text-xl"><strong>Inovação Constante:</strong> A plataforma está sempre evoluindo, garantindo acesso às últimas funcionalidades com o Salesforce Einstein, nossa inteligência artificial. Descubra o Salesforce Einstein.</p>

                            </TextReader>

                            <TextReader text="Ecossistema Expansivo: Explore o Salesforce AppExchange para encontrar aplicações prontas que estendem a funcionalidade da Salesforce em todas as áreas do seu negócio. Navegue pelo AppExchange.">
                                <p className="font-manrope text-xl"><strong>Ecossistema Expansivo:</strong> Explore o Salesforce AppExchange para encontrar aplicações prontas que estendem a funcionalidade da Salesforce em todas as áreas do seu negócio. Navegue pelo AppExchange.</p>
                            </TextReader>

                            <TextReader text="Acessível de Qualquer Lugar: A Salesforce permite que você acesse seus dados de qualquer lugar, com o Salesforce Mobile App, tornando mais fácil do que nunca gerenciar suas relações com clientes em movimento. Baixe o Salesforce Mobile App.">
                                <p className="font-manrope text-xl"><strong>Acessível de Qualquer Lugar:</strong> A Salesforce permite que você acesse seus dados de qualquer lugar, com o Salesforce Mobile App, tornando mais fácil do que nunca gerenciar suas relações com clientes em movimento. Baixe o Salesforce Mobile App.</p>
                            </TextReader>
                        </div>

                    </div>
                </div>
            </div>

            <div className="px-10 py-16 mx-auto space-y-12 leading-10 dark:bg-gray-700 dark:text-white">

                <article className="space-y-8">

                    <div className="space-y-6">
                        
                        <TextReader text="Capacitando empresas com dados Inteligentes">
                            
                            <h1 className="text-4xl font-manrope md:tracking-tight md:text-5xl">Capacitando empresas com dados Inteligentes</h1>

                        </TextReader>

                    </div>

                    <div className="font-manrope text-xl leading-10">

                        <TextReader text="No coração da Salesforce está o poder de transformar dados em insights. Utilize o Salesforce Tableau para compreender melhor as necessidades e comportamentos de seus clientes, permitindo decisões baseadas em dados. Explore o Salesforce Tableau.">
                        <p>No coração da Salesforce está o poder de transformar dados em insights. Utilize o Salesforce Tableau para compreender melhor as necessidades e comportamentos de seus clientes, permitindo decisões baseadas em dados. Explore o Salesforce Tableau.</p>
                        </TextReader>

                    </div>

                </article>

                <div className="dark:bg-gray-700 dark:text-white">

                    <div className="flex flex-col md:flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                        
                        <TextReader text="SalesCloud">
                        <p rel="noopener noreferrer"  className="px-3 py-1 rounded-sm hover:underline dark:bg-[#3EA0E7] dark:text-gray-50 font-manrope">#SalesCloud</p>
                        </TextReader>

                        <TextReader text="Einstein">
                        <p rel="noopener noreferrer"  className="px-3 py-1 rounded-sm hover:underline dark:bg-[#3EA0E7] dark:text-gray-50 font-manrope">#Einstein</p>
                        </TextReader>

                        <TextReader text="AppExchange">
                        <p rel="noopener noreferrer"  className="px-3 py-1 rounded-sm hover:underline dark:bg-[#3EA0E7] dark:text-gray-50 font-manrope">#AppExchange</p>
                        </TextReader>

                    </div>

                    <div className="space-y-2 flex flex-col gap-5">

                        <TextReader text="Descubra ainda mais as combinações que os nossos produtos podem te oferecer">

                        <h4 className="text-xl font-manrope">Descubra ainda mais as combinações que os nossos produtos podem te oferecer</h4>

                        </TextReader>

                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                
                                <TextReader text="Seja para aumentar vendas">
                                <p rel="noopener noreferrer"  className="hover:underline font-manrope">Seja para aumentar vendas</p>

                                </TextReader>

                            </li>

                            <li>

                                <TextReader text="Melhorar o atendimento ao cliente">
                                <p rel="noopener noreferrer" className="hover:underline font-manrope">Melhorar o atendimento ao cliente</p>
                                </TextReader>
                            </li>

                            <li>

                                <TextReader text="ou criar campanhas de marketing mais eficazes">
                                <p rel="noopener noreferrer" className="hover:underline font-manrope">ou criar campanhas de marketing mais eficazes.
                                </p>
                                </TextReader>
                            </li>

                            
                        </ul>

                        <TextReader text="A Salesforce é a plataforma que coloca o CLIENTE no CENTRO do Seu negócio.">

                        <h2 className="text-xl font-manrope">A Salesforce é a plataforma que coloca o CLIENTE no CENTRO do Seu negócio.</h2>
                        </TextReader>

                        <TextReader text="Descubra como a Salesforce pode ajudar a transformar o seu negócio. Entre em contato conosco para saber mais ou agende uma demonstração hoje mesmo. Juntos, podemos criar conexões de cliente que não apenas impulsionam o crescimento, mas também constroem relacionamentos duradouros.">
                        <h3 className="text-xl font-manrope leading-10">Descubra como a Salesforce pode ajudar a transformar o seu negócio. Entre em contato conosco para saber mais ou agende uma demonstração hoje mesmo. Juntos, podemos criar conexões de cliente que não apenas impulsionam o crescimento, mas também constroem relacionamentos duradouros.</h3>
                        </TextReader>

                        <TextReader text="Para descobrir quais soluções podem catapultar sua empresa para o próximo nível, convidamos você a preencher nosso formulário de descoberta. Ao final, você receberá uma recomendação personalizada, adaptada às metas e desafios únicos do seu negócio, podendo ser uma combinação perfeita de um, dois ou todos os três módulos de CRM mencionados.">
                        <h4 className="text-xl font-manrope leading-10">Para descobrir quais soluções podem catapultar sua empresa para o próximo nível, convidamos você a preencher nosso formulário de descoberta. Ao final, você receberá uma recomendação personalizada, adaptada às metas e desafios únicos do seu negócio, podendo ser uma combinação perfeita de um, dois ou todos os três módulos de CRM mencionados.</h4>
                        </TextReader>

                            <TextReader text="Formulário de DESCOBERTA">
                                <Link rel="noopener noreferrer" href="/FormDescoberta" className="px-8 py-3 text-sm md:text-lg font-sen border rounded dark:border-white text-center bg-segunda text-white uppercase">DESCOBERTA</Link>
                            </TextReader>

                    </div>
                </div>

            </div>

            <div className="font-manrope h-[100vh] text-center text-6xl bg-gray-100">

                <TextReader text="Bloco de produtos">
                <h1 className="pt-20">Bloco de produtos</h1>
                </TextReader>
                
            </div>

        </div>

    );
}