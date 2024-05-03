/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'

/* Importar UseState*/
import { useState } from 'react'

/* Importação do LINK para direcionar para outra página */
import Link from 'next/link';

/* Importações para renderizar as imagens */
import Image from 'next/image'


export default function FormDescoberta() {

    /* Ao preencher o formulário de cadastro, será baixado o arquivo para manipulação em Python */

    const [InformacoesFormulario, setInformacoesFormulario ] = useState({
        nome_ques: '',
        email_ques:'',
        telefone_ques:'',
        empresa_ques:'',
        segmento_ques:'',
        conhecimento_salesforce_ques:'',
        necessidade_empresa_ques:'',
        produto_ques:''

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
            `${InformacoesFormulario.nome_ques},${InformacoesFormulario.telefone_ques},${InformacoesFormulario.email_ques},${InformacoesFormulario.empresa_ques},${InformacoesFormulario.segmento_ques},${InformacoesFormulario.conhecimento_salesforce_ques},${InformacoesFormulario.necessidade_empresa_ques},${InformacoesFormulario.produto_ques}\n`;
        
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
    };

    // Enviar os dados para o LocalStorage

    return (

        <div className="flex md:flex md:justify-center items-center dark:bg-gray-700 dark:text-white min-h-[100vh]">
            
            <div className="flex flex-col justify-center items-center w-[40%]">

                    <div className="space-y-2 flex flex-col leading-10 gap-5">
                        
                        <h2 className="text-4xl font-manrope leading-tight lg:text-5xl text-sen">Dê o próximo passo</h2>
                        
                        <p className="dark:text-white font-manrope text-">Para descobrir quais soluções podem catapultar sua empresa para o próximo nível, convidamos você a preencher nosso formulário de descoberta. Ao final, você receberá uma recomendação personalizada, adaptada às metas e desafios únicos do seu negócio, podendo ser uma combinação perfeita de um, dois ou todos os três módulos de CRM mencionados.</p>

                        <p className="dark:text-white font-manrope text-xl">Não perca esta oportunidade de aprimorar seu relacionamento com clientes e impulsionar o crescimento do seu negócio. Preencha o formulário agora e comece sua jornada para uma gestão de relacionamento com clientes sem precedentes.</p>

                    </div>

                    <Image src="/assets/FormDescoberta/imagem.png" alt="Imagem sobre contato" width={400} height={500}/>

            </div>
            
            <div className='bg-white p-10 dark:bg-gray-700 flex flex-col md:flex md:justify-center md:items-center'>
                
                <form className='flex flex-col bg-primeira p-5 rounded' action="#" onSubmit={handleSubmit}>
                    
                    <div className="flex justify-between items-cente mb-10">
                        
                        <div className=" text-[#667085] w-full font-sen text-4xl h-20 flex justify-start items-center dark:text-white">
                            <h1>Formulário de Descoberta</h1>
                        </div> 


                    </div> 
                    
                    <div className="flex flex-col md:grid md:grid-cols-3 justify-center gap-10 mb-10">
                        
                        <div className="flex flex-col gap-3">
                            
                            <label htmlFor="nome_que" className="font-sen text-xl text-[#667085] dark:text-white">Nome</label>
                            <input id="nome_que" type="text" name="nome_que" placeholder="Digite seu nome" required value={InformacoesFormulario.nome_ques} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                        <div className="flex flex-col gap-3">
                            
                            <label htmlFor="email-ques" className="font-sen text-xl text-[#667085] dark:text-white">E-mail</label>
                            <input id="email-ques" type="mail" name="email-ques" placeholder="seuemail@gmail.com" required value={InformacoesFormulario.email_ques} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                        <div className="flex flex-col gap-3">
                            
                            <label htmlFor="telefone_ques" className="font-sen text-xl text-[#667085] dark:text-white">Telefone</label>
                            <input id="telefone_ques" type="number" name="telefone_ques" placeholder="(xx) xxxxx-xxxx" required value={InformacoesFormulario.telefone_ques} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                        <div className="flex flex-col gap-3">
                           
                            <label htmlFor="segmento_ques" className="font-sen text-xl text-[#667085] dark:text-white">Segmento</label>
                            <input id="segmento_ques" type="text" name="segmento_ques" placeholder="Segmento da empresa" required value={InformacoesFormulario.segmento_ques} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100' />

                        </div> 


                        <div className="flex flex-col gap-3">
                            
                            <label htmlFor="empresa_ques" className="font-sen text-xl text-[#667085] dark:text-white">Nome da empresa</label>
                            <input id="empresa_ques" type="text" name="empresa_ques" placeholder="Nome da sua empresa" required value={InformacoesFormulario.empresa_ques} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                       

                    </div> 

                    <div className="flex flex-col justify-start">
                        
                        <div className="font-sen text-2xl mb-5 text-[#667085]">
                            <h6>Conhecimento sobre os produtos?</h6>
                        </div>

                        <div className="flex justify-start gap-5 text-xl font-sen mb-10 text-[#667085]">
                            
                            <div className="flex gap-3">

                                <input id="sim-ques" type="radio" name="sim-ques" value="sim-ques" onChange={handleChange} />
                                <label htmlFor="sim-ques">Sim</label>

                            </div> 

                            <div className="flex gap-3">

                                <input id="nao-ques" type="radio" name="nao-ques" value="nao-ques" onChange={handleChange} />
                                <label htmlFor="nao-ques">Não</label>

                            </div>


                        </div> 

                    </div>

                    <div className="flex flex-col justify-start text-[#667085]">
                        
                        <div className="font-sen text-2xl mb-5">
                            <h6>Produtos</h6>
                        </div>

                        <div className="flex justify-start gap-5 text-xl font-sen mb-10">

                            <div className="flex gap-3">

                                <input id="produto_atendimento" type="radio" name="produto_atendimento" value="produto_atendimento" onChange={handleChange} />
                                <label htmlFor="produto_atendimento">Atendimento</label>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_cloud" type="radio" name="produto_cloud" value="produto_cloud" onChange={handleChange} />
                                <label htmlFor="produto_cloud">Cloud</label>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_slack" type="radio" name="produto_slack" value="produto_slack" onChange={handleChange} />
                                <label htmlFor="produto_slack">Slack</label>

                            </div>

                            <div className="flex gap-3">

                                <input id="produto_eintein" type="radio" name="produto_eintein" value="produto_eintein" onChange={handleChange} />
                                <label htmlFor="produto_eintein">Einstein</label>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_vendas" type="radio" name="produto_vendas" value="produto_vendas" onChange={handleChange} />
                                <label htmlFor="produto_vendas">Vendas</label>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_marketing" type="radio" name="produto_marketing" value="produto_marketing" onChange={handleChange} />
                                <label htmlFor="produto_marketing">Marketing</label>

                            </div> 

                        
                        </div> {/* Fim da div empresa-group */}

                        <div className="flex flex-col gap-3">
                            
                            <label htmlFor="necessidade_empresa_ques" className="font-sen text-xl text-[#667085] dark:text-white">Necessidade da empresa</label>

                            <input id="necessidade_empresa_ques" type="text" name="necessidade_empresa_ques" placeholder="Comente aqui sua necessidade" required value={InformacoesFormulario.empresa_ques} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100 mb-20'/>

                        </div> 

                    </div>

                    <div className="flex justify-center items-center px-8 py-3 font-sen text-2xl rounded bg-segunda dark:bg-[#3EA0E7] dark:text-white text-white text-center w-full">
                        <button type="submit">Continuar</button>
                    </div>

                </form>

            </div> 

        </div> 
    );
}
