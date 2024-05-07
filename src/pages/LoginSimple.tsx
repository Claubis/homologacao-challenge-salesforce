
/* Importações gerais */
import Link from "next/link";
import Image from "next/image";

/* Importações de componentes */
import { signIn } from "next-auth/react";
import TextReader from "@/components/TextReader";

export default function LoginSimple(){

    return(

        <div className="grid grid-col md:flex items-center mx-auto min-h-[80vh] dark:bg-gray-700 dark:text-white">

            <div className="flex w-full bg-gray-100">

                <div className="flex flex-col justify-center">
                    
                    <div className="flex flex-col gap-5 p-6 md:p-10 h-[70vh]">

                        <TextReader text="Conecte-se com facilidade usando sua CONTA do GOOGLE, GITHUB ou LINKEDIN<">
                            <h1 className="font-bold text-xl uppercase">Conecte-se com facilidade usando sua CONTA do GOOGLE, GITHUB ou LINKEDIN</h1>
                        </TextReader>

                        <TextReader text=">Acesso rápido, seguro e sem complicações ao nosso site! Agora, você pode usar sua conta do Google para se conectar instantaneamente, sem a necessidade de criar uma nova conta. Siga estes passos simples e comece sua experiência conosco agora mesmo:">
                            <h2 className="font-manrope text-sm">Acesso rápido, seguro e sem complicações ao nosso site! Agora, você pode usar sua conta do Google para se conectar instantaneamente, sem a necessidade de criar uma nova conta. Siga estes passos simples e comece sua experiência conosco agora mesmo:</h2>
                        </TextReader>

                        <TextReader text="Clique no Botão Conectar com o Google Encontre e clique no botão Conectar com o Google na nossa página de login ou de inscrição.">
                            <p className="font-manrope text-sm">Clique no Botão "Conectar com o Google": Encontre e clique no botão "Conectar com o Google" na nossa página de login ou de inscrição.</p>
                        </TextReader>

                        <TextReader text="1. Selecione Sua Conta do Google: Uma nova janela será aberta pedindo que você escolha a conta do Google que deseja usar. Se você já estiver conectado ao Google em seu navegador, apenas selecione a conta desejada. Caso contrário, faça login com suas credenciais do Google.">
                        <p className="font-manrope text-sm">1. Selecione Sua Conta do Google: Uma nova janela será aberta pedindo que você escolha a conta do Google que deseja usar. Se você já estiver conectado ao Google em seu navegador, apenas selecione a conta desejada. Caso contrário, faça login com suas credenciais do Google.</p>
                        </TextReader>

                        <TextReader text="2. Permissão de Acesso: Permita que nosso site acesse suas informações básicas do Google, como seu nome e endereço de email. Fique tranquilo, sua privacidade é nossa prioridade, e apenas usaremos essas informações para simplificar o processo de login.">
                        <p className="font-manrope text-sm">2. Permissão de Acesso: Permita que nosso site acesse suas informações básicas do Google, como seu nome e endereço de email. Fique tranquilo, sua privacidade é nossa prioridade, e apenas usaremos essas informações para simplificar o processo de login.</p>
                        </TextReader>

                        <TextReader text=">Pronto!: Após conceder a permissão, você será automaticamente redirecionado de volta ao nosso site, agora conectado e pronto para explorar todos os recursos disponíveis.">
                        <p className="font-manrope text-sm">Pronto!: Após conceder a permissão, você será automaticamente redirecionado de volta ao nosso site, agora conectado e pronto para explorar todos os recursos disponíveis.</p>
                        </TextReader>

                    </div>

                </div>

            </div>

            <div className="flex flex-col justify-center items-center w-full md:[30%] gap-6 border bg-gray-50 h-[70vh]">

                    <TextReader text="Acesse agora">
                        <h2 className="mb-3 text-2xl md:text-5xl font-sen text-center text-black uppe">Acesse agora</h2>
                    </TextReader>
                    

                    <div className="my-6 space-y-4">

                    <button onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/ProtectedPage' })} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-white focus:dark:ring-[#3EA0E7] hover:bg-[#3BA3B9]">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z "></path>
                        </svg>

                        <TextReader text="Acesse com Google">
                            <p className="text-black font-sen text-xl">Acesse com Google</p>
                        </TextReader>
                    </button>

                    <button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-white focus:dark:ring-[#3EA0E7]] hover:bg-[#3BA3B9]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>

                        <TextReader text=">Acesse com GitHub">
                            <p className="text-black font-sen text-xl">Acesse com GitHub</p>
                        </TextReader>
                    </button>

                    
                    </div>

                    <div className="p-4 flex flex-col justify-center gap-5">
                        
                        <TextReader text="Não possui conta?">
                            <p className="text-md text-center dark:text-white  font-manrope text-black">Não possui conta?</p>
                        </TextReader>
                            
                        <Link href="/Cadastro"><button className="self-center py-3 font-sen rounded bg-segunda dark:bg-[#3EA0E7] dark:text-gray-50 text-white text-xl hover:bg-primeira w-full p-14 space-x-4">Cadastre-se</button></Link>

                    </div>
            </div>

        </div>

       
    );
}