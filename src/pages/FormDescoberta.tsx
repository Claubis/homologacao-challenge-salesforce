/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'

/* Importar UseState*/
import { useState, useRef } from 'react'

/* Importações para renderizar as imagens */
import Image from 'next/image'

/* Importação dos componentes */
import TextReader from "../components/TextReader";

type FormDataChangeHandler = (name: string, value: string) => void;

export default function FormDescoberta() {

    const formRef = useRef<HTMLFormElement>(null); 

    // Estado para controlar a etapa atual do formulário
    const [currentStep, setCurrentStep] = useState(1);

    /* Ao preencher o formulário de cadastro, será baixado o arquivo para manipulação em Python */

    const [InformacoesFormulario, setInformacoesFormulario ] = useState({
        nome_ques: '',
        email_ques:'',
        telefone_ques:'',
        empresa_ques:'',
        segmento_ques:'',
        conhecimento_salesforce_ques:'',
        necessidade_empresa_ques:'',
        produto_ques:'',
        questao_estrategias_marketing:'',
        questao_ia_automacoes: '',
        questao_desenvolver_estrategia: '',
        questao_melhorar_comunicacao: '',
        questao_ambiente_integrado: '',
        questao_aumento_produtividade: '',
        questao_melhorar_capacitacao:'',
        questao_reducao_custo:'',
        questao_aumentar_conversao:'',
        questao_potencializar_vendas:'',
        questao_acelerar_vendas:'',
        questao_riqueza_dados:'',
        questao_melhorar_experiencia:'',
        questao_mostrar_diferencial:'',
        questao_criar_jornada:'',
        questao_marketing_oportunidade:''

    });

    const handleFormDataChange: FormDataChangeHandler = (name, value) => {
        setInformacoesFormulario(prevState => ({ ...prevState, [name]: value }));
      };

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
    
        const csvContent = "nome_ques,telefone_ques,email_ques,empresa_ques,segmento_ques,conhecimento_salesforce_ques,necessidade_empresa_ques,produto_ques,questao_estrategias_marketing,questao_ia_automacoes,questao_desenvolver_estrategia,questao_melhorar_comunicacao,questao_reducao_custo,questao_aumentar_conversao,questao_potencializar_vendas,questao_acelerar_vendas,questao_riqueza_dados,questao_melhorar_experiencia,questao_mostrar_diferencial,questao_criar_jornada,questao_marketing_oportunidade\n" +
            `${InformacoesFormulario.nome_ques},
                ${InformacoesFormulario.telefone_ques},
                ${InformacoesFormulario.email_ques},
                ${InformacoesFormulario.empresa_ques},
                ${InformacoesFormulario.segmento_ques},
                ${InformacoesFormulario.conhecimento_salesforce_ques},
                ${InformacoesFormulario.necessidade_empresa_ques},
                ${InformacoesFormulario.produto_ques},
                ${InformacoesFormulario.questao_estrategias_marketing},
                ${InformacoesFormulario.questao_ia_automacoes},
                ${InformacoesFormulario.questao_desenvolver_estrategia},
                ${InformacoesFormulario.questao_melhorar_comunicacao},
                ${InformacoesFormulario.questao_ambiente_integrado},
                ${InformacoesFormulario.questao_aumento_produtividade},
                ${InformacoesFormulario.questao_melhorar_capacitacao},
                ${InformacoesFormulario.questao_reducao_custo},
                ${InformacoesFormulario.questao_aumentar_conversao},
                ${InformacoesFormulario.questao_potencializar_vendas},
                ${InformacoesFormulario.questao_acelerar_vendas},
                ${InformacoesFormulario.questao_riqueza_dados},
                ${InformacoesFormulario.questao_melhorar_experiencia},
                ${InformacoesFormulario.questao_mostrar_diferencial},
                ${InformacoesFormulario.questao_criar_jornada},
                ${InformacoesFormulario.questao_marketing_oportunidade}, \n`;
        
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

        // Prevenir a submissão do formulário se não estiver na última etapa
        if (currentStep < 7) {
            
            nextStep();
    
        }else {
            console.log('Enviando o formulário...', InformacoesFormulario);
            if(formRef.current !== null){
                formRef.current.submit(); // Isso aciona o envio do formulário.
            }
        }
    };

    // Passar ou voltar etapas do formulário

    // Função para avançar para a próxima etapa
    const nextStep = () => {
        console.log(InformacoesFormulario);
        setCurrentStep(currentStep + 1);
    };

    // Função para voltar à etapa anterior
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // Renderiza a etapa atual do formulário
    const renderStep = () => {
        switch (currentStep) {
        case 1:
            return <PersonalInfo onChange={handleFormDataChange} />;
        case 2:
            return <CompanyInfo onChange={handleFormDataChange} />;
        case 3:
            return <ProductInfo onChange={handleFormDataChange} />;
        case 4:
            return <QuestInfoFirst onChange={handleFormDataChange} />;
        case 5:
            return <QuestInfoSecond onChange={handleFormDataChange} />;
        case 6:
            return <QuestInfoThird onChange={handleFormDataChange} />;
        case 7:
            return <QuestInfoFourth onChange={handleFormDataChange} />;
        default:
            return <PersonalInfo onChange={handleFormDataChange} />;
        }
    };

    return (

        <div className="grid grid-col lg:flex justify-start items-start dark:bg-gray-700 dark:text-white min-h-[100vh] md:min-h-[60vh]">
            
            <div className="flex flex-col gap-10 mb-10 md:mb-0 lg:max-w-xl p-6 items-center">

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
            
            <div className='dark:bg-gray-700 border border-blue-400 rounded-md min-h-[100vh] w-full'>
                
                <form 
                ref={formRef}
                name='form-descoberta' 
                method='post' 
                data-netlify="true" 
                onSubmit={handleSubmit} 
                className='grid md:flex justify-center items-center absolute'>
            
                <input type="hidden" name="form-name" value="form-descoberta" />
                <input type="hidden" name="nome_ques" value={InformacoesFormulario.nome_ques} />
                <input type="hidden" name="email_ques" value={InformacoesFormulario.email_ques} />
                <input type="hidden" name="telefone_ques" value={InformacoesFormulario.telefone_ques} />
                

                <input type="hidden" name="empresa_ques" value={InformacoesFormulario.empresa_ques} />
                <input type="hidden" name="segmento_ques" value={InformacoesFormulario.segmento_ques} />
                <input type="hidden" name="conhecimento_salesforce_ques" value={InformacoesFormulario.conhecimento_salesforce_ques} />
                <input type="hidden" name="necessidade_empresa_ques" value={InformacoesFormulario.necessidade_empresa_ques} />

                <input type="hidden" name="produto_ques" value={InformacoesFormulario.produto_ques} />

                <input type="hidden" name="questao_estrategias_marketing" value={InformacoesFormulario.questao_estrategias_marketing} />
                <input type="hidden" name="questao_ia_automacoes" value={InformacoesFormulario.questao_ia_automacoes} />
                <input type="hidden" name="questao_desenvolver_estrategia" value={InformacoesFormulario.questao_desenvolver_estrategia} />
                <input type="hidden" name="questao_melhorar_comunicacao" value={InformacoesFormulario.questao_melhorar_comunicacao} />
                <input type="hidden" name="questao_ambiente_integrado" value={InformacoesFormulario.questao_ambiente_integrado} />

                <input type="hidden" name="questao_ambiente_integrado" value={InformacoesFormulario.questao_aumento_produtividade} />
                <input type="hidden" name="questao_melhorar_capacitacao" value={InformacoesFormulario.questao_melhorar_capacitacao} />
                <input type="hidden" name="questao_reducao_custo" value={InformacoesFormulario.questao_reducao_custo} />
                <input type="hidden" name="questao_aumentar_conversao" value={InformacoesFormulario.questao_aumentar_conversao} />
                <input type="hidden" name="questao_potencializar_vendas" value={InformacoesFormulario.questao_potencializar_vendas} />
                
                <input type="hidden" name="questao_acelerar_vendas" value={InformacoesFormulario.questao_acelerar_vendas} />
                <input type="hidden" name="questao_riqueza_dados" value={InformacoesFormulario.questao_riqueza_dados} />
                <input type="hidden" name="questao_melhorar_experiencia" value={InformacoesFormulario.questao_melhorar_experiencia} />
                <input type="hidden" name="questao_mostrar_diferencial" value={InformacoesFormulario.questao_mostrar_diferencial} />
                <input type="hidden" name="questao_criar_jornada" value={InformacoesFormulario.questao_criar_jornada} />
                <input type="hidden" name="questao_marketing_oportunidade" value={InformacoesFormulario.questao_marketing_oportunidade} />
            
                <div className="bg-white rounded-xl h-[600px] md:h-[550px] p-10 order-2 md:order-1 mb-20 md:mb-0">
                
                {renderStep()}
                    <div className="flex justify-between">
                    {currentStep > 1 && (
                        <button type="button" onClick={prevStep} className="mt-4 bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
                        Voltar
                        </button>
                    )}
                    {currentStep < 7 && (
                        <button type="button" onClick={nextStep} className="mt-4 bg-[#064E8B] hover:bg-[#B3CEE5] text-white py-2 px-4 rounded">
                        Próximo
                        </button>
                    )}
                    {currentStep === 7 && (
                        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded" type='submit'>
                        Enviar
                        </button>
                    )}
                    </div>

                    
                </div>

                </form>

            </div> 

        </div> 
    );
}


