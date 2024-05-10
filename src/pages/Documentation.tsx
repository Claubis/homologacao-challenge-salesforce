
import TextReader from "../components/TextReader";

export default function Documentation(){
    return(
        
        <section className="dark:bg-gray-700 dark:text-white px-5 md:p-10 min-h-[100vh]">
            
            <div className="md:px-4 md:py-16 mx-auto md:space-y-8 flex flex-col justify-center gap-10 mt-10 md:mt-0">
                
                <TextReader text="Documentação para acessibilidade">
                <h2 className="text-4xl md:text-6xl font-bold">Documentação para acessibilidade</h2>
                </TextReader>

                <TextReader text="Descubra tudo sobre acessibilidade! Nossa página de documentação foi criada para oferecer recursos acessíveis a todos. Aqui você encontrará explicações detalhadas em texto, fotos com passo a passo e vídeos com descrições para tornar o aprendizado sobre acessibilidade fácil e acessível a todos. Explore nosso conteúdo e aprenda como tornar sua experiência digital inclusiva e amigável para todos os usuários.">
                <p className="font-manrope text-md md:text-2xl leading-7 md:leading-10">Descubra tudo sobre acessibilidade! Nossa página de documentação foi criada para oferecer recursos acessíveis a todos. Aqui você encontrará explicações detalhadas em texto, fotos com passo a passo e vídeos com descrições para tornar o aprendizado sobre acessibilidade fácil e acessível a todos. Explore nosso conteúdo e aprenda como tornar sua experiência digital inclusiva e amigável para todos os usuários.</p>
                </TextReader>
                
                <div className="space-y-8 flex flex-col justify-center gap-10">
                    
                    {/* Navegação usando TAB */}
                    <div>
                        
                    <TextReader text="Navegação">
                        <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 dark:text-white">Navegação</h3>
                        </TextReader>

                            <div className="flex justify-start items-center gap-3 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                </svg>

                                <TextReader text="Curiosidade">
                                <h2 className="font-bold text-xl md:text-2xl">Curiosidade</h2>
                                </TextReader>

                            </div>

                            <div className="font-manrope text-md leading-7 md:leading-10 flex flex-col gap-5">

                            <TextReader text="Ter um item de navegação pelo site que permita a navegação pelo teclado, especialmente usando a tecla tab, é fundamental para garantir a acessibilidade e a usabilidade do seu site. Essa prática facilita a interação para pessoas que não utilizam o mouse, como aquelas com deficiências motoras ou que preferem a navegação pelo teclado.">
                                <p>Ter um item de navegação pelo site que permita a navegação pelo teclado, especialmente usando a tecla tab, é fundamental para garantir a acessibilidade e a usabilidade do seu site. Essa prática facilita a interação para pessoas que não utilizam o mouse, como aquelas com deficiências motoras ou que preferem a navegação pelo teclado.</p>
                                </TextReader>

                                <TextReader text="A navegação usando a tecla tab é uma prática comum para muitos usuários, principalmente aqueles que utilizam apenas o teclado para navegar na web. Ter uma ordem lógica e previsível de foco ao usar a tecla tab torna a navegação mais fácil e eficiente. Isso também beneficia pessoas com deficiência visual, que podem utilizar softwares de leitura de tela que dependem dessa ordem para fornecer uma experiência de navegação fluida e compreensível.">
                                <p><strong>A navegação usando a tecla tab</strong> é uma prática comum para muitos usuários, principalmente aqueles que utilizam apenas o teclado para navegar na web. Ter uma ordem lógica e previsível de foco ao usar a tecla tab torna a navegação mais fácil e eficiente. Isso também beneficia pessoas com deficiência visual, que podem utilizar softwares de leitura de tela que dependem dessa ordem para fornecer uma experiência de navegação fluida e compreensível.</p>
                                </TextReader>

                                <TextReader text="Além disso, a navegação pelo teclado é útil em situações em que o uso do mouse é impraticável ou impossível </strong>, como em dispositivos com tela sensível ao toque ou em ambientes de trabalho onde o uso do mouse é desencorajado. Portanto, ter um site que suporte a navegação pelo teclado usando a tecla tab é essencial para garantir que todas as pessoas possam acessar e interagir com o seu conteúdo de forma eficaz e inclusiva.">
                                <p>Além disso, a navegação pelo teclado é útil em <strong> situações em que o uso do mouse é impraticável ou impossível </strong>, como em dispositivos com tela sensível ao toque ou em ambientes de trabalho onde o uso do mouse é desencorajado. Portanto, ter um site que suporte a navegação pelo teclado usando a tecla tab é essencial para garantir que todas as pessoas possam acessar e interagir com o seu conteúdo de forma eficaz e inclusiva.</p>
                                </TextReader>


                            </div>

                        <div className="flex justify-start items-center gap-3 mb-5">


                        </div>

                        <div className="flex justify-start items-center gap-3 mb-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Descrição">
                                    <h2 className="font-bold text-xl md:text-2xl">Descrição</h2>
                                    </TextReader>

                        </div>
                        
                        <ul className="space-y-4">
                            <li className="space-y-1">
                                
                                <div className="flex items-center space-x-2">
                                    
                                <TextReader text="Explore nossa página com facilidade! Você pode navegar usando a tecla TAB para mover o foco entre os campos. Cada elemento receberá destaque conforme você navega, facilitando a identificação. Se estiver usando um leitor de tela, ele irá descrever cada elemento à medida que você navega. Se preferir, também é possível usar o mouse para navegar, com conteúdos claros e dinâmicos que se destacam conforme você interage com eles.">
                                    <h4 className="font-manrope text-md leading-7 md:leading-10">Explore nossa página com facilidade! Você pode navegar usando a tecla TAB para mover o foco entre os campos. Cada elemento receberá destaque conforme você navega, facilitando a identificação. Se estiver usando um leitor de tela, ele irá descrever cada elemento à medida que você navega. Se preferir, também é possível usar o mouse para navegar, com conteúdos claros e dinâmicos que se destacam conforme você interage com eles.</h4>
                                    </TextReader>

                                </div>
                             
                            </li>

                            <li className="space-y-1 flex flex-col gap-5">
                                
                                <div className="flex items-center space-x-2">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Processo">
                                    <h4 className="font-bold text-xl md:text-2xl">Processo</h4>
                                    </TextReader>

                                </div>

                                <TextReader text="Etapa 1">
                                <p className="pt-5"><strong>Etapa 1</strong></p>
                                </TextReader>

                                <TextReader text="Explore nossa página inicial: com um menu simples, garantimos que tudo seja fácil e agradável para uma experiência ainda mais tranquila.">
                                <p className="font-sen text-md">Explore nossa página inicial: com um menu simples, garantimos que tudo seja fácil e agradável para uma experiência ainda mais tranquila.</p>
                                </TextReader>

                                <div className='border border-[#3EA0E7] rounded dark:border-0'>
                                    <img src="/assets/Documentation/imagem1.png" alt="Imagem que mostra o processo para acessar a documentação de acessibilidade" />
                                </div>

                                <TextReader text="Etapa 2">
                                <p className="pt-5"><strong>Etapa 2</strong></p>
                                </TextReader>

                                <TextReader text="Para começar, selecione 'Acessibilidade' no menu.">
                                <p className="font-sen text-md">Para começar, selecione 'Acessibilidade' no menu.</p>
                                </TextReader>

                                <div className='border border-[#3EA0E7] rounded dark:border-0'>
                                    <img src="/assets/Documentation/imagem2.png" alt="Imagem que mostra o processo para acessar a documentação de acessibilidade" />
                                </div>

                                <TextReader text="Etapa 3">
                                <p className="pt-5"><strong>Etapa 3</strong></p>
                                </TextReader>

                                <TextReader text="Em seguida, clique em 'Documentação' para entender o que foi criado e como utilizar cada recurso.">
                                <p className="font-sen text-md">Em seguida, clique em 'Documentação' para entender o que foi criado e como utilizar cada recurso.</p>
                                </TextReader>

                                <div className='border border-[#3EA0E7] rounded dark:border-0'>
                                    <img src="/assets/Documentation/imagem3.png" alt="Imagem que mostra o processo para acessar a documentação de acessibilidade" />
                                </div>

                                <TextReader text="tapa 4">
                                <p className="pt-5"><strong>Etapa 4</strong></p>
                                </TextReader>

                                <TextReader text="O diferente desse passo a passo é que ele já é integrado com a leitura de tela, então se o usuário tiver  deficiência parcial ou
                                Total da visão, ele consegue saber por onde esta navegando e quais opções clicar.">
                                <p className="font-sen text-md">O diferente desse passo a passo é que ele já é integrado com a leitura de tela, então se o usuário tiver  deficiência parcial ou
                                Total da visão, ele consegue saber por onde esta navegando e quais opções clicar.</p>
                                </TextReader>

                                <div className='border border-[#3EA0E7] rounded dark:border-0'>
                                    <img src="/assets/Documentation/imagem4.png" alt="Imagem que mostra o processo para acessar a documentação de acessibilidade" />
                                </div>

                                <TextReader text="Etapa 5">
                                <p className="pt-5"><strong>Etapa 5</strong></p>
                                </TextReader>

                                <TextReader text="Explore nossa documentação completa! 
                                    Nossa documentação é projetada para atender a todos os públicos, oferecendo três modelos de explicação: texto, fotos e vídeos. Se você prefere aprender lendo, temos explicações detalhadas em texto. Se prefere uma abordagem visual, oferecemos fotos passo a passo. E se prefere aprender assistindo, temos vídeos explicativos. Com esses três modelos, garantimos que você aprenda de forma simples e prática, independentemente do seu estilo de aprendizado.">
                                <p className="font-sen text-md">Explore nossa documentação completa! 
                                    Nossa documentação é projetada para atender a todos os públicos, oferecendo três modelos de explicação: texto, fotos e vídeos. Se você prefere aprender lendo, temos explicações detalhadas em texto. Se prefere uma abordagem visual, oferecemos fotos passo a passo. E se prefere aprender assistindo, temos vídeos explicativos. Com esses três modelos, garantimos que você aprenda de forma simples e prática, independentemente do seu estilo de aprendizado.
                                    </p>
                                    </TextReader>

                                <div className='border border-[#3EA0E7] rounded dark:border-0'>
                                    <img src="/assets/Documentation/imagem5.png" alt="Imagem que mostra o processo para acessar a documentação de acessibilidade" />
                                </div>

                            </li>

                            <li className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Vídeo">
                                    <h4 className="font-bold text-xl md:text-2xl">Vídeo</h4>
                                    </TextReader>
                                </div>


                            </li>
                        </ul>

                    </div>

                    {/* Leitor de tela */}
                    <div>
                        
                    <TextReader text="Leitor de tela">
                        <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 dark:text-white">Leitor de tela</h3>
                        </TextReader>

                            <div className="flex justify-start items-center gap-3 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                </svg>

                                <TextReader text="Curiosidade">
                                <h2 className="font-bold text-xl md:text-2xl">Curiosidade</h2>
                                </TextReader>

                            </div>

                            <div className="font-manrope text-md leading-7 md:leading-10 flex flex-col gap-5">
                                
                            <TextReader text="A leitura de texto parcial, também conhecida como text-to-speech (TTS) seletivo, é uma funcionalidade que permite ao usuário selecionar um trecho específico de texto em uma página da web e ouvi-lo em vez de lê-lo. Essa funcionalidade é especialmente útil para pessoas com dificuldades de leitura, déficits de atenção ou deficiências visuais.">
                                <p>A leitura de texto parcial, também conhecida como "text-to-speech" (TTS) seletivo, é uma funcionalidade que permite ao usuário selecionar um trecho específico de texto em uma página da web e ouvi-lo em vez de lê-lo. Essa funcionalidade é especialmente útil para pessoas com dificuldades de leitura, déficits de atenção ou deficiências visuais.</p>
                                </TextReader>

                                <TextReader text="Segundo a Organização Mundial da Saúde (OMS), estima-se que aproximadamente 2,2 bilhões de pessoas em todo o mundo tenham alguma forma de deficiência visual ou cegueira. No Brasil, de acordo com o último Censo do IBGE, cerca de 6,7% da população declarou ter alguma deficiência visual, o que representa aproximadamente 13 milhões de pessoas. Esses números destacam a relevância de implementar recursos de acessibilidade, como a leitura de texto parcial, para atender às necessidades dessa parcela significativa da população.">
                                <p className="text-[red]">Segundo a Organização Mundial da Saúde (OMS), estima-se que aproximadamente 2,2 bilhões de pessoas em todo o mundo tenham alguma forma de deficiência visual ou cegueira. No Brasil, de acordo com o último Censo do IBGE, cerca de 6,7% da população declarou ter alguma deficiência visual, o que representa aproximadamente 13 milhões de pessoas. Esses números destacam a relevância de implementar recursos de acessibilidade, como a leitura de texto parcial, para atender às necessidades dessa parcela significativa da população.</p>
                                </TextReader>

                                <TextReader text="Inclusão e Acessibilidade: A implementação da leitura de texto parcial torna o conteúdo mais acessível para pessoas com deficiência visual, dislexia, dificuldades de leitura e outros desafios que podem dificultar a compreensão do texto escrito.">
                                <p><strong>Inclusão e Acessibilidade:</strong> A implementação da leitura de texto parcial torna o conteúdo mais acessível para pessoas com deficiência visual, dislexia, dificuldades de leitura e outros desafios que podem dificultar a compreensão do texto escrito.</p>
                                </TextReader>
                                
                                <TextReader text="Melhoria da Experiência do Usuário: Oferecer a opção de ouvir o texto selecionado em vez de lê-lo pode melhorar a experiência do usuário, tornando a navegação mais fácil e agradável.">
                                <p><strong>Melhoria da Experiência do Usuário:</strong> Oferecer a opção de ouvir o texto selecionado em vez de lê-lo pode melhorar a experiência do usuário, tornando a navegação mais fácil e agradável.</p>
                                </TextReader>

                                <TextReader text="Atendimento a Diferentes Preferências de Consumo de Conteúdo: Nem todos os usuários preferem ou conseguem consumir conteúdo escrito. O TTS seletivo oferece uma alternativa valiosa para aqueles que preferem ou precisam ouvir o conteúdo.">
                                <p>Atendimento a Diferentes Preferências de Consumo de Conteúdo: Nem todos os usuários preferem ou conseguem consumir conteúdo escrito. O TTS seletivo oferece uma alternativa valiosa para aqueles que preferem ou precisam ouvir o conteúdo.</p>
                                </TextReader>

                                


                            </div>

                        <div className="flex justify-start items-center gap-3 mb-5 mt-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Descrição">
                                    <h2 className="font-bold text-xl md:text-2xl">Descrição</h2>
                                    </TextReader>

                                </div>
                        
                        <ul className="space-y-4">
                            <li className="space-y-1">
                                <div className="flex items-center space-x-2">

                                <TextReader text="Explore nossa acessibilidade com o leitor de tela! Ative o leitor de tela no menu para tornar nosso conteúdo acessível para todos. Com o leitor de tela ativado, você pode navegar pela página e selecionar o texto que deseja ouvir. Basta clicar no texto desejado e o leitor de tela lerá o conteúdo em voz alta. Essa funcionalidade torna nosso site acessível a pessoas com deficiência visual, proporcionando uma experiência de navegação inclusiva e dinâmica.">
                                    <h4 className="font-manrope text-md leading-7 md:leading-10">Explore nossa acessibilidade com o leitor de tela! Ative o leitor de tela no menu para tornar nosso conteúdo acessível para todos. Com o leitor de tela ativado, você pode navegar pela página e selecionar o texto que deseja ouvir. Basta clicar no texto desejado e o leitor de tela lerá o conteúdo em voz alta. Essa funcionalidade torna nosso site acessível a pessoas com deficiência visual, proporcionando uma experiência de navegação inclusiva e dinâmica.</h4>
                                    </TextReader>
                                </div>
                             
                            </li>

                            <li className="space-y-1">
                                
                                <div className="flex items-center space-x-2">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Processo">
                                    <h4 className="font-bold text-xl md:text-2xl">Processo</h4>
                                    </TextReader>

                                </div>

                            </li>

                            <li className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Vídeo">
                                    <h4 className="font-bold text-xl md:text-2xl">Vídeo</h4>
                                    </TextReader>
                                </div>


                            </li>
                        </ul>

                    </div>

                    {/* Imagens com Alt para leitor de tela específico */}
                    <div>
                        <TextReader text="Imagens com descrição Alt">
                            <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 dark:text-white">Imagens com Descrição Alt (Alternativo)</h3>
                        </TextReader>

                        <div className="flex justify-start items-center gap-3 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                            </svg>

                            <TextReader text="Importância do Atributo Alt em Imagens para Acessibilidade">
                                <h2 className="font-bold text-xl md:text-2xl">Importância do Atributo Alt em Imagens para Acessibilidade</h2>
                            </TextReader>
                        </div>

                        <div className="font-manrope text-md leading-7 md:leading-10 flex flex-col gap-5">

                            <TextReader text="O atributo 'alt' em imagens é crucial para acessibilidade na web. Ele fornece uma descrição textual da imagem para leitores de tela, permitindo que usuários com deficiência visual entendam o conteúdo da imagem.">
                                <p>O atributo 'alt' em imagens é crucial para acessibilidade na web. Ele fornece uma descrição textual da imagem para leitores de tela, permitindo que usuários com deficiência visual entendam o conteúdo da imagem.</p>
                            </TextReader>

                            

                                <ul className="space-y-4">
                                    <li>
                                        <TextReader text="Descrição Acessível: Ao incluir uma descrição significativa no atributo 'alt', as imagens se tornam mais acessíveis, proporcionando uma experiência inclusiva para todos os usuários.">
                                            <p><strong>Descrição Acessível:</strong> Ao incluir uma descrição significativa no atributo 'alt', as imagens se tornam mais acessíveis, proporcionando uma experiência inclusiva para todos os usuários.</p>
                                        </TextReader>
                                    </li>

                                    <li>
                                        <TextReader text="Compreensão do Conteúdo: Usuários com deficiência visual podem entender melhor o conteúdo da imagem ao ouvir a descrição fornecida pelo leitor de tela.">
                                            <p><strong>Compreensão do Conteúdo:</strong> Usuários com deficiência visual podem entender melhor o conteúdo da imagem ao ouvir a descrição fornecida pelo leitor de tela.</p>
                                        </TextReader>
                                    </li>
                                    
                                    <li>
                                        <TextReader text="Conformidade com Padrões de Acessibilidade: O uso adequado do atributo 'alt' em imagens ajuda a garantir a conformidade com padrões de acessibilidade, como as Diretrizes de Acessibilidade para Conteúdo Web (WCAG).">
                                            <p><strong>Conformidade com Padrões de Acessibilidade:</strong> O uso adequado do atributo 'alt' em imagens ajuda a garantir a conformidade com padrões de acessibilidade, como as Diretrizes de Acessibilidade para Conteúdo Web (WCAG).</p>
                                        </TextReader>
                                    </li>

                                    <TextReader text="Quando uma imagem ainda não foi carregada ou não pôde ser renderizada, o atributo alt desempenha um papel fundamental na acessibilidade. Ele fornece um texto alternativo que é exibido no lugar da imagem, permitindo que os usuários saibam o que a imagem representaria. Isso é especialmente importante para pessoas que utilizam leitores de tela, pois lhes permite entender o conteúdo da página, mesmo sem poder ver a imagem. Portanto, ao usar o atributo alt de forma adequada, você está garantindo uma experiência mais inclusiva para todos os usuários, independentemente de suas habilidades visuais.">
                                        <li>Quando uma imagem ainda não foi carregada ou não pôde ser renderizada, o atributo alt desempenha um papel fundamental na acessibilidade. Ele fornece um texto alternativo que é exibido no lugar da imagem, permitindo que os usuários saibam o que a imagem representaria. Isso é especialmente importante para pessoas que utilizam leitores de tela, pois lhes permite entender o conteúdo da página, mesmo sem poder ver a imagem. Portanto, ao usar o atributo alt de forma adequada, você está garantindo uma experiência mais inclusiva para todos os usuários, independentemente de suas habilidades visuais.</li>
                                    </TextReader>


                                </ul>
                        </div>

                        <div>

                            <div className="flex justify-start items-center gap-3 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                </svg>

                                <TextReader text="Importância do Atributo Alt em Imagens para Acessibilidade">
                                    <h2 className="font-bold text-xl md:text-2xl">Processo</h2>
                                </TextReader>
                            </div>

                            <TextReader text="Etapa 1">
                                <p className="pt-5"><strong>Etapa 1</strong></p>
                            </TextReader>

                            <TextReader text="Inserir uma descrição da imagem de forma simples e clara é fundamental para garantir a acessibilidade e a compreensão do conteúdo para todos os usuários. A descrição deve ser sucinta, mas precisa o suficiente para transmitir a mensagem da imagem. Por exemplo, se a imagem mostra um gráfico de barras representando dados de vendas, a descrição poderia ser 'Gráfico de barras mostrando dados de vendas por mês'. Dessa forma, os usuários que não podem ver a imagem podem entender o que ela representa e ter uma experiência mais completa ao acessar o conteúdo.">
                                <p className="pt-5 mb-5">Inserir uma descrição da imagem de forma simples e clara é fundamental para garantir a acessibilidade e a compreensão do conteúdo para todos os usuários. A descrição deve ser sucinta, mas precisa o suficiente para transmitir a mensagem da imagem. Por exemplo, se a imagem mostra um gráfico de barras representando dados de vendas, a descrição poderia ser "Gráfico de barras mostrando dados de vendas por mês". Dessa forma, os usuários que não podem ver a imagem podem entender o que ela representa e ter uma experiência mais completa ao acessar o conteúdo.</p>
                            </TextReader>

                            <img src="/assets/Documentation/Sessao-Alt/imagem1.png" alt="Exemplo da TAG IMG com o descritivo ALT para ajudar com a acessibilidade e leitura de tela" />

                            <TextReader text="Etapa 2">
                                <p className="pt-5"><strong>Etapa 2</strong></p>
                                </TextReader>

                                <TextReader text="Exemplo de como será mostrado na interface quando a imagem não carregar/renderizar">
                                <p className="pt-5 mb-5">Exemplo de como será mostrado na interface quando a imagem não carregar/renderizar. Neste modelo, o usuário com a sua tecnologia pode ter o texto descrito para ele e conseguir imaginar ou visualizar o que tem de conteúdo.</p>
                            </TextReader>

                            <img src="/assets/Documentation/Sessao-Alt/imagem2.png" alt="Exemplo da TAG IMG com o descritivo ALT para ajudar com a acessibilidade e leitura de tela" />

                        </div>

                    </div>

                    
                    {/* Definição do Tema a página */}
                    <div>
                        
                    <TextReader text="Tema">
                        <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 dark:text-white">Tema</h3>
                        </TextReader>

                        <div className="flex justify-start items-center gap-3 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                </svg>

                                <TextReader text="Curiosidade">
                                <h2 className="font-bold text-xl md:text-2xl">Curiosidade</h2>
                                </TextReader>
                            </div>

                            <div className="font-manrope text-md leading-7 md:leading-10 flex flex-col gap-5">
                                
                            <TextReader text="A implementação de um tema claro e escuro em um site também é uma prática importante de acessibilidade, pois permite que os usuários escolham o modo de visualização que melhor se adapta às suas preferências ou necessidades. Aqui estão alguns benefícios dessa implementação:">
                                <p>A implementação de um tema claro e escuro em um site também é uma prática importante de acessibilidade, pois permite que os usuários escolham o modo de visualização que melhor se adapta às suas preferências ou necessidades. Aqui estão alguns benefícios dessa implementação:</p>
                                </TextReader>

                                <TextReader text="Conforto Visual: Alguns usuários podem preferir temas escuros para reduzir o brilho da tela, o que pode ser mais confortável, principalmente em ambientes com pouca luz.">
                                <p><strong>Conforto Visual:</strong> Alguns usuários podem preferir temas escuros para reduzir o brilho da tela, o que pode ser mais confortável, principalmente em ambientes com pouca luz.</p>
                                </TextReader>

                                <TextReader text="Economia de Energia: Em dispositivos com tela OLED, o tema escuro pode economizar energia, pois pixels pretos consomem menos energia do que pixels brancos.">
                                <p><strong>Economia de Energia:</strong> Em dispositivos com tela OLED, o tema escuro pode economizar energia, pois pixels pretos consomem menos energia do que pixels brancos.</p>
                                </TextReader>

                                <TextReader text="Acessibilidade para Deficiências Visuais: Para usuários com sensibilidade à luz ou deficiências visuais, como a cegueira noturna, o tema escuro pode facilitar a leitura e a navegação.">
                                <p><strong>Acessibilidade para Deficiências Visuais:</strong> Para usuários com sensibilidade à luz ou deficiências visuais, como a cegueira noturna, o tema escuro pode facilitar a leitura e a navegação.</p>
                                </TextReader>

                                <TextReader text="Preferências do Usuário: Oferecer a opção de escolha entre temas claro e escuro demonstra consideração pelas preferências do usuário, o que pode melhorar a experiência do usuário e a fidelidade à marca.">
                                <p><strong>Preferências do Usuário:</strong> Oferecer a opção de escolha entre temas claro e escuro demonstra consideração pelas preferências do usuário, o que pode melhorar a experiência do usuário e a fidelidade à marca.</p>
                                </TextReader>

                            </div>
                        
                        <ul className="space-y-4">
                            
                            <li className="space-y-1">

                                <div className="flex justify-start items-center gap-3 mb-5 mt-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Descrição">
                                    <h2 className="font-bold text-xl md:text-2xl">Descrição</h2>
                                    </TextReader>

                                </div>
                                
                                <div className="flex items-center space-x-2">

                                <TextReader text="Experimente a flexibilidade! Nosso site oferece a opção de alternar entre os temas claro e escuro. Altere o tema de acordo com suas preferências e necessidades. O tema claro oferece uma experiência visual mais suave, ideal para ambientes bem iluminados. Já o tema escuro é ideal para uso noturno, reduzindo a fadiga ocular e economizando energia em dispositivos com tela OLED. Escolha o tema que mais lhe agrada e aproveite uma experiência de navegação mais personalizada e confortável.">
                                    <h4 className="font-manrope text-md leading-7 md:leading-10">Experimente a flexibilidade! Nosso site oferece a opção de alternar entre os temas claro e escuro. Altere o tema de acordo com suas preferências e necessidades. O tema claro oferece uma experiência visual mais suave, ideal para ambientes bem iluminados. Já o tema escuro é ideal para uso noturno, reduzindo a fadiga ocular e economizando energia em dispositivos com tela OLED. Escolha o tema que mais lhe agrada e aproveite uma experiência de navegação mais personalizada e confortável.</h4>
                                    </TextReader>

                                </div>

                            </li>

                            <li className="space-y-1">
                                
                                <div className="flex items-center space-x-2">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Processo">
                                    <h4 className="font-bold text-xl md:text-2xl">Processo</h4>
                                    </TextReader>

                                </div>

                            </li>

                            <li className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Vídeo">
                                    <h4 className="font-bold text-xl md:text-2xl">Vídeo</h4>
                                    </TextReader>
                                </div>


                            </li>
                        </ul>
                    </div>
                    
                    {/* Seleção do idioma */}
                    <div>
                        
                    <TextReader text="Idioma">
                        <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 dark:text-white">Idioma</h3>
                        </TextReader>

                        <div className="flex justify-start items-center gap-3 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                </svg>

                                <TextReader text="Curiosidade">
                                <h2 className="font-bold text-xl md:text-2xl">Curiosidade</h2>
                                </TextReader>

                            </div>

                            <div className="font-manrope text-md leading-7 md:leading-10 flex flex-col gap-5">
                                
                            <TextReader text="Oferecer a opção de mudança de idioma em um site pode trazer diversos benefícios, principalmente relacionados à acessibilidade e à experiência do usuário. Aqui estão alguns pontos-chave:">
                                <p>Oferecer a opção de mudança de idioma em um site pode trazer diversos benefícios, principalmente relacionados à acessibilidade e à experiência do usuário. Aqui estão alguns pontos-chave:</p>
                                </TextReader>

                                <TextReader text="Acessibilidade: Para usuários que não são fluentes no idioma padrão do site, a opção de mudança de idioma pode facilitar a compreensão do conteúdo e melhorar a experiência de navegação.">
                                <p><strong>Acessibilidade:</strong> Para usuários que não são fluentes no idioma padrão do site, a opção de mudança de idioma pode facilitar a compreensão do conteúdo e melhorar a experiência de navegação.</p>
                                </TextReader>

                                <TextReader text="Inclusão: A opção de mudança de idioma torna o site mais inclusivo, permitindo que pessoas de diferentes origens e idiomas acessem o conteúdo sem barreiras linguísticas.">
                                <p><strong>Inclusão:</strong>  A opção de mudança de idioma torna o site mais inclusivo, permitindo que pessoas de diferentes origens e idiomas acessem o conteúdo sem barreiras linguísticas.</p>
                                </TextReader>

                                <TextReader text="lcance Global: Se o seu site tem alcance global, oferecer suporte a vários idiomas pode ajudar a alcançar um público mais amplo e diversificado.">
                                <p><strong>Alcance Global:</strong>  Se o seu site tem alcance global, oferecer suporte a vários idiomas pode ajudar a alcançar um público mais amplo e diversificado.</p>
                                </TextReader>

                                <TextReader text="Experiência do Usuário: Oferecer a opção de mudança de idioma demonstra cuidado com a experiência do usuário, permitindo que cada pessoa escolha o idioma mais confortável para interagir com o site.">
                                <p><strong>Experiência do Usuário:</strong>  Oferecer a opção de mudança de idioma demonstra cuidado com a experiência do usuário, permitindo que cada pessoa escolha o idioma mais confortável para interagir com o site.</p>
                                </TextReader>

                            </div>

                        <div className="flex justify-start items-center gap-3 mb-5 mt-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Descrição">
                                    <h2 className="font-bold text-xl md:text-2xl">Descrição</h2>
                                    </TextReader>

                                </div>
                        
                        <ul className="space-y-4">
                            
                            <li className="space-y-1">
                                <div className="flex items-center space-x-2">
                                
                                <TextReader text="Escolha seu idioma! Nossa página oferece suporte aos idiomas Português, Inglês e Espanhol. Escolha o idioma que preferir para acessar nosso conteúdo e desfrutar de uma experiência totalmente adaptada à sua preferência linguística. Com a opção de definir o idioma, você pode explorar nosso site com facilidade e compreender o conteúdo de forma clara e precisa, independentemente do idioma escolhido.">
                                    <h4 className="font-manrope text-md leading-7 md:leading-10">Escolha seu idioma! Nossa página oferece suporte aos idiomas Português, Inglês e Espanhol. Escolha o idioma que preferir para acessar nosso conteúdo e desfrutar de uma experiência totalmente adaptada à sua preferência linguística. Com a opção de definir o idioma, você pode explorar nosso site com facilidade e compreender o conteúdo de forma clara e precisa, independentemente do idioma escolhido.</h4>
                                    </TextReader>

                                </div>

                            </li>

                            <li className="space-y-1">
                                
                                <div className="flex items-center space-x-2">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Processo">
                                    <h4 className="font-bold text-xl md:text-2xl">Processo</h4>
                                    </TextReader>

                                </div>

                            </li>

                            <li className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Vídeo">
                                    <h4 className="font-bold text-xl md:text-2xl">Vídeo</h4>
                                    </TextReader>
                                </div>


                            </li>

                        </ul>
                    </div>

                    {/* Aplicação do VLibras para leitura do conteúdo em Libras */}
                    <div>
                        
                    <TextReader text="Libras">
                        <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 dark:text-white">Libras</h3>
                        </TextReader>

                        <div className="flex justify-start items-center gap-3 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                </svg>

                                <TextReader text="Curiosidade">
                                <h2 className="font-bold text-xl md:text-2xl">Curiosidade</h2>
                                </TextReader>

                            </div>

                            <div className="font-manrope text-md leading-7 md:leading-10 flex flex-col gap-5">
                                
                            <TextReader text="Implementar recursos de acessibilidade, como o VLibras, é fundamental para garantir que todas as pessoas possam acessar e interagir com o seu site, independentemente de suas limitações físicas ou cognitivas. Além de ser uma prática inclusiva, a implementação de recursos de acessibilidade pode trazer diversos benefícios, como:">
                                <p>Implementar recursos de acessibilidade, como o VLibras, é fundamental para garantir que todas as pessoas possam acessar e interagir com o seu site, independentemente de suas limitações físicas ou cognitivas. Além de ser uma prática inclusiva, a implementação de recursos de acessibilidade pode trazer diversos benefícios, como:</p>
                                </TextReader>

                                <TextReader text="mpla acessibilidade: A inclusão do VLibras permite que pessoas surdas ou com deficiência auditiva tenham acesso ao conteúdo do seu site, ampliando sua audiência e alcance.">
                                <p><strong>Ampla acessibilidade:</strong> A inclusão do VLibras permite que pessoas surdas ou com deficiência auditiva tenham acesso ao conteúdo do seu site, ampliando sua audiência e alcance.</p>
                                </TextReader>

                                <TextReader text="Conformidade legal: Em muitos países, incluindo o Brasil, existem leis que exigem a acessibilidade digital, como a Lei Brasileira de Inclusão da Pessoa com Deficiência (A Lei 13.146/2015 - Estatuto da Pessoa com Deficiência). A implementação do VLibras ajuda a cumprir essas regulamentações.">
                                <p><strong>Conformidade legal:</strong> Em muitos países, incluindo o Brasil, existem leis que exigem a acessibilidade digital, como a Lei Brasileira de Inclusão da Pessoa com Deficiência (A Lei 13.146/2015 - Estatuto da Pessoa com Deficiência). A implementação do VLibras ajuda a cumprir essas regulamentações.</p>
                                </TextReader>

                                <TextReader text="elhor experiência do usuário: Recursos de acessibilidade não beneficiam apenas pessoas com deficiência, mas também melhoram a experiência de todos os usuários. Por exemplo, legendas em vídeos podem ser úteis em ambientes barulhentos.">
                                <p><strong>Melhor experiência do usuário:</strong> Recursos de acessibilidade não beneficiam apenas pessoas com deficiência, mas também melhoram a experiência de todos os usuários. Por exemplo, legendas em vídeos podem ser úteis em ambientes barulhentos.</p>
                                </TextReader>

                                <TextReader text="Censo Demográfico: O último Censo Demográfico do IBGE, em 2010, identificou que aproximadamente 9,7 milhões de brasileiros têm algum tipo de deficiência auditiva. Embora nem todos usem a Libras como principal forma de comunicação, muitos têm essa língua como parte de suas vidas.">
                                <p><strong>Censo Demográfico:</strong> O último Censo Demográfico do IBGE, em 2010, identificou que aproximadamente 9,7 milhões de brasileiros têm algum tipo de deficiência auditiva. Embora nem todos usem a Libras como principal forma de comunicação, muitos têm essa língua como parte de suas vidas.</p>
                                </TextReader>

                            </div>

                        <div className="flex justify-start items-center gap-3 mb-5 mt-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Descriçãoe">
                                    <h2 className="font-bold text-xl md:text-2xl">Descrição</h2>
                                    </TextReader>

                                    

                                </div>
                        
                        <ul className="space-y-4">

                        <li className="space-y-1">

                                <div className="flex items-center space-x-2">
                                
                                <TextReader text="Suporte em Libras! Oferecemos suporte em Língua Brasileira de Sinais (Libras) para tornar nosso conteúdo acessível a pessoas surdas ou com deficiência auditiva. Com o suporte em Libras, você pode assistir a vídeos com tradução em Libras, garantindo que nosso conteúdo seja compreendido de forma clara e acessível. Estamos comprometidos em proporcionar uma experiência inclusiva para todos os usuários, independentemente de suas necessidades de acessibilidade.">
                                    <h4 className="font-manrope text-md leading-7 md:leading-10">Suporte em Libras! Oferecemos suporte em Língua Brasileira de Sinais (Libras) para tornar nosso conteúdo acessível a pessoas surdas ou com deficiência auditiva. Com o suporte em Libras, você pode assistir a vídeos com tradução em Libras, garantindo que nosso conteúdo seja compreendido de forma clara e acessível. Estamos comprometidos em proporcionar uma experiência inclusiva para todos os usuários, independentemente de suas necessidades de acessibilidade.</h4>
                                    </TextReader>

                                </div>

                            </li>
                            
                            <li className="space-y-1">
                                
                                <div className="flex items-center space-x-2">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Processo">
                                    <h4 className="font-bold text-xl md:text-2xl">Processo</h4>
                                    </TextReader>

                                </div>

                            </li>

                            <li className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Vídeo">
                                    <h4 className="font-bold text-xl md:text-2xl">Vídeo</h4>
                                    </TextReader>

                                </div>


                            </li>

                        </ul>
                    </div>

                    {/* Login simplificado */}
                    <div>
                        
                    <TextReader text="Logine">
                        <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 dark:text-white">Login</h3>
                        </TextReader>

                        <div className="flex justify-start items-center gap-3 mb-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Descrição">
                                    <h2 className="font-bold text-xl md:text-2xl">Descrição</h2>
                                    </TextReader>

                                </div>
                        
                        <ul className="space-y-4">
                            
                        <li className="space-y-1">

                                <div className="flex items-center space-x-2">
                                    

                                <TextReader text="Login fácil em apenas dois cliques! Utilize nossas plataformas parceiras para fazer login rapidamente, sem a necessidade de se cadastrar na SalesForce. Com apenas dois cliques, você terá acesso rápido e seguro aos nossos serviços, proporcionando uma experiência de login simplificada e conveniente.">
                                    <h4 className="font-manrope text-md leading-7 md:leading-10">Login fácil em apenas dois cliques! Utilize nossas plataformas parceiras para fazer login rapidamente, sem a necessidade de se cadastrar na SalesForce. Com apenas dois cliques, você terá acesso rápido e seguro aos nossos serviços, proporcionando uma experiência de login simplificada e conveniente.</h4>
                                    </TextReader>

                                </div>
                                
                                <div className="flex items-center space-x-2">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>


                                    <TextReader text="Processo">
                                    <h4 className="font-bold text-xl md:text-2xl">Processo</h4>
                                    </TextReader>

                                </div>

                            </li>

                            <li className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Vídeo">
                                    <h4 className="font-bold text-xl md:text-2xl">Vídeo</h4>
                                    </TextReader>

                                </div>


                            </li>
                        </ul>
                    </div>

                    {/* Chatbot */}
                    <div>
                        
                    <TextReader text="Chatbot">
                        <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 dark:text-white">Chatbot</h3>
                        </TextReader>

                        <div className="flex justify-start items-center gap-3 mb-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Descrição">
                                    <h2 className="font-bold text-xl md:text-2xl">Descrição</h2>
                                    </TextReader>

                                </div>
                        
                                <ul className="space-y-4">

                                    <div className="flex items-center space-x-2">
                                    
                                    <TextReader text="Conheça nosso chatbot! Disponível 24 horas por dia, nosso chatbot está pronto para ajudar com informações sobre nossos produtos e até mesmo preencher formulários de contato. Com o chatbot, você pode escolher entre interagir por texto ou por áudio, recebendo respostas claras e úteis em ambos os formatos. Com uma ampla gama de funcionalidades, nosso chatbot oferece uma experiência de suporte completa e acessível, adaptada às suas preferências de comunicação.">
                                        <h4 className="font-manrope text-md leading-7 md:leading-10">Conheça nosso chatbot! Disponível 24 horas por dia, nosso chatbot está pronto para ajudar com informações sobre nossos produtos e até mesmo preencher formulários de contato. Com o chatbot, você pode escolher entre <strong>interagir por texto ou por áudio, recebendo respostas claras e úteis em ambos os formatos</strong>. Com uma ampla gama de funcionalidades, nosso chatbot oferece uma experiência de suporte completa e acessível, adaptada às suas preferências de comunicação.</h4>
                                        </TextReader>

                                    </div>

                                    <li className="space-y-1">
                                            
                                            <div className="flex items-center space-x-2">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                </svg>

                                                <TextReader text="Processo">
                                                <h4 className="font-bold text-xl md:text-2xl">Processo</h4>
                                                </TextReader>

                                            </div>

                                    </li>

                                    <li className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>

                                            <TextReader text="Vídeo">
                                            <h4 className="font-bold text-xl md:text-2xl">Vídeo</h4>
                                            </TextReader>
                                        </div>


                                    </li>

                                </ul>
                    </div>

                    {/* Ajuste da fonte com o teclado*/}
                    <div>
                        
                    <TextReader text="Ajuste da fonte com o teclad">
                        <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 dark:text-white">Ajuste da fonte com o teclado</h3>
                        </TextReader>

                        <div className="flex justify-start items-center gap-3 mb-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Descrição">
                                    <h2 className="font-bold text-xl md:text-2xl">Descrição</h2>
                                    </TextReader>

                                </div>
                        
                                <ul className="space-y-4">

                                    <div className="flex items-center space-x-2">
                                    
                                    <TextReader text="Controle a fonte com facilidade! Ative a opção de aumentar ou diminuir a fonte dos textos usando apenas as teclas do teclado. Com a seta para cima, você aumenta o tamanho da fonte, e com a seta para baixo, você diminui. Uma vez ativada a opção, você terá esse recurso disponível em todas as páginas, permitindo uma experiência de leitura mais confortável e personalizada.">
                                        <h4 className="font-manrope text-md leading-7 md:leading-10">Controle a fonte com facilidade! Ative a opção de aumentar ou diminuir a fonte dos textos usando apenas as teclas do teclado. Com a seta para cima, você aumenta o tamanho da fonte, e com a seta para baixo, você diminui. Uma vez ativada a opção, você terá esse recurso disponível em todas as páginas, permitindo uma experiência de leitura mais confortável e personalizada.</h4>
                                        </TextReader>

                                    </div>

                                    <li className="space-y-1">
                                            
                                            <div className="flex items-center space-x-2">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                </svg>

                                                <TextReader text="Processo">
                                                <h4 className="font-bold text-xl md:text-2xl">Processo</h4>
                                                </TextReader>

                                            </div>

                                    </li>

                                    <li className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>

                                            <TextReader text="Vídeo">
                                            <h4 className="font-bold text-xl md:text-2xl">Vídeo</h4>
                                            </TextReader>
                                        </div>


                                    </li>

                                </ul>
                    </div>

                    {/* Vídeos com descrição */}
                    <div>
                        
                    <TextReader text="Vídeos com descrição<">
                        <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 dark:text-white">Vídeos com descrição</h3>
                        </TextReader>

                        <div className="flex justify-start items-center gap-3 mb-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Descrição">
                                    <h2 className="font-bold text-xl md:text-2xl">Descrição</h2>
                                    </TextReader>

                                </div>
                        
                                <ul className="space-y-4">

                                    <div className="flex items-center space-x-2">
                                    
                                    <TextReader text="Assista a vídeos com acessibilidade! Nossos vídeos estão disponíveis com legendas para facilitar a compreensão. Além disso, oferecemos uma descrição do conteúdo abaixo do vídeo para explicar o que está sendo apresentado, caso a pessoa não possa ler as legendas. Dessa forma, garantimos que nosso conteúdo seja acessível a todos os públicos, independentemente de suas necessidades de acessibilidade.">
                                        <h4 className="font-manrope text-md leading-7 md:leading-10">Assista a vídeos com acessibilidade! Nossos vídeos estão disponíveis com legendas para facilitar a compreensão. Além disso, oferecemos uma descrição do conteúdo abaixo do vídeo para explicar o que está sendo apresentado, caso a pessoa não possa ler as legendas. Dessa forma, garantimos que nosso conteúdo seja acessível a todos os públicos, independentemente de suas necessidades de acessibilidade.</h4>
                                        </TextReader>

                                    </div>

                                    <li className="space-y-1">
                                            
                                            <div className="flex items-center space-x-2">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                </svg>

                                                <TextReader text="Processo">
                                                <h4 className="font-bold text-xl md:text-2xl">Processo</h4>
                                                </TextReader>

                                            </div>

                                    </li>

                                    <li className="space-y-1 pb-20 md:pb-0">
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-[#3EA0E7]">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>

                                            <TextReader text="Vídeo">
                                            <h4 className="font-bold text-xl md:text-2xl">Vídeo</h4>
                                            </TextReader>
                                        </div>


                                    </li>

                                </ul>
                    </div>

                </div>

            </div>

        </section>
    );

}