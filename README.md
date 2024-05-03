## Acessibilidade: Funcionalidades do Projeto

O projeto visa implementar soluções de acessibilidade abrangentes, contemplando os seguintes recursos:

1. Leitor de Tela Adaptável: Permitirá que o usuário selecione partes específicas do texto para leitura por voz, oferecendo tanto cobertura parcial quanto total do conteúdo exibido.

2. Modos de Tema Ajustáveis: Os usuários terão a opção de alternar entre temas claros e escuros. Essa funcionalidade é projetada para melhorar a legibilidade do conteúdo, adaptando-se às preferências individuais de visualização.

3. Suporte em Libras: Para aprimorar a acessibilidade para usuários com deficiência auditiva, será incorporado um recurso de suporte em Língua Brasileira de Sinais (Libras), facilitando a compreensão do conteúdo das páginas durante a navegação.

4. Controle de Fonte e Cor via Teclado: Os usuários poderão ajustar o tamanho e a cor da fonte utilizando simples comandos de teclado, como as setas para cima e para baixo, personalizando a visualização de acordo com suas necessidades.

5. Apresentação Unificada de Dados dos Produtos: Será disponibilizada uma interface singular para apresentação dos dados dos produtos, permitindo que o usuário escolha o formato de aprendizado preferido entre texto, vídeo ou interação com um chatbot, que suporta comandos de texto e voz.

6. Pesquisa Aprimorada na Barra de Navegação: A barra de navegação permitirá pesquisas tanto por texto quanto por voz, simplificando e tornando a navegação mais intuitiva.

7. Fase de Testes e Feedback: Inicialmente, serão desenvolvidos projetos piloto para testar as funcionalidades de acessibilidade. Esses testes serão conduzidos por meio de vídeos tutoriais que ensinam a utilizar as novas funcionalidades do site. Através de relatórios de feedback, coletaremos impressões dos usuários para avaliar a eficácia das soluções implementadas e realizar ajustes conforme necessário.

## Detalhamento do Projeto e Componentes em Desenvolvimento

1. VLibras: Tradução Automática para Acessibilidade Web
Objetivo: Tornar dispositivos digitais e plataformas web mais acessíveis para pessoas surdas, através da tradução automática para Libras.

2. Personalizações Disponíveis:

2.1 Seleção de Tema: O usuário pode escolher entre temas claro (branco) e escuro (cinza), melhorando a legibilidade do texto de acordo com a preferência individual.
2.2 Ajuste do Tamanho da Fonte: Facilita a leitura ao permitir que os usuários ajustem o tamanho da fonte conforme necessário.
Seleção da Cor do Texto: Os usuários podem personalizar a cor do texto para melhorar a legibilidade, de acordo com suas necessidades visuais.

Essas inovações buscam promover uma experiência online mais inclusiva, garantindo que todos os usuários, independentemente de suas necessidades específicas, possam navegar com facilidade e conforto.

# Falar aqui sobre o ajuste do tema


# Explicar o processo de alteração do idioma

1. npm install --save-dev typescript @types/react @types/node
2. 


# Processo do VLibras
1. Instalar biblioteca: npm install @djpfs/react-vlibras
2. Chamar a aplicação no _app.tsx: import VLibras from '@djpfs/react-vlibras';
3. Agora ao abrir quando a aplicação estiver rodando (npm start) ele permite ao usuário selecionar o conteúdo que ele
deseja e após isso, o personagem começa a descrever em Libras sobre o conteúdo selecionado.

# Processo do NavForm
1. Primeiro instalar as bibliotecas de icones e de suportes
2. npm install @headlessui/react @heroicons/react
3. Imporrtar o conteúdo no documento: import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
4. Para cada icone que eu precisar, só ir na pasta que foi baixada dentro da pasta Next e selecionar o nome. Exemplo: ChevronDownIcon

# NavSolution
1. Instalar a bilioteca npm install @headlessui/react @heroicons/react


# Integração do Chatbot
Os acessos estão diretos pelo Watson Assistant

1. Acessos:
API: YqqGTY1pxYgPQZYVDwHt2zcJ0qUT3nislRVJDjutJplS
URL:https://api.us-east.assistant.watson.cloud.ibm.com/instances/e0771cd9-c1d2-4b8e-b057-f554aa3c898e

2. Watson:
Assistant name: Sales force bot
Assistant ID: 742a7fa8-273d-4074-86a2-4e30f2830c70
URL:https://api.us-east.assistant.watson.cloud.ibm.com/v2/assistants/742a7fa8-273d-4074-86a2-4e30f2830c70/sessions 

3. Link para o TTS:
API: TnUcB2uO15M4TMNQSj_NQnPwwGG_qP_7iQRpTzrKIwh9
URL: https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/3c52d93e-e3e4-4344-9dd1-ba2fd8520811

4. Link para o STT:
API: fR6Ip2YoIT6g5BILmqY89Ey9wvlcELc9Y-V1CNCttwDL
URL: https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/bfcc14fb-7741-4c32-aaa3-9651749530c9

5. Para realizar a integração
<script>
  window.watsonAssistantChatOptions = {
    integrationID: "7d8de930-1074-4862-94a9-31d2d9d27760", // The ID of this integration.
    region: "us-east", // The region your integration is hosted in.
    serviceInstanceID: "e0771cd9-c1d2-4b8e-b057-f554aa3c898e", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
</script>

6. Criar uma interface no globals.d.ts que fica na pasta context
// types/globals.d.ts
interface Window {
  watsonAssistantChatOptions?: {
    integrationID: string;
    region: string;
    serviceInstanceID: string;
    clientVersion?: string;
    onLoad: (instance: any) => Promise<void>;
  };
}

7. Ajustar o arquivo tsconfig.json e inserir no campo compilerOptions: "typeRoots": ["./node_modules/@types", "./types"]


## Criação da API em Node

npm install express

Rota:
meu-projeto/
├── node_modules/
├── public/
├── src/
├── server/
│   └── api.js
├── .gitignore
├── package-lock.json
└── package.json

Dentro do arquivo api.js

// api.js
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/mensagem', (req, res) => {
    res.json({ mensagem: 'Olá, mundo!' });
});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});

Para complementar:
npm install cors


