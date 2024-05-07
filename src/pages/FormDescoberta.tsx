/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'

/* Importar UseState*/
import { useState } from 'react'

/* Importações para renderizar as imagens */
import Image from 'next/image'

/* Importação dos componentes */
import TextReader from "../components/TextReader";

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

        <div className="grid grid-col lg:flex justify-start items-start dark:bg-gray-700 dark:text-white min-h-[100vh] lg:p-10">
            
            <div className="flex flex-col gap-10 mb-10 md:mb-0 lg:max-w-xl p-10 items-center">

                <div className=" flex flex-col gap-5">
                    
                    <TextReader text=">Dê o próximo passo">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl uppercase">Dê o próximo passo</h2>
                    </TextReader>
                    
                    <TextReader text="Para descobrir quais soluções podem catapultar sua empresa para o próximo nível, convidamos você a preencher nosso formulário de descoberta. Ao final, você receberá uma recomendação personalizada, adaptada às metas e desafios únicos do seu negócio, podendo ser uma combinação perfeita de um, dois ou todos os três módulos de CRM mencionados.">
                        <p className="dark:text-white font-manrope text-lg md:text-xl leading-10 ">Para descobrir quais soluções podem catapultar sua empresa para o próximo nível, convidamos você a preencher nosso formulário de descoberta. Ao final, você receberá uma recomendação personalizada, adaptada às metas e desafios únicos do seu negócio, podendo ser uma combinação perfeita de um, dois ou todos os três módulos de CRM mencionados.</p>
                    </TextReader>

                    <TextReader text="Não perca esta oportunidade de aprimorar seu relacionamento com clientes e impulsionar o crescimento do seu negócio. Preencha o formulário agora e comece sua jornada para uma gestão de relacionamento com clientes sem precedentes.">
                        <p className="dark:text-white font-manrope text-lg md:text-xl leading-10">Não perca esta oportunidade de aprimorar seu relacionamento com clientes e impulsionar o crescimento do seu negócio. Preencha o formulário agora e comece sua jornada para uma gestão de relacionamento com clientes sem precedentes.</p>
                    </TextReader>

                </div>

                <div>
                    <Image src="/assets/Details/imagem4.png" alt="Imagem sobre contato" width={300} height={500}/>
                </div>

            </div>
            
            <div className='bg-white dark:bg-gray-700 w-full p-5'>
                
                <form className='bg-gray-100 p-5 rounded' action="#" onSubmit={handleSubmit}>
                    
                    <div className="flex justify-between items-cente mb-10">
                        
                        <div className="font-bold text-4xl flex justify-start items-center dark:text-white uppercase mt-10">

                            <TextReader text="Formulário de Descoberta">
                                <h1>Formulário de Descoberta</h1>
                            </TextReader>

                        </div> 


                    </div> 
                    
                    <div className="flex flex-col md:grid md:grid-cols-3 justify-center gap-10 mb-10">
                        
                        <div className="flex flex-col gap-3">
                            
                            <TextReader text="Nome">
                                <label htmlFor="nome_que" className="font-manrope text-xl text-[#667085] dark:text-white">Nome</label>
                            </TextReader>

                            <input id="nome_que" type="text" name="nome_que" placeholder="Digite seu nome" required value={InformacoesFormulario.nome_ques} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                        <div className="flex flex-col gap-3">
                            
                            <TextReader text="E-mail">
                                <label htmlFor="email-ques" className="font-manrope text-xl text-[#667085] dark:text-white">E-mail</label>
                            </TextReader>


                            <input id="email-ques" type="mail" name="email-ques" placeholder="seuemail@gmail.com" required value={InformacoesFormulario.email_ques} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                        <div className="flex flex-col gap-3">
                            
                            <TextReader text="Telefone">
                                <label htmlFor="telefone_ques" className="font-manrope text-xl text-[#667085] dark:text-white">Telefone</label>
                            </TextReader>


                            <input id="telefone_ques" type="number" name="telefone_ques" placeholder="(xx) xxxxx-xxxx" required value={InformacoesFormulario.telefone_ques} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                        <div className="flex flex-col gap-3">
                           
                            <TextReader text="Segmento">
                                <label htmlFor="segmento_ques" className="font-manrope text-xl text-[#667085] dark:text-white">Segmento</label>
                            </TextReader>


                            <input id="segmento_ques" type="text" name="segmento_ques" placeholder="Segmento da empresa" required value={InformacoesFormulario.segmento_ques} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100' />

                        </div> 


                        <div className="flex flex-col gap-3">
                            
                            <TextReader text="Nome da empresa">
                                <label htmlFor="empresa_ques" className="font-manrope text-xl text-[#667085] dark:text-white">Nome da empresa</label>
                            </TextReader>


                            <input id="empresa_ques" type="text" name="empresa_ques" placeholder="Nome da sua empresa" required value={InformacoesFormulario.empresa_ques} onChange={handleChange} className='p-3 font-sen text-md rounded-sm bg-slate-100'/>

                        </div> 

                       

                    </div> 

                    <div className="flex flex-col justify-start">
                        
                        <div className="font-bold text-2xl mb-5 text-[#667085]">

                            <TextReader text="Conhecimento sobre os produtos?">
                                <h6>Conhecimento sobre os produtos?</h6>
                            </TextReader>

                        </div>

                        <div className="flex justify-start gap-5 text-xl font-manrope mb-10 text-[#667085]">
                            
                            <div className="flex gap-3">

                                <input id="sim-ques" type="radio" name="sim-ques" value="sim-ques" onChange={handleChange} />
                                <TextReader text="Sim">
                                    <label htmlFor="sim-ques">Sim</label>
                                </TextReader>

                            </div> 

                            <div className="flex gap-3">

                                <input id="nao-ques" type="radio" name="nao-ques" value="nao-ques" onChange={handleChange} />

                                <TextReader text="Não">
                                    <label htmlFor="nao-ques">Não</label>
                                </TextReader>

                            </div>


                        </div> 

                    </div>

                    <div className="flex flex-col justify-start text-[#667085]">
                        
                        <div className="font-bold text-2xl mb-5">

                            <TextReader text="Produtos">
                                <h6>Produtos</h6>
                            </TextReader>

                        </div>

                        <div className="text-xl font-manrope flex flex-col gap-3">

                            <div className="flex gap-3">

                                <input id="produto_atendimento" type="radio" name="produto_atendimento" value="produto_atendimento" onChange={handleChange} />

                                <TextReader text="Atendimento">
                                    <label htmlFor="produto_atendimento">Atendimento</label>
                                </TextReader>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_cloud" type="radio" name="produto_cloud" value="produto_cloud" onChange={handleChange} />

                                <TextReader text="Cloud">
                                    <label htmlFor="produto_cloud">Cloud</label>
                                </TextReader>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_slack" type="radio" name="produto_slack" value="produto_slack" onChange={handleChange} />

                                <TextReader text="Slack">
                                    <label htmlFor="produto_slack">Slack</label>
                                </TextReader>

                            </div>

                            <div className="flex gap-3">

                                <input id="produto_eintein" type="radio" name="produto_eintein" value="produto_eintein" onChange={handleChange} />

                                <TextReader text="Einstein">
                                    <label htmlFor="produto_eintein">Einstein</label>
                                </TextReader>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_vendas" type="radio" name="produto_vendas" value="produto_vendas" onChange={handleChange} />

                                <TextReader text="Vendas">
                                    <label htmlFor="produto_vendas">Vendas</label>
                                </TextReader>

                            </div> 

                            <div className="flex gap-3">

                                <input id="produto_marketing" type="radio" name="produto_marketing" value="produto_marketing" onChange={handleChange} />

                                <TextReader text="Marketing">
                                    <label htmlFor="produto_marketing">Marketing</label>
                                </TextReader>

                            </div> 

                        
                        </div> {/* Fim da div empresa-group */}

                        <div className="flex flex-col gap-3 pt-5 md:mt-0">
                            
                            <TextReader text="Necessidade da empresa">
                                <label htmlFor="necessidade_empresa_ques" className="font-bold text-xl text-[#667085] dark:text-white">Necessidade da empresa</label>
                            </TextReader>

                            <textarea 
                            name="necessidade_empresa_ques" id="necessidade_empresa_ques" 
                            placeholder="Comente aqui sua necessidade" 
                            value={InformacoesFormulario.empresa_ques} 
                            onChange={handleChange} 
                            className='p-3 font-sen text-md rounded-sm mb-10 bg-white'
                            >
                            </textarea>

                        </div> 

                    </div>

                    <div className="flex justify-center items-center px-8 py-3 font-sen text-2xl rounded bg-segunda dark:bg-[#3EA0E7] dark:text-white text-white text-center w-full">

                        <TextReader text="Enviar">
                            <button type="submit">Enviar</button>
                        </TextReader>
                    </div>

                </form>

            </div> 

        </div> 
    );
}
