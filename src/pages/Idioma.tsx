'use client'

/* Importação dos componentes */
import TextReader from "@/components/TextReader";

export default function Idioma() {


    return(

        <div className="flex flex-col-reverse md:flex md:flex-row md:justify-center md:items-center min-h-[80vh] gap-20 p-6 bg-gray-100 ">

            <div className="flex flex-col max-w-md gap-5 p-6 rounded-md shadow-md bg-gray-50 dark:bg-gray-50 dark:text-gray-800 justify-start items-center">

                <TextReader text="Selecione o idioma desejado:">
                <h2 className="text-xl font-semibold leading-tight tracking-wide">Selecione uma opção:</h2>
                </TextReader>
                
                <div className="flex flex-col justify-between gap-6 mt-6 sm:flex-row">
                    
                    <div className="flex items-center gap-2">
                            <input type="radio" name="language" value="pt" className="cursor-pointer rounded-sm" />

                            <TextReader text="Português">
                            <label className="cursor-pointer dark:text-gray-600">Português</label>
                            </TextReader>
                            
                            <input type="radio" name="language" value="en" className="cursor-pointer rounded-sm" />

                            <TextReader text="Inglês">
                            <label className=" cursor-pointer dark:text-gray-600">Inglês</label>
                            </TextReader>
                            
                            <input type="radio" name="language" value="es" className="cursor-pointer rounded-sm" />

                            <TextReader text="Espanhol">
                            <label className=" cursor-pointer dark:text-gray-600">Espanhol</label>
                            </TextReader>

                    </div>

                    <div className="flex justify-center items-center p-2 font-sen text-sm rounded bg-segunda dark:bg-[#3EA0E7] dark:text-white text-white text-center w-full">

                        <TextReader text="Confirmar">
                            <button type="submit">Confirmar</button>
                        </TextReader>
                        
                    </div>

                </div>

                <TextReader text="Após clicar em confirmar, o idioma será alterado e todo o conteúdo estará formatado conforme a sua definição.">
                    <p className="flex-1 dark:text-gray-600">Após clicar em confirmar, o idioma será alterado e todo o conteúdo estará formatado conforme a sua definição.</p>
                </TextReader>

                <div className="flex justify-center items-center py-2 font-sen text-md rounded bg-segunda dark:bg-[#3EA0E7] dark:text-white text-white text-center w-full">

                        <TextReader text="Cancelar">
                            <button type="submit">Cancelar</button>
                        </TextReader>
                        
                    </div>

            </div>

            <div className="flex flex-col gap-10 bg-gray-200 p-6">
                
                <h1 className="font-bold text-2xl md:text-4xl">Escolha o idioma que melhor se adequa a você</h1>

                <p className="font-manrope text-md md:text-xl">Selecionar o idioma correto é fundamental para garantir uma experiência de uso mais acessível e inclusiva. Ao escolher o idioma desejado, você não só facilita a compreensão do conteúdo, mas também ajuda tecnologias assistivas, como leitores de tela, a interpretar corretamente as informações.</p>

                <p className="font-manrope text-md md:text-xl">Por exemplo, ao selecionar o português, o conteúdo será apresentado de acordo com as regras gramaticais e a estrutura linguística desse idioma, tornando a leitura mais fluida e compreensível.</p>

                <p className="font-manrope text-md md:text-xl">Além disso, a escolha do idioma correto também influencia a formatação de datas, números e outros elementos linguísticos, garantindo uma experiência mais consistente e eficaz.</p>

                <p className="font-manrope text-md md:text-xl">Portanto, ao selecionar o idioma desejado, você está contribuindo para tornar a web um lugar mais acessível e inclusivo para todos.</p>

            </div>
                
        </div>

    );
}