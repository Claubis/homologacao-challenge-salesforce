/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'


/* Demais importações  */
import { useState } from 'react';

/* Importação do json */
import produtos from '../utils/produtos.json'

interface Produto {
    id: number;
    nome: string;
    descricao: string;
    vantagens: string[];
    segmento: string;
  }

/* Importação das imagens */ 
// import imagem1 from '../../../public/assets/CarroselProdutos/ATENDIMENTO_CLIENTE.svg'
// import imagem2 from '../../../public/assets/CarroselProdutos/COMMERCE.svg'
// import imagem3 from '../../../public/assets/CarroselProdutos/IA.svg'
// import imagem4 from '../../../public/assets/CarroselProdutos/MARKETING.svg'
// import imagem5 from '../../../public/assets/CarroselProdutos/MULE_SOFT.svg'
// import imagem6 from '../../../public/assets/CarroselProdutos/NET_ZERO.svg'
// import imagem7 from '../../../public/assets/CarroselProdutos/NUVEM_DADOS.svg'
// import imagem8 from '../../../public/assets/CarroselProdutos/PARCEIROS.svg'
// import imagem9 from '../../../public/assets/CarroselProdutos/PEQUENAS_EMPRESAS.svg'
// import imagem10 from '../../../public/assets/CarroselProdutos/PLATAFORMAS.svg'
// import imagem11 from '../../../public/assets/CarroselProdutos/SLACK.svg'
// import imagem12 from '../../../public/assets/CarroselProdutos/SUCESSO.svg'
// import imagem13 from '../../../public/assets/CarroselProdutos/TABLEAU.svg'
// import imagem14 from '../../../public/assets/CarroselProdutos/VENDAS.svg'
// import imagem15 from '../../../public/assets/Projeto/button-vsl.png'

export default function ProductDetails() {

    const [selectedOption, setSelectedOption] = useState('produto');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    // State para armazenar o produto selecionado
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

    const handleSelecionarProduto = (id: string) => {
        const produtoId = Number(id);
        const produto = produtos.find((p: Produto) => p.id === produtoId);
        setProdutoSelecionado(produto || null);
      };
      


    return(
       
        <div className='min-h-[100vh] flex flex-col justify-start items-center gap-5'>

            <div className='border border-red-500 h-[20vh] w-full flex justify-center items-center mt-10 md:mt-0 p-6'>
                <h1 className='font-bold text-2xl md:text-4xl'>Selecione um produto e conheça  as vantagens para o seu negócio</h1>
            </div>

            <div className='border border-black h-[20vh] w-full flex justify-center items-center'>
            
                    <p className=''>Colocar as imagens aqui</p>

            </div>

            <div className="min-h-[40vh] border border-blue-600 w-full">

                    <div className="min-h-[10vh] border border-green-600 flex justify-center items-center gap-3 md:gap-10 font-bold text-lg md:text-2xl text-black hover:text-blue-600">

                        <span className={selectedOption === 'produto' ? 'active' : ''} onClick={() => handleOptionClick('produto')}>Produto</span>
                        <span className={selectedOption === 'video' ? 'active' : ''} onClick={() => handleOptionClick('video')}>Vídeo</span>
                        <span className={selectedOption === 'chatbot' ? 'active' : ''} onClick={() => handleOptionClick('chatbot')}>ChatBot</span>

                    </div>

                    <div className="flex flex-col justify-center mt-10 text-black">
                        
                        {selectedOption === 'produto' && (
                            
                            <div className=''>

                                
                                <h1 className=''>Detalhes do produto</h1>

                                {produtoSelecionado ? (
                                    
                                    <div className=''>

                                        <div className=''>
                                            <h1 className=''>Produto:</h1>
                                            <h2 className=''>{produtoSelecionado.nome}</h2>
                                        
                                        </div>

                                <h3 className="">Descriação do produto:</h3>
                                
                                <p className="">{produtoSelecionado.descricao}</p>
                                
                                <h3  className="font-bold text-black">Vantagens:</h3>

                                    <ul>
                                        {produtoSelecionado.vantagens.map((vantagem, index) => (
                                        <li className="" key={index}>{vantagem}</li>
                                    ))}
                                    </ul>

                                <h3 className="">Segmento onde a empresa pode aplicar este produto:</h3>
                                <p className="">{produtoSelecionado.segmento}</p>
                                </div>
                                ) : (
                                    <p className="">Selecione um produto para ver os detalhes.</p>
                                  )}

                                <div className=''>

                                    <button className=''>
                                        Entre em contato
                                    </button>
                                </div>
                            </div>
                        )}

                        {selectedOption === 'video' && (
                            <div className='flex flex-col gap-5 p-6'>

                                <h1 className='font-bold text-2xl text-center'>Vídeo explicativo</h1>

                                <p className="font-manrope text-xl p-6">Ver demonstrações simples, rápida e com descrição no vídeo.</p>

                                <div className="min-h-[20vh] flex justify-center items-center border border-orange-500">
                                    
                                    <img src={''} alt="VSL - Vídeos explicativos sobre os produtos" title="VSL - não introduzida pelo bloqueio de JS nessa sprint" />
                                    
                                </div>
                            
                                <div className='p-6 flex flex-col gap-3 justify-center items-start'>

                                    <p className="font-manrope text-xl">Aqui teremos a descrição correspondente dos vídeos, para aqueles que não puderem assistir, não tiverem a capacidade de ouvir ou não puderem clicar para reproduzir o vídeo. Com este modelo, conseguimos fazer o aplicativo de Libras reproduzir o conteúdo através dos textos.</p>

                                </div>

                            </div>
                        )}
                        {selectedOption === 'chatbot' && (
                            <div className='container-chatbot-produto'>
                                <h1 className='titulo-pagina-chatbot'>ChatBot independente</h1>
                                <button className="button-chat-bot">Tire suas dúvidas a qualquer momento, sem limite de tempo ou de perguntas!</button>

                                <div className='container-chatbot'>
                                    <div>
                                        <h1 className='texto-box-chat'>Caixa de conversa com o bot</h1>
                                    </div>
                                </div>


                                <p className="text_caracteristica">Vai abrir a caixa de conversa com o chatbot, será necessário logar sendo criando a conta ou usando uma existente. Aqui vamos mapear a experiência e questionamentos para cada produto e visitante.</p>
                            </div>
                        )}
                    </div>

                </div>

        </div>
    );
}