interface PersonalInfoProps {
    onChange: FormDataChangeHandler;
  }

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onChange }) => {
  
// Formulário de informações pessoais
  return (
    
    <div className="mb-5">
                    
                    <h2 className="text- font-semibold leading- uppercase text-blue-900">Informações pessoais</h2>

                    <div className="mt-5 flex gap-x-1 gap-y-6  flex-col">
                    
                        <div className="sm:col-span-3">

                            <label htmlFor="nome_ques" className="block text-sm font-medium leading-6 text-gray-900">
                                Nome completo
                            </label>

                            <div className="mt-2">
                                
                                <input
                                type="text"
                                name="nome_ques"
                                id="nome"
                                autoComplete="nome"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(e) => onChange(e.target.name, e.target.value)}
                                />
                            </div>

                        </div>

                        <div className="sm:col-span-3">

                            <label htmlFor="telefone_ques" className="block text-sm font-medium leading-6 text-gray-900">
                                Telefone
                            </label>

                            <div className="mt-2">
                                
                                <input
                                type="number"
                                name="telefone_ques"
                                id="telefone_ques"
                                autoComplete="telefone_ques"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(e) => onChange(e.target.name, e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">

                            <label htmlFor="email_ques" className="block text-sm font-medium leading-6 text-gray-900">
                                Email para contato
                            </label>
                            <div className="mt-2">
                                <input
                                id="email_ques"
                                name="email_ques"
                                type="email_ques"
                                autoComplete="email_ques"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(e) => onChange(e.target.name, e.target.value)}
                                />

                            </div>

                        </div>

                    </div>
                </div>
  );
};

