'use client'

import { useState } from 'react';   

interface FormData {
    name: string;
    email: string;
    rating: number;
    message: string;
}


export default function FormFeedback(){

    const [rating, setRating] = useState(0);
   
    type StarIconProps = {
        filled: boolean;
        onClick: () => void;
    };

    // Função para renderizar o ícone de estrela SVG
    const StarIcon = ({ filled, onClick }: StarIconProps) => (
        <svg
          onClick={onClick} // Use o onClick aqui
          className={`h-[50px] w-[80px] cursor-pointer ${filled ? 'text-yellow-500' : 'text-[#D5E0B5]'}`}
          fill={filled ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.073 6.36h6.704c.969 0 1.371 1.24.588 1.81l-5.396 3.928 2.073 6.36c.3.921-.755 1.683-1.54 1.193l-5.396-3.928-5.396 3.928c-.785.49-1.84-.272-1.54-1.193l2.073-6.36-5.396-3.928c-.783-.57-.38-1.81.588-1.81h6.704l2.073-6.36z"
          />
        </svg>
      );
    
    // Função para atualizar a classificação baseada no índice da estrela clicada
    const handleSetRating = (index:any) => {
    setRating(index + 1);
    };

    /* Ao preencher o formulário de cadastro, será baixado o arquivo para manipulação em Python e salvar no LocalStorage */

    const [InformacoesFeedback, setInformacoesFeedback ] = useState({
        nome_feedback: '',
        email_feedback:'',
        mensagem_feedback:'',
        rating_feedback:'',

    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setInformacoesFeedback({
            ...InformacoesFeedback,
            [name]: value
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();

        // Primeiro, converte o objeto InformacoesFormulario para uma string JSON pois vou enviar para o LocalStorage
        const dadosFormularioJson = JSON.stringify(InformacoesFeedback);

        // Em seguida, salva essa string no localStorage com a chave 'InformacoesFormulario'
        localStorage.setItem('InformacoesFeedback', dadosFormularioJson);
    };

      
    return(

        <div className="bg-quinta md:flex md:justify-center min-h-[100vh]">

            <div className="w-[100%] md:pl-10 flex flex-col justify-center gap-5 border border-red-600 p-6">

                    <h1 className="text-3xl md:text-5xl font-orelega tracking-tight text-[#47667B] uppercase">Por que compartilhar seu feedback?</h1>

                    <h2 className="mt-2 text-xl leading-8 font-manrope"><strong>Faça Parte da Mudança:</strong> Seu feedback nos ajuda a entender o que estamos fazendo certo, o que podemos melhorar e como podemos evoluir nossos serviços para atender ainda melhor às suas necessidades.</h2>

                    <p className="mt-2 text-xl leading-8 font-manrope"><strong>Voz Ativa:</strong> Este é o seu momento para se expressar e ser ouvido. Cada comentário, cada sugestão contribui diretamente para as melhorias que implementamos.</p>

                    <p className="mt-2 text-xl leading-10 font-manrope"><strong>Rápido e Fácil:</strong> Sabemos que seu tempo é precioso. Por isso, nosso formulário é projetado para ser preenchido de forma rápida e sem complicações, respeitando seu tempo e disposição.</p>

                    <p className="mt-2 text-xl md:text-xl leading-10 font-manrope">Compartilhe seu feedback conosco agora - juntos, podemos alcançar novos patamares de excelência.</p>

            </div>

            <div className="w-[100%] bg-[#FFFFF] border border-red-600">

                <form
                name="form-feedback"
                method="post"
                data-netlify="true"
                className="w-[100%] md:w-[80%] mx-auto bg-segunda rounded-lg p-10 grid-cols-* md:mt-20"
                >
                <input type="hidden" name="form-feedback" value="feedback"/>


                        <div>
                            
                            <label className="block mb-2 text-xl font-sen text-white" htmlFor='name'>Nome</label>
                            
                            <input 
                            id='name'
                            name='name' 
                            type="text"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 mb-3"
                            autoComplete='name'
                            />
                        </div>

                        
                        <div className="mx-auto"> 

                            <label className="block mb-2 text-xl font-sen text-white" htmlFor='email'>Seu e-mail</label>

                            <input 
                            id="email"
                            name='email' 
                            type="email" 
                            aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com"
                            autoComplete='email'
                            />

                        </div>

                        <div className="rating flex justify-center content-center mt-10">
                            
                            <input 
                            className='' 
                            type="number" 
                            name="rating" 
                            value={rating} 
                            hidden 
                            required
                            readOnly  />
                            {[...Array(5)].map((_, index) => (
                                <StarIcon key={index} filled={index < rating} onClick={() => handleSetRating(index)} />
                            ))}

                        </div>

                        
                        <div className="mx-auto">

                            <label className="block mb-2 mt-5 text-xl font-sen text-white" htmlFor='message'>Sua mensagem</label>

                            <textarea 
                            name='message' 
                            id="message" 
                            rows={8} 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                            placeholder="Deixe seu comentário aqui..."></textarea>

                        </div>

                        <div className='flex justify-center text-center mt-5'>
                        
                            <div>
                                <button
                                className='rounded-md bg-quarta px-3.5 py-2.5 text-xl font-sen text-white shadow-sm hover:bg-primeira hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[100%]' 
                                type='submit' 
                                >Enviar</button>
                            </div>
                        
                        </div>

                </form>

            </div>

        </div>

    );
}