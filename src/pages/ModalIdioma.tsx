'use client'

/* Importação dos componentes */
import TextReader from "@/components/TextReader";

export default function ModalIdioma() {


    return(

        <div className=" inset-0 flex justify-center items-center mt-20 h-96 gap-20">

            <div className="flex flex-col max-w-md gap-5 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 h-80 justify-center">

                <TextReader text="Selecione o idioma desejado:">
                <h2 className="text-xl font-semibold leading-tight tracking-wide">Selecione o idioma desejado:</h2>
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

                    <div className="flex justify-center items-center py-2 font-sen text-md rounded bg-segunda dark:bg-[#3EA0E7] dark:text-white text-white text-center w-full">

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

            <div>
                <h1>Texto explicativo</h1>
            </div>
                
        </div>

    );
}