interface CompanyInfoProps {
    onChange: FormDataChangeHandler;
  }

const CompanyInfo: React.FC<CompanyInfoProps> = ({ onChange }) => {
  
    // Formulário de informações da residência
  return (
                    
    <div className="w-full">

        <h2 className="text-lg font-semibold leading-7 text-blue-900 mt-10 uppercase">Informações sobre a empresa</h2>
        
        <div className="mt-5 flex-col md:block md:grid-cols-1 md:gap-x-6 md:gap-y-5 ">
            
            <div className="col-span-full">
                
                <label htmlFor="empresa_ques" className="block text-sm font-medium leading-2 text-gray-900">
                    Nome da empresa
                </label>

                <div className="mt-2">
                    
                    <input
                    type="text"
                    name="empresa_ques"
                    id="empresa_ques"
                    autoComplete="empresa_ques"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </div>

            </div>

            <div className="sm:col-span-2 sm:col-start-1">
                
                <label htmlFor="segmento_ques" className="block text-sm font-medium leading-6 text-gray-900">
                    Segmento de atuação
                </label>

                <div className="mt-2">
                    
                    <input
                    type="text"
                    name="segmento_ques"
                    id="segmento_ques"
                    autoComplete="segmento_ques"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </div>

            </div>

            <div className="sm:col-span-2">
            
                <label htmlFor="conhecimento_salesforce_ques" className="block text-sm font-medium leading-6 text-gray-900">
                    Possui conhecimento sobre os produtos da SalesForce?
                </label>

                <div className="mt-2">
                        
                        <select
                        id="conhecimento_salesforce_ques"
                        name="conhecimento_salesforce_ques"
                        autoComplete="conhecimento_salesforce_ques"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>Sim</option>
                        <option>Não</option>
                        </select>
                </div>

            </div>

            <div className="sm:col-span-2">

            <label className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Qual a necessidade da empresa?</label>

            <textarea id="necessidade_empresa_ques" rows={5} className="block p-2 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Comente..." onChange={(e) => onChange(e.target.name, e.target.value)}></textarea>
            </div>

        </div>
    </div>
                    
  );
};

