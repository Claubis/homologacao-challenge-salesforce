
/* Importação de componentes */
import TextReader from "./TextReader";

export default function InfoSalesForce(){
    return(

        <section className="dark:bg-gray-100 dark:text-gray-800">
            
            <div className="container md:px-6 md:py-12 mx-auto">
                
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <img src="/assets/Details/imagem5.png" alt="Imagem da pesquisa sobre a SalesForce" />
                    </div>


                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md dark:bg-gray-50">

                                    <TextReader text="Personalização poderosa: A Salesforce permite uma personalização sem precedentes para atender às necessidades específicas de cada negócio, garantindo que cada interação com o cliente seja tão eficaz quanto possível">
                                    <p id="text40" tabIndex={39}><strong>Personalização poderosa:</strong> A Salesforce permite uma personalização sem precedentes para atender às necessidades específicas de cada negócio, garantindo que cada interação com o cliente seja tão eficaz quanto possível</p>
                                    </TextReader>
                                    <div className="flex items-center mt-4 space-x-4">
                                        
                                        <img src="/assets/Details/imagem8.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />

                                        <div>
                                            <TextReader text="Inteligência Artificia">
                                            
                                            <p id="text41" tabIndex={40} className="text-lg font-semibold">Inteligência Artificial</p>

                                            </TextReader>

                                            <TextReader text=">Com Einstein">
                                                <p id="text42" tabIndex={41} className="text-sm dark:text-gray-600">Com Einstein</p>
                                            </TextReader>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                
                                <TextReader text="Inovação contínua: Com atualizações regulares e uma dedicação à inovação, a Salesforce está sempre na vanguarda da tecnologia CRM, oferecendo aos seus usuários novas funcionalidades e melhoria">
                                    <p id="text43" tabIndex={42}><strong>Inovação contínua:</strong> Com atualizações regulares e uma dedicação à inovação, a Salesforce está sempre na vanguarda da tecnologia CRM, oferecendo aos seus usuários novas funcionalidades e melhorias.</p>
                                    </TextReader>
                                    <div className="flex items-center mt-4 space-x-4">
                                        
                                        <img src="/assets/Details/imagem3.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />

                                        <div>
                                            <TextReader text="Atendimento ao cliente">
                                                <p id="text44" tabIndex={43} className="text-lg font-semibold">Atendimento ao cliente</p>
                                            </TextReader>

                                            <TextReader text="Vendas personalizada">
                                                <p id="text45" tabIndex={44} className="text-sm dark:text-gray-600">Vendas personalizadas</p>
                                            </TextReader>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md dark:bg-gray-50">

                                <TextReader text="Um ecossistema abrangente: A Salesforce não é apenas uma aplicação, mas um ecossistema completo. Através do Salesforce AppExchange, empresas podem acessar milhares de aplicativos integrados para expandir e personalizar sua plataforma Salesforce.">
                                    <p id="text46" tabIndex={45}><strong>Um ecossistema abrangente:</strong> A Salesforce não é apenas uma aplicação, mas um ecossistema completo. Através do Salesforce AppExchange, empresas podem acessar milhares de aplicativos integrados para expandir e personalizar sua plataforma Salesforce.</p>

                                    </TextReader>

                                    <div className="flex items-center mt-4 space-x-4">
                                        
                                        <img src="/assets/Details/imagem7.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />

                                        <div>

                                        <TextReader text="Customer 360">
                                            <p id="text47" tabIndex={46} className="text-lg font-semibold">Customer 360</p>
                                            </TextReader>

                                            <TextReader text="Encontre tudo o que precisa">
                                            <p id="text48" tabIndex={47} className="text-sm dark:text-gray-600">Encontre tudo o que precisa</p>
                                            </TextReader>

                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded shadow-md dark:bg-gray-50">

                                    <TextReader text="Cloud computing:  Sendo uma plataforma baseada na nuvem, a Salesforce oferece flexibilidade e acessibilidade incomparáveis, permitindo que as equipes acessem dados críticos de qualquer lugar, a qualquer hora, impulsionando a produtividade e a colaboração.">
                                    <p id="text49" tabIndex={48}><strong>Cloud computing:</strong>  Sendo uma plataforma baseada na nuvem, a Salesforce oferece flexibilidade e acessibilidade incomparáveis, permitindo que as equipes acessem dados críticos de qualquer lugar, a qualquer hora, impulsionando a produtividade e a colaboração.</p>
                                    </TextReader>

                                    <div className="flex items-center mt-4 space-x-4">
                                        
                                        <img src="/assets/Details/imagem2.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />

                                        <div>

                                        <TextReader text="Cloud Services">
                                            <p id="text50" tabIndex={49} className="text-lg font-semibold">Cloud Services</p>
                                            </TextReader>

                                            <TextReader text=">Sales Clound diferente">
                                            <p id="text51" tabIndex={50} className="text-sm dark:text-gray-600">Sales Clound diferente</p>
                                            </TextReader>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}