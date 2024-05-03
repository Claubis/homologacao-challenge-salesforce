
import Link from "next/link";
import Image from "next/image";

export default function AboutForms(){

    return(
        <section className="p-4 lg:p-8 dark:bg-gray-700 dark:text-white bg-gray-200">
            
            <div className="font-manrope text-4xl md:text-5xl mt-20 mb-20 text-start md:text-center">
                <h1>Saiba sobre nossos serviços e meios de contatos</h1>
            </div>

            <div className="container mx-auto space-y-12">
                
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">

                    <div className="flex justify-center items-center">
                    
                        <Image src="/assets/FormDescoberta/Imagem1.png" alt="Imagem contendo um formulário" width={500} height={500} />

                    </div>

                    <div className="flex flex-col justify-center flex-1 p-6 ">
                        
                        <span className="text-xs uppercase ">Formulário de Descoberta</span>
                        
                        <h3 className="text-3xl font-bold">Descubra as soluções de CRM ideais para sua empresa</h3>
                        
                        <p className="my-6 font-manrope leading-8 text-xl">Compreender as nuances do CRM é apenas o começo. A verdadeira transformação ocorre quando você aplica esses insights de maneira estratégica em sua organização. Cada negócio é único, com suas próprias metas, desafios e oportunidades. Por isso, oferecemos uma consultoria personalizada para ajudá-lo a identificar os módulos e produtos de CRM que melhor se adaptam às necessidades específicas da sua empresa.</p>

                        <p className="my-6 font-manrope leading-8 text-xl">Pode ser que você se beneficie do dinamismo do CRM Operacional para otimizar suas vendas e processos de marketing, ou talvez a inteligência do CRM Analítico para aprofundar sua compreensão sobre o comportamento do cliente. E não podemos esquecer do CRM Colaborativo, que pode revolucionar a maneira como sua equipe e seus clientes interagem.</p>
                        
                        <button type="button" className="self-start"><Link href="/FormDescoberta">Preencha agora</Link></button>

                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    
                    <Image src="/assets/FormDescoberta/Imagem5.png" alt="Imagem com um formulário de feedback" width={500} height={500}/>
                    
                    <div className="flex flex-col justify-center flex-1 p-6">
                        
                        <span className="text-xs uppercase ">Pesquisa de satisfação</span>
                        
                        <h3 className="text-3xl font-bold">Sua opinião é a chave para nosso crescimento contínuo</h3>
                        
                        <p className="my-6 font-manrope leading-8 text-xl">Em nossa jornada para oferecer as melhores soluções e serviços, seu feedback é mais do que valioso: é essencial. Acreditamos firmemente que o sucesso é um caminho construído em conjunto, onde sua experiência e insights desempenham um papel fundamental. Por isso, convidamos você a compartilhar suas impressões, sugestões e ideias através do nosso formulário de feedback.</p>

                        <p className="my-6 font-manrope leading-8 text-xl">Queremos ouvir o que você tem a dizer. Seja uma experiência que encantou você, um desafio que enfrentou ou uma ideia que acredita que poderia transformar nossa oferta, seu feedback é bem-vindo e altamente apreciado.</p>

                        <button type="button" className="self-start"><Link href="/FormFeedback">Responda agora</Link></button>

                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    
                    <Image src="/assets/FormDescoberta/Imagem2.png" alt="Imagem sobre um formulário de contato"  width={500} height={500} />
                    
                    <div className="flex flex-col justify-center flex-1 p-6 ">
                        
                        <span className="text-xs uppercase">Formulário de contato</span>
                        
                        <h3 className="text-3xl font-bold">Estamos ansiosos pelo seu contato</h3>
                        
                        <p className="my-6 font-manrope leading-8 text-xl">Ao adotar a Salesforce, sua empresa não está apenas escolhendo uma plataforma de CRM; está optando por uma parceria com a líder em inovação de relacionamento com o cliente. Independentemente do tamanho da sua empresa ou da complexidade dos seus requisitos de CRM, a Salesforce oferece a solução para colocar seus clientes no centro do seu negócio, impulsionando o crescimento e a eficiência.</p>

                        <p className="my-6 font-manrope leading-8 text-xl">Descubra como a Salesforce pode transformar o seu negócio. Explore nossas soluções e inicie hoje mesmo a sua jornada rumo à excelência no relacionamento com o cliente.</p>
                        
                        <button type="button" className="self-start"><Link href="/Contact">Entre em contato</Link></button>

                    </div>
                </div>
            </div>

        </section>
    );
}