interface ProductInfoProps {
    onChange: FormDataChangeHandler;
  }

const ProductInfo: React.FC<ProductInfoProps> = ({ onChange }) => {
  // Formulário de informações adicionais
  return (
    <div className="w-full">

        <h2 className="text-lg font-semibold leading-7uppercase text-blue-900 mt-10">Produtos</h2>
                    
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:flex-col">

            <div className='sm:col-span-3'>

                <label htmlFor="produto_ques">A empresa possui algum produto implantado hoje?</label>

                <div className="mt-2">
                        
                        <select
                        id="produto_ques"
                        name="produto_ques"
                        autoComplete="produto_ques"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>Sim</option>
                        <option>Não</option>
                        </select>
                </div>

                
            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="produto_ques">Quais produtos sua empresa tem em funcionamento hoje?</label>
                
                <div className="mt-2">
                        
                        <select
                        id="produto_ques"
                        name="produto_ques"
                        autoComplete="produto_ques"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>Mais</option>
                        </select>
                </div>

            </div>

        </div>

    </div>
  );
};

interface QuestProps {
    onChange: FormDataChangeHandler;
  }

const QuestInfoFirst: React.FC<QuestProps> = ({ onChange }) => {
  
    // Formulário com a principais perguntas que fará a indicação
  return (

    <div className="w-full flex flex-col gap-3">
                    
        <h2 className="text-lg font-semibold leading-7uppercase text-blue-900 mt-10">Questões principais</h2>

        <p>Nesta etapa, você responderá a um total de 16 perguntas. Ao final, será indicado um ou mais produtos ideais para a sua empresa.</p>

        <p>Para cada pergunta, selecione um número de 1 a 4, onde 1 indica que o item não é importante e 4 indica que é muito importante.</p>


        <div className="mt-5 flex flex-col gap-x-6 gap-y-5 sm:grid-cols-6">

            <div className='sm:col-span-3'>

                <label htmlFor="questao_estrategia_marketing">Estratégias de marketing mais eficientes que mostrem nossa marca para nosso público alvo</label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_estrategia_marketing"
                        name="questao_estrategia_marketing"
                        autoComplete="questao_estrategia_marketing"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_ia_automacao">IA e automações para auxiliar nas atividades operacionais
                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_ia_automacao"
                        name="questao_ia_automacao"
                        autoComplete="questao_ia_automacao"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_desenvolver_estrategia">Desenvolver estratégias de atendimento eficientes

                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_desenvolver_estrategia"
                        name="questao_desenvolver_estrategia"
                        autoComplete="questao_desenvolver_estrategia"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_melhorar_comunicacao">Melhorar a comunicação entre nossos clientes e nossa equipe de atendimento


                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_melhorar_comunicacao"
                        name="questao_melhorar_comunicacao"
                        autoComplete="questao_melhorar_comunicacao"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

        </div>

    
    </div>
  );
};

interface QuestPropsSecond {
    onChange: FormDataChangeHandler;
  }

