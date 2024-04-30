/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'

/* Importar UseState*/
import { useState } from 'react'

/* Importação do LINK para direcionar para outra página */
import Link from 'next/link';
import Image from 'next/image'

/* Importação de componentes */
import { enviarDadosParaJava } from './api/api';


export default function Contact() {

    /* Ao preencher o formulário de cadastro, será baixado o arquivo para manipulação em Python */

    const [InformacoesFormulario, setInformacoesFormulario ] = useState({
        nome: '',
        email:'',
        telefone:'',
        tamanho:'',
        segmento:'',
        produto:'',
        cargo:'',
        mensagem:'',

    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setInformacoesFormulario({
            ...InformacoesFormulario,
            [name]: value
        });
    };

    /* Para salvar as informações em csv */
    const saveDataToCSV = (InformacoesFormulario: any) => {
        
        /* Verificar as informações antes de baixar */
        console.log(InformacoesFormulario);
    
        const csvContent = "Nome,Sobrenome,Email,Telefone,Senha,ConfirmacaoSenha,Genero,Empresa\n" +
            `${InformacoesFormulario.nome},${InformacoesFormulario.telefone},${InformacoesFormulario.email},${InformacoesFormulario.tamanho},${InformacoesFormulario.segmento},${InformacoesFormulario.produto},${InformacoesFormulario.cargo},${InformacoesFormulario.mensagem}\n`;
        
        const link = document.createElement('a');
        link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
        link.download = 'form_data.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    const handleSubmit = (e:any) => {
        e.preventDefault();

        /* Chama a função para salvar os dados em CSV*/
        saveDataToCSV(InformacoesFormulario);

        // Primeiro, converte o objeto InformacoesFormulario para uma string JSON pois vou enviar para o LocalStorage
        const dadosFormularioJson = JSON.stringify(InformacoesFormulario);

        // Em seguida, salva essa string no localStorage com a chave 'InformacoesFormulario'
        localStorage.setItem('InformacoesFormulario', dadosFormularioJson);

        // Enviar os dados para o Java
        enviarDadosParaJava(InformacoesFormulario);
    };

    // Enviar os dados para o LocalStorage

    return (

        <div className="flex justify-start dark:bg-gray-700 w-full min-h-[70vh]">
            
            <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center bg-segunda">

                <div>
                    <Image src="/assets/Contact/formulario-contato.png" alt="Imagem para compor a página de cadastro" width={500} height={200} />
                </div>

            </div>
            
            <div className='bg-white dark:bg-gray-700 w-full p-6'>
                
                <form className='flex flex-col justify-center gap-5' action="#" onSubmit={handleSubmit}>
                    
                    <div className="flex justify-between items-center">
                        
                        <div className=" text-[#667085] w-full font-sen text-4xl h-20 flex justify-start items-center dark:text-white">
                            <h1>Contato</h1>
                        </div> 

                        <div className="hidden md:flex self-center px-8 py-3 font-sen text-2xl rounded bg-segunda dark:bg-[#3EA0E7] dark:text-white text-white">

                            <Link href="/Login">
                                <button>Entrar</button>
                            </Link>

                        </div> 

                    </div> 
                    
                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
                        
                        <div className="flex flex-col gap-3">
                            
                            <label htmlFor="nome_contato" className="font-sen text-xl text-[#667085] dark:text-white">Nome</label>

                            <input id="nome_contato" type="text" name="nome" placeholder="Digite seu nome" required value={InformacoesFormulario.nome} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                        <div className="flex flex-col gap-3">
                            
                            <label htmlFor="email_contato" className="font-sen text-xl text-[#667085] dark:text-white">E-mail</label>

                            <input id="email_contato" type="mail" name="email" placeholder="seuemail@gmail.com" required value={InformacoesFormulario.email} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                        <div className="flex flex-col gap-3">
                            
                            <label htmlFor="telefone_contato" className="font-sen text-xl text-[#667085] dark:text-white">Telefone</label>

                            <input id="telefone_contato" type="number" name="telefone" placeholder="(xx) xxxxx-xxxx" required value={InformacoesFormulario.telefone} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                        <div className="flex flex-col gap-3">
                           
                            <label htmlFor="segmento_contato" className="font-sen text-xl text-[#667085] dark:text-white">Segmento</label>

                            <input id="segmento_contato" type="text" name="segmento" placeholder="Segmento da empresa" required value={InformacoesFormulario.segmento} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100' />

                        </div> 


                        <div className="flex flex-col gap-3">
                            
                            <label htmlFor="cargo_contato" className="font-sen text-xl text-[#667085] dark:text-white">Cargo</label>

                            <input id="cargo_contato" type="text" name="cargo" placeholder="Digite seu cargo" required value={InformacoesFormulario.cargo} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                       

                    </div> 

                    <div className="grid md:flex md:flex-col md:justify-start">
                        
                        <div className="font-sen text-2xl mb-5">
                            <h6>Tamanho da empresa</h6>
                        </div>

                        <div className="grid md:flex justify-start gap-5 text-xl font-sen mb-10">
                            
                            <div className="flex gap-3">

                                <input id="tamanho_empresa_pequena" type="radio" name="tamanho" value="pequena" onChange={handleChange} />

                                <label htmlFor="tamanho_empresa_pequena">Pequena</label>

                            </div> 

                            <div className="flex gap-3">

                                <input id="tamanho_empresa_media" type="radio" name="tamanho" value="media" onChange={handleChange} />

                                <label htmlFor="tamanho_empresa_media">Média</label>

                            </div>

                            <div className="flex gap-3">
                                
                                <input id="tamanho_empresa_grande" type="radio" name="tamanho" value="grande" onChange={handleChange} />

                                <label htmlFor="outros">Grande</label>

                            </div> 

                            <div className="flex gap-3">
                                
                                <input id="tamanho_empresa_multiNacional" type="radio" name="tamanho" value="multi_nacional" onChange={handleChange} />

                                <label htmlFor="semDefinicao">Multi nacional</label>

                            </div>

                        </div> 

                    </div>

                    <div className="grid md:flex md:flex-col justify-start">
                        
                        <div className="font-sen text-2xl mb-5">
                            <h6>Produtos</h6>
                        </div>

                        <div className="grid md:flex justify-start gap-5 text-xl font-sen mb-10">

                            <div className="flex gap-3">

                                <input id="produto_atendimento" type="radio" name="produto" value="atendimento" onChange={handleChange} />

                                <label htmlFor="produto_atendimento">Atendimento</label>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_cloud" type="radio" name="produto" value="cloud" onChange={handleChange} />

                                <label htmlFor="produto_cloud">Cloud</label>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_slack" type="radio" name="produto" value="slack" onChange={handleChange} />

                                <label htmlFor="produto_slack">Slack</label>

                            </div>

                            <div className="flex gap-3">

                                <input id="produto_eintein" type="radio" name="produto" value="einsteins" onChange={handleChange} />

                                <label htmlFor="produto_eintein">Einstein</label>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_vendas" type="radio" name="produto" value="vendas" onChange={handleChange} />

                                <label htmlFor="produto_vendas">Vendas</label>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_marketing" type="radio" name="produto" value="marketing" onChange={handleChange} />

                                <label htmlFor="produto_marketing">Marketing</label>

                            </div> 


                        </div> {/* Fim da div empresa-group */}

                    </div>

                    <div className="mx-auto w-full mb-10">

                    <div className="font-sen text-2xl mb-5">
                            <h6>Sua mensagem</h6>
                        </div>

                        <div>

                            <textarea 
                            name='mensagem' 
                            id="mensagem" 
                            rows={4} 
                            value={InformacoesFormulario.mensagem}
                            onChange={handleChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                            placeholder="Deixe seu comentário aqui..."></textarea>
                        </div>
                        
                    </div>

                    <div className="flex justify-center items-center px-8 py-3 font-sen text-2xl rounded bg-segunda dark:bg-[#3EA0E7] dark:text-white text-white text-center">

                        <button className='flexs justify-center items-center' type="submit">Enviar</button>

                    </div>

                </form>
                
            </div> 

        </div> 
    );
}
