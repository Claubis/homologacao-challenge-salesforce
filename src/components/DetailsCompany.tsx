
import Image from "next/image";
import Link from "next/link";

export default function DetailsCompany(){

    return(

        <section className="dark:bg-gray-700 dark:text-white bg-gray-200">

            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

                <div className="flex items-center justify-center">

                    <Image src="/assets/Details/imagem.png" alt="Imagem com foco nos produtos 360" className="object-contain" width={900} height={500}/>

                </div>

                <div className="flex flex-col justify-center p-0 md:p-6 text-center rounded-sm lg:max-w-md xl:max-w-4xl lg:text-left">

                    <h1 className="text-2xl md:text-6xl font-manrope leading-8 md:leading-none text-start mt-10 md:mt-0">Transformando a maneira como você conecta com clientes
                    </h1>

                    <p className="mt-6 mb-8 text-xl md:text-2xl text-manrope sm:mb-12 leading-8 md:leading-10 text-start">Bem-vindo ao mundo da Salesforce, a plataforma líder de gerenciamento de relacionamento com clientes (CRM) projetada para revolucionar a forma como as empresas se conectam com seus clientes. Em um ambiente de negócios cada vez mais digital e centrado no cliente, a Salesforce se destaca como uma solução inovadora que oferece ferramentas personalizáveis para atender às necessidades únicas de cada negócio.
                    </p>

                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        
                        <Link rel="noopener noreferrer" href="/Product" className="px-8 py-3 text-xl font-sen rounded dark:bg-segunda dark:text-gray-50 bg-segunda text-white">Produtos</Link>
                        
                        <Link rel="noopener noreferrer" href="/Contact" className="px-8 py-3 text-xl font-sen border rounded dark:border-white bg-white text-[#3EA0E7]">Contato</Link>
                    </div>

                </div>

            </div>
        </section>
    );
}