const QuestInfoSecond: React.FC<QuestPropsSecond> = ({ onChange }) => {
  
    // Formulário com a principais perguntas que fará a indicação
  return (

    <div className="w-full flex flex-col gap-3">
                    
        <h2 className="text-lg font-semibold leading-7uppercase text-blue-900 mt-10">Questões - Segunda fase</h2>


        <div className="mt-5 flex flex-col gap-x-6 gap-y-5 sm:grid-cols-6">

            <div className='sm:col-span-3'>

                <label htmlFor="questao_ambiente_integrado">Ambiente integrado para manter as equipes 100% entrosadas
                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_ambiente_integrado"
                        name="questao_ambiente_integrado"
                        autoComplete="questao_ambiente_integrado"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_aumento_produtividade">Aumento da produtividade da equipe

                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_aumento_produtividade"
                        name="questao_aumento_produtividade"
                        autoComplete="questao_aumento_produtividade"    
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_melhorar_capacitacao">Melhorar a capacitação das equipes de CRM

                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_melhorar_capacitacao"
                        name="questao_melhorar_capacitacao"
                        autoComplete="questao_melhorar_capacitacao"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_reducao_custo">Redução no custo de suporte e atendimento ao clientes
                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_reducao_custo"
                        name="questao_reducao_custo"
                        autoComplete="questao_reducao_custo"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

        </div>

    
    </div>
  );
};

interface QuestPropsThird {
    onChange: FormDataChangeHandler;
  }

const QuestInfoThird: React.FC<QuestPropsThird> = ({ onChange }) => {
  
    // Formulário com a principais perguntas que fará a indicação
  return (

    <div className="w-full flex flex-col gap-3">
                    
        <h2 className="text-lg font-semibold leading-7uppercase text-blue-900 mt-10">Questões - Terceira fase</h2>


        <div className="mt-5 flex flex-col gap-x-6 gap-y-5 sm:grid-cols-6">

            <div className='sm:col-span-3'>

                <label htmlFor="questao_aumentar_conversao">Aumentar a conversão da loja virtual
                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_aumentar_conversao"
                        name="questao_aumentar_conversao"
                        autoComplete="questao_aumentar_conversao"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_potencializar_vendas">Potencializar as vendas em canais online como loja virtual, whatsapp entre outros.

                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_potencializar_vendas"
                        name="questao_potencializar_vendas"
                        autoComplete="questao_potencializar_vendas"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_acelerar_vendas">Acelerar e aumentar as vendas através de dados e ferramentas qualificadas
                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_acelerar_vendas"
                        name="questao_acelerar_vendas"
                        autoComplete="questao_acelerar_vendas"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_riqueza_dados">Riqueza de dados para análise integrada do nosso time de vendas
                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_riqueza_dados"
                        name="questao_riqueza_dados"
                        autoComplete="questao_riqueza_dados"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

        </div>

    
    </div>
  );
};

interface QuestPropsFourth {
    onChange: FormDataChangeHandler;
  }

const QuestInfoFourth: React.FC<QuestPropsFourth> = ({ onChange }) => {
  
    // Formulário com a principais perguntas que fará a indicação
  return (

    <div className="w-full flex flex-col gap-3">
                    
        <h2 className="text-lg font-semibold leading-7uppercase text-blue-900 mt-10">Questões - Quarta fase</h2>


        <div className="mt-5 flex flex-col gap-x-6 gap-y-5 sm:grid-cols-6">

            <div className='sm:col-span-3'>

                <label htmlFor="questao_melhorar_experiencia">Melhorar a experiência do cliente com uma equipe de atendimento assertiva por meio de ferramentas eficazes
                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_melhorar_experiencia"
                        name="questao_melhorar_experiencia"
                        autoComplete="questao_melhorar_experiencia"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_mostrar_diferencial">Mostrar os diferenciais da minha marca para os clientes que desejo objeter
                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_mostrar_diferencial"
                        name="questao_mostrar_diferencial"
                        autoComplete="questao_mostrar_difere    ncial"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_criar_jornada">Criar jornadas personalizadas na segmentação dos nossos clientes entendendo quem são e o que querem
                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_criar_jornada"
                        name="questao_criar_jornada"
                        autoComplete="questao_criar_jornada"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>

                <label htmlFor="questao_marketing_oportunidade">Marketing de oportunidade eficiente, base forte e preparada para o mercado.
                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="questao_marketing_oportunidade"
                        name="questao_marketing_oportunidade"
                        autoComplete="questao_marketing_oportunidade"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Selecione uma opção</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                </div>

            </div>

        </div>

    
    </div>
  );
};



