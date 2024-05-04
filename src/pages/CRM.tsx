
/*Importações gerais */
import Image from "next/image";
import Link from "next/link";

/* Importação de componente */
import TextReader from "../components/TextReader";

export default function CRM(){
    return(
        
        <div className="dark:bg-gray-100 dark:text-gray-900">
            
            <div className="container grid grid-cols-12 mx-auto bg-gray-50">
                
                <div className="flex flex-col justify-center items-center mt-20 col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto" >
                
                    <div>

                        <Image src="/assets/Details/imagem2.png" alt="Imagem ilustrativa" width={500} height={0}>
                        </Image>

                    </div>

                    <div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-800">
                        
                        <TextReader text="Entendendo o CRM.">
                        <h1 className="py-4 text-5xl font-bold">Entendendo o CRM.</h1>
                        </TextReader>
                        
                        <TextReader text="O Coração do Sucesso do Cliente">
                        <p className="pb-6">O Coração do Sucesso do Cliente</p>
                        </TextReader>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                    
                    <div className="pt-6 pb-4 space-y-2 flex flex-col gap-5">
                        
                        <TextReader text="O que é CRM?">
                        <h1 className="text-4xl font-bold">O que é CRM?</h1>
                        </TextReader>

                        <TextReader text="CRM, abreviação de Customer Relationship Management (Gestão de Relacionamento com o Cliente), é uma tecnologia para gerenciar todas as interações e relacionamentos da sua empresa com clientes e potenciais clientes. O objetivo é simples: melhorar os relacionamentos comerciais. Um sistema de CRM ajuda empresas a se manterem conectadas a clientes, otimizar processos e aumentar a lucratividade.">
                        <p className="font-manrope text-xl leading-8">CRM, abreviação de Customer Relationship Management (Gestão de Relacionamento com o Cliente), é uma tecnologia para gerenciar todas as interações e relacionamentos da sua empresa com clientes e potenciais clientes. O objetivo é simples: melhorar os relacionamentos comerciais. Um sistema de CRM ajuda empresas a se manterem conectadas a clientes, otimizar processos e aumentar a lucratividade.</p>
                        </TextReader>
                        
                        <Link rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                            
                        <TextReader text="Aprenda mais">
                            <span>Aprenda mais</span>
                            </TextReader>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>

                    </div>

                    <div className="pt-6 pb-4 space-y-2 flex flex-col gap-5">
                        
                        <TextReader text="Por que o CRM é importante?">
                        <h1 className="text-4xl font-bold">Por que o CRM é importante?</h1>
                        </TextReader>
                        
                        <TextReader text=">Numa era onde a conexão com o cliente é o núcleo do sucesso de todo negócio, ter uma estratégia robusta de CRM não é apenas desejável, mas essencial. Vejamos o porquê:">
                        <p className="font-manrope text-xl leading-8">Numa era onde a conexão com o cliente é o núcleo do sucesso de todo negócio, ter uma estratégia robusta de CRM não é apenas desejável, mas essencial. Vejamos o porquê:</p>
                        </TextReader>

                        <TextReader text="Visão 360 Graus do Cliente: O CRM oferece uma visão completa e unificada de cada cliente, coletando dados de diversas fontes como site, e-mails, chamadas e redes sociais. Isso permite que você entenda profundamente as necessidades, histórico e comportamento do cliente, permitindo uma abordagem mais personalizada.">
                        <p className="font-manrope text-xl leading-8">Visão 360 Graus do Cliente: O CRM oferece uma visão completa e unificada de cada cliente, coletando dados de diversas fontes como site, e-mails, chamadas e redes sociais. Isso permite que você entenda profundamente as necessidades, histórico e comportamento do cliente, permitindo uma abordagem mais personalizada.</p>
                        </TextReader>

                        <Link rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                        
                        <TextReader text="Aprenda mais">
                            <span>Aprenda mais</span>
                            </TextReader>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>

                
                </div>

            </div>

            <div className="p-6 py-12 bg-gray-300">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        
                        <TextReader text="CRM">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">CRM
                        </h2>
                        </TextReader>

                        <div className="space-x-2 text-center py-2 lg:py-0 text-xl">

                        <TextReader text="Importante para você e para o seu negócio!">
                            <span>Importante para você e para o seu negócio!</span>
                            </TextReader>
                            
                        </div>

                        <TextReader text="Contato agora">
                        <Link href="/Contact" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 ">Contato agora</Link>
                        </TextReader>

                    </div>
                </div>
            </div>

            <div className="container grid grid-cols-12 mx-auto bg-gray-50">
                
                
                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                    
                    <div className="pt-6 pb-4 space-y-2 flex flex-col gap-5">
                        
                        <TextReader text="Tipos de CRM">
                        <h1 className="text-4xl font-bold">Tipos de CRM</h1>
                        </TextReader>

                        <TextReader text="CRM Operacional:</strong> Centrado na automação e melhoria dos processos de negócios, como vendas, marketing e serviço ao cliente.">
                        <p className="font-manrope text-xl leading-8"><strong>CRM Operacional:</strong> Centrado na automação e melhoria dos processos de negócios, como vendas, marketing e serviço ao cliente.</p>
                        </TextReader>

                        <TextReader text=">CRM Analítico: Focado na análise de dados do cliente para entender comportamentos, segmentar públicos e personalizar as ofertas.">
                        <p className="font-manrope text-xl leading-8"><strong>CRM Analítico</strong>Focado na análise de dados do cliente para entender comportamentos, segmentar públicos e personalizar as ofertas.</p>
                        </TextReader>

                        <TextReader text="CRM Colaborativo: Visa melhorar a comunicação e colaboração entre equipes e com os clientes, integrando-se a sistemas de comunicação externos.">
                        <p className="font-manrope text-xl leading-8"><strong>CRM Colaborativo: </strong>Visa melhorar a comunicação e colaboração entre equipes e com os clientes, integrando-se a sistemas de comunicação externos.</p>
                        </TextReader>


                    </div>

                    <div className="pt-6 pb-4 space-y-2 flex flex-col gap-5">
                        
                        <TextReader text="Escolhendo o CRM Certo para o Seu Negócio">
                        <h1 className="text-4xl font-bold">Escolhendo o CRM Certo para o Seu Negócio</h1>
                        </TextReader>
                        
                        <TextReader text=">A seleção de um sistema de CRM deve ser guiada pelas necessidades específicas do seu negócio, objetivos de longo prazo e capacidade de integração com outras ferramentas que você já usa. Não existe uma solução única que atenda a todos; a chave é encontrar uma plataforma que seja escalável, intuitiva e, acima de tudo, alinhada com a sua estratégia de relacionamento com o cliente.">
                        <p className="font-manrope text-xl leading-8">A seleção de um sistema de CRM deve ser guiada pelas necessidades específicas do seu negócio, objetivos de longo prazo e capacidade de integração com outras ferramentas que você já usa. Não existe uma solução única que atenda a todos; a chave é encontrar uma plataforma que seja escalável, intuitiva e, acima de tudo, alinhada com a sua estratégia de relacionamento com o cliente.</p>
                        </TextReader>


                    </div>

                
                </div>

                <div className="flex flex-col justify-center items-center mt-20 col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto" >
                
                    <div>

                        <Image src="/assets/Details/imagem4.png" alt="Imagem ilustrativa" width={500} height={0}>
                        </Image>

                    </div>

                    <div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-800">
                        
                        <TextReader text="CRM é o coração do sucesso do cliente">
                        <h1 className="py-4 text-5xl font-bold">CRM é o coração do sucesso do cliente</h1>
                        </TextReader>
                        
                    </div>
                </div>
                
            </div>

            <div className="p-6 py-12 bg-gray-300">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        
                        <TextReader text="Dúvida?">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Dúvida?
                        </h2>
                        </TextReader>

                        <div className="space-x-2 text-center py-2 lg:py-0">

                            <TextReader text="Preencha nosso formulário de DESCOBERTA e saiba quais os melhores produtos para o seu negócio">
                            <span>Preencha nosso formulário de DESCOBERTA e saiba quais os melhores produtos para o seu negócio</span>
                            </TextReader>
                            
                        </div>

                        <TextReader text="Formulário de Descoberta">
                        <Link href="/FormDescoberta" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600">Formulário de Descoberta</Link>
                        </TextReader>
                        
                    </div>
                </div>
            </div>

            <section className="py-6 bg-gray-50">
                
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                    
                    <TextReader text="Não fique na dúvida...">
                    <h1 className="text-5xl font-bold leading-none text-center">Não fique na dúvida...</h1>
                    </TextReader>
                    
                    <TextReader text="Investir em um sistema de CRM não é apenas investir em um software, mas em uma estratégia centrada no cliente que pode transformar a maneira como você faz negócios. Ao escolher a ferramenta certa e utilizá-la ao máximo, você pode criar experiências memoráveis para seus clientes, construir relacionamentos duradouros e impulsionar o sucesso do seu negócio.">
                    <p className="pt-2 pb-8 text-xl font-medium text-start">Investir em um sistema de CRM não é apenas investir em um software, mas em uma estratégia centrada no cliente que pode transformar a maneira como você faz negócios. Ao escolher a ferramenta certa e utilizá-la ao máximo, você pode criar experiências memoráveis para seus clientes, construir relacionamentos duradouros e impulsionar o sucesso do seu negócio.</p>
                    </TextReader>
                    

                </div>
            </section>
            

        </div>
    );
}