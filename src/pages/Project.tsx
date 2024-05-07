
/* Importações gerais  */
import Image from "next/image";

/* Importações de componentes */
import TextReader from '../components/TextReader'

export default function Project(){
    return(
        
        <section className="dark:bg-gray-700 dark:text-white md:mt-20">

            <div className="max-w-6xl md:p-6 md:mx-auto md:space-y-6">
                
                <div rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">

                        <Image src="/assets/Project/logo3.png" alt="Imagem do logo da Tokito Techs" className="object-cover rounded lg:col-span-7 md:ml-20 p-6 md:p-0" width={500} height={500} />


                    <div className="p-6 space-y-2 lg:col-span-5">
                        
                        <TextReader text="Conheça nosso diferencial">
                            <h3 className="text-4xl font-bold">Conheça nosso diferencial</h3>
                        </TextReader>
                     
                        <TextReader text="Nosso time pensou e trabalhou em várias soluções que acreditamos fazer a diferença para a navegação do usuário e melhorar sua experiência.">
                        <p className="font-manrope pt-5 text-lg">Nosso time pensou e trabalhou em várias soluções que acreditamos fazer a diferença para a navegação do usuário e melhorar sua experiência.</p>
                        </TextReader>

                        <TextReader text="Nosso objetivo de proporcionar simplicidade na resolução de dúvidas, agilidade no contato e gerar leads com maior eficácia, sempre priorizando a experiência do cliente e a acessibilidade.">
                        <p className="font-manrope text-lg">Nosso objetivo de proporcionar simplicidade na resolução de dúvidas, agilidade no contato e gerar leads com maior eficácia, sempre priorizando a experiência do cliente e a acessibilidade.</p>
                        </TextReader>

                    </div>
                </div>


                <TextReader text="Criações gerais para o site">
                    <h1 className="font-bold text-4xl p-8 md:p-0 uppercase">Criações gerais para o site:</h1>
                </TextReader>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6 md:p-0">
                    

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/layout.svg" alt="Imagem sobre o projeto" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Layout estilizado">
                            <h3 className="text-xl font-bold text-start group-hover:underline group-focus:underline">Layout estilizado</h3>
                            </TextReader>
                        
                            <TextReader text="Layout diáfano, com enfâse na estética, funcionalidade e acessibilidade. Facilitando a visualização das informações mais relevantes">
                            <p className="font-manrope text-md">Layout diáfano, com enfâse na estética, funcionalidade e acessibilidade. Facilitando a visualização das informações mais relevantes.</p>
                            </TextReader>

                        </div>

                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/tour-guiado.svg" alt="Imagem sobre o projeto" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Tour guiado interativo">
                                <h3 className="text-xl font-bold text-start group-hover:underline group-focus:underline">Tour guiado interativo</h3>
                            </TextReader>
                            
                            <TextReader text="Tour pelos produtos oferecidos, para uma melhor experiência e precisão no serviço desejado. Visitante escolhe entre aprender com textos, vídeos ou conversando com agente virtual.">
                            <p className="font-manrope text-md">Tour pelos produtos oferecidos, para uma melhor experiência e precisão no serviço desejado. Visitante escolhe entre aprender com textos, vídeos ou conversando com agente virtual.</p>
                            </TextReader>

                        </div>

                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-cover w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/bots.svg" alt="Imagem sobre o projeto" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="ChatBot">
                                <h3 className="text-xl font-bold text-start group-hover:underline group-focus:underline">ChatBot</h3>
                            </TextReader>
                            
                            <TextReader text="Suporte com maior refinamento, tendo mais precisão com menor burocracia. Sanando dúvidas pontuais, com maior acertividade e sem necessidade de uma pessoa/consultor.">
                            <p className="font-manrope text-md">Suporte com maior refinamento, tendo mais precisão com menor burocracia. Sanando dúvidas pontuais, com maior acertividade e sem necessidade de uma pessoa/consultor.</p>
                            </TextReader>

                            <TextReader text="Conheça">
                                <span className="font-sen text-md cursor-pointer hover:text-red-400">Conheça</span>
                            </TextReader>

                        </div>

                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/contato.svg" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Contato 24 horas">
                                <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Contato 24 horas</h3>
                            </TextReader>
                            
                            <TextReader text="O cliente vai poder se comunicar e tirar suas dúvidas sobre os produtos a qualquer momento do dia e em qualquer idioma com a configuração da página.">
                                <p className="font-manrope text-md">O cliente vai poder se comunicar e tirar suas dúvidas sobre os produtos a qualquer momento do dia e em qualquer idioma com a configuração da página.</p>
                            </TextReader>

                        </div>

                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/experiencia.svg" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Experiência do client">
                                <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Experiência do cliente</h3>
                            </TextReader>
                            
                            <TextReader text="Queremos computar toda a experiência do visitante durante o acesso ao site, para sabermos quais os produtos ele pesquisou, quanto tempo ficou pesquisando e que tipos de pergunta fez ao CHATBOT">
                                <p className="font-manrope text-md">Queremos computar toda a experiência do visitante durante o acesso ao site, para sabermos quais os produtos ele pesquisou, quanto tempo ficou pesquisando e que tipos de pergunta fez ao CHATBOT.</p>
                            </TextReader>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/gmail.svg" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Login simples">
                                <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Login simples</h3>
                            </TextReader>
                            
                            <TextReader text="Em apenas dois cliques, o visitante pode fazer o login usando sua conta de plataformar parceiras. Utilizando Google, Linkedin ou GitHub. Isso evita preencher formulários desnecessários.">
                                <p className="font-manrope text-md">Em apenas dois cliques, o visitante pode fazer o login usando sua conta de plataformar parceiras. Utilizando Google, Linkedin ou GitHub. Isso evita preencher formulários desnecessários.</p>
                            </TextReader>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/feedback.svg" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Formulário de feedback">
                                <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Formulário de feedback</h3>
                            </TextReader>
                            
                            <TextReader text="Foi criado e disponibilizado uma sessão para que a opinião do usuário seja disponibilizada. Seja para realizar elogios, reclamações ou sugestões para melhorias dos nossos processos e serviços.">
                                <p className="font-manrope text-md">Foi criado e disponibilizado uma sessão para que a opinião do usuário seja disponibilizada. Seja para realizar elogios, reclamações ou sugestões para melhorias dos nossos processos e serviços.</p>
                            </TextReader>
                        </div>
                    </div>

                </div>

                <TextReader text="Criações com foco em acessibilidade:">
                    <h1 className="font-bold text-4xl p-8 md:p-0 uppercase">Criações com foco em acessibilidade:</h1>
                </TextReader>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                            
                            <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/documetation.svg" alt="Imagem sobre o projeto" />
                            
                            <div className="p-6 space-y-2">
                                
                                <TextReader text="Documentação">
                                    <h3 className="text-xl font-bold text-start group-hover:underline group-focus:underline">Documentação</h3>
                                </TextReader>
                                
                                <TextReader text="Foi criado uma página onde teremos todo o processo que foi disponibilizado para guiar o usuário na navegação e ensinar o que foi implantado. teremos textos, vídeos e áudio para explicar sobre os detalhes para sua jornada.">
                                    <p className="font-manrope text-md">Foi criado uma página onde teremos todo o processo que foi disponibilizado para guiar o usuário na navegação e ensinar o que foi implantado. teremos textos, vídeos e áudio para explicar sobre os detalhes para sua jornada.</p>
                                </TextReader>   
                            </div>

                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                            
                            <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/videos.svg" alt="Imagem sobre o projeto" />
                            
                            <div className="p-6 space-y-2">
                                
                                <TextReader text="Vídeos com transcrição">
                                    <h3 className="text-xl font-bold text-start group-hover:underline group-focus:underline">Vídeos com transcrição</h3>
                                </TextReader>
                                
                                <TextReader text="Todos nossos vídeos terão descrição dentro ou fora do vídeo. Isso vai permitir o usuário a aprender e assistir da melhor forma e será simples para todos, com ou sem deficiência.">
                                <p className="font-manrope text-md">Todos nossos vídeos terão descrição dentro ou fora do vídeo. Isso vai permitir o usuário a aprender e assistir da melhor forma e será simples para todos, com ou sem deficiência.</p>
                                </TextReader>

                            </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/focus.svg" alt="Imagem sobre o projeto" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Tour guiado pelo teclado">
                                <h3 className="text-xl font-bold text-start group-hover:underline group-focus:underline">Tour guiado pelo teclado</h3>
                            </TextReader>
                            
                            <TextReader text="O usuário vai poder navegar usando o teclado e cada campo ficará em foco. Cada processo terá um caminho lógico e que passe em todos os lugares conforme ele definir.">
                            <p className="font-manrope text-md">O usuário vai poder navegar usando o teclado e cada campo ficará em foco. Cada processo terá um caminho lógico e que passe em todos os lugares conforme ele definir.</p>
                            </TextReader>

                        </div>

                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/chat-acessibility.svg" alt="Imagem sobre o projeto" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="ChatBot - Personalizado">
                                <h3 className="text-xl font-bold text-start group-hover:underline group-focus:underline">ChatBot - Personalizado</h3>
                            </TextReader>
                            
                            <TextReader text="Com suporte para tirar dúvidas por texto e aúdio. O usuário pode escrever e ter respostas em texto ou aúdio de definir. Pode enviar duas dúvidas em áudio e ter as respostas por textos ou áudios. Simples e apenas definindo o comando com uma linha ou ação.">
                            <p className="font-manrope text-md">Com suporte para tirar dúvidas por texto e aúdio. O usuário pode escrever e ter respostas em texto ou aúdio de definir. Pode enviar duas dúvidas em áudio e ter as respostas por textos ou áudios. Simples e apenas definindo o comando com uma linha ou ação.</p>
                            </TextReader>

                        </div>

                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/acessibilty.svg" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Leitura em Libra">
                                <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Leitura em Libras</h3>
                            </TextReader>
         
                            <TextReader text="Através de um módulo aplicado no nosso site, o usuário pode ter o conteúdo traduzido em libras sem limite de tempo ou de conteúdos. Basta selecionar o que deseja descrever e a nossa solução irá fazer.">
                            <p className="font-manrope text-md">Através de um módulo aplicado no nosso site, o usuário pode ter o conteúdo traduzido em libras sem limite de tempo ou de conteúdos. Basta selecionar o que deseja descrever e a nossa solução irá fazer.</p>
                            </TextReader>

                        </div>
                    </div>


                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/tema.svg" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Alteração do Tema">
                                <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Alteração do Tema</h3>
                            </TextReader>
         
                            <TextReader text="Para uma melhor leitura do conteúdo, o usuário pode definir entre claro o escuro o tema da sua tela. Esse ajuste pode ajudar sua visão e melhor compreenção do conteúdo.">
                            <p className="font-manrope text-md">Para uma melhor leitura do conteúdo, o usuário pode definir entre claro o escuro o tema da sua tela. Esse ajuste pode ajudar sua visão e melhor compreenção do conteúdo.</p>
                            </TextReader>

                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/arrowup.svg" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Tamanho da fonte">
                            <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Tamanho da fonte</h3>
                            </TextReader>
         
                            <TextReader text="Utilizando as setas do teclado, o usuário pode ativar o ajuste de aumentar ou diminuir as fontes do site. Utilizando a seta para cima, ele aumenta o tamanho e a seta para baixo para diminuir a fonte.">
                            <p className="font-manrope text-md">Utilizando as setas do teclado, o usuário pode ativar o ajuste de aumentar ou diminuir as fontes do site. Utilizando a seta para cima, ele aumenta o tamanho e a seta para baixo para diminuir a fonte.</p>
                            </TextReader>

                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/reader.svg" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Leitura do texto">
                                <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Leitura do texto</h3>
                            </TextReader>
         
                            <TextReader text="O Usuário pode definir se deseja que seja lido os conteúdos para ele. Ao ativar essa opção, quando ele selecionar um texto específico, será utilizado um áudio para descrever o conteúdo.">
                            <p className="font-manrope text-md">O Usuário pode definir se deseja que seja lido os conteúdos para ele. Ao ativar essa opção, quando ele selecionar um texto específico, será utilizado um áudio para descrever o conteúdo.</p>
                            </TextReader>

                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/idioma.svg" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Definição do idioma">
                            <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Definição do idioma</h3>
                            </TextReader>
         
                            <TextReader text="Escolha seu idioma favorito ou que mais simplifique aprender sobre o conteúdo do nosso site.">
                            <p className="font-manrope text-md">Escolha seu idioma favorito ou que mais simplifique aprender sobre o conteúdo do nosso site.</p>
                            </TextReader>

                        </div>
                    </div>

                </div>

                <TextReader text="Criações com foco em gerar lead:">
                <h1 className="font-bold text-4xl p-8 md:p-0 uppercase">Criações com foco em gerar lead:</h1>
                </TextReader>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                            
                            <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/formulario.svg" />
                            
                            <div className="p-6 space-y-2">
                                
                                <TextReader text="Formulário de Descobert">
                                <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Formulário de Descoberta</h3>
                                </TextReader>

                                <TextReader text="Quando o visitante não souber qual o melhor produto para sua empresa, será direcionado um formulário que ajudará na definição dos produtos conforme sua resposta.">
                                <p className="font-manrope text-md">Quando o visitante não souber qual o melhor produto para sua empresa, será direcionado um formulário que ajudará na definição dos produtos conforme sua resposta.</p>
                                </TextReader>

                            </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/rank.svg" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Rankeamento">
                            <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Rankeamento</h3>
                            </TextReader>

                            <TextReader text="De acordo com as análises feitas utilizando IA, vamos inserir pontos ao visitante e assim saber se ele é um possível cliente ou não. Cada interação conta aqui, cada cliente, cada pergunta realizada.">
                            <p className="font-manrope text-md">De acordo com as análises feitas utilizando IA, vamos inserir pontos ao visitante e assim saber se ele é um possível cliente ou não. Cada interação conta aqui, cada cliente, cada pergunta realizada.</p>
                            </TextReader>

                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  flex flex-col sm:block">
                        
                        <img role="presentation" className="object-fill w-full rounded h-44 hover:bg-gray-200 p-5 border" src="/assets/Project/data.svg" />
                        
                        <div className="p-6 space-y-2">
                            
                            <TextReader text="Dados acessíveis">
                            <h3 className="text-xl font-bold group-hover:underline group-focus:underline text-start">Dados acessíveis</h3>
                            </TextReader>
         
                            <TextReader text="Consulta no banco de dados sem precisar entender de código, com os leads mais simples e consultas mais rápidas.">
                            <p className="font-manrope text-md">Consulta no banco de dados sem precisar entender de código, com os leads mais simples e consultas mais rápidas.</p>
                            </TextReader>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}