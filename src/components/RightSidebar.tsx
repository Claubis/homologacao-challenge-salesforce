  import React, { useState, useEffect } from 'react';
  import { FolderMinusIcon, MoonIcon, CogIcon, GlobeAltIcon, ArrowUpIcon, ArrowDownIcon,ChatBubbleBottomCenterIcon, MegaphoneIcon, MicrophoneIcon } from '@heroicons/react/20/solid';
  import { useContext } from 'react';

  /* Importação dos componentes */
  import { useChangeLanguage } from './useChangeLanguage';

  const solutions = [
    { name: 'Documentação', description: 'Conheça o que foi criado e como utilizar cada recurso para acessibilidade', href: '/Documentation', icon: FolderMinusIcon},
    { name: 'Tema', description: 'Defina entre claro ou escuro',href: '#', icon: MoonIcon, action: 'toggleDarkMode' },
    // { name: 'Configuração', description: "Ajuste a cor das fontes", href: '#', icon: CogIcon },
    { name: 'Idioma', description: 'Defina o idioma da sua página', href: '/Idioma', icon: GlobeAltIcon, action:'ChangeLanguage' },
    { name: 'Aumentar fonte', description: 'Defina o tamanho da fonte usando a seta para cima para aumentar a fonte', href: '#', icon: ArrowUpIcon, action: 'toggleFontIncrease' },
    { name: 'Diminuir fonte', description: 'Defina o tamanho da fonte usando seta para baixo para diminuir a fonte', href: '#', icon: ArrowDownIcon, action: 'toggleFontDecrease' },
    {name: 'ChatBot', description: 'Contato 24 horas por dia, sobre qualquer assunto.', href: '#', icon: ChatBubbleBottomCenterIcon, action: 'CustomChat' },
    {name: 'Suporte Fala', description: 'Contato 24 horas por dia, sobre qualquer assunto.', href: '#', icon: MegaphoneIcon, action: 'toggleStopText' },
    // {name: 'Pesquisar', description: 'Para parar o suporte de fala, precisa clicar aqui', href: '#', icon: MicrophoneIcon, action: 'toggleFontDecrease' },
  ];

  const Sidebar: React.FC = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const [isReadingEnabled, setIsReadingEnabled] = useState(false);

    // Para ajuste das fontes
    const [isFontUpEnabled, setIsFontUpEnabled] = useState(false);
    const [ isFontDownEnabled, setIsFontDownEnabled ] = useState(false);

    /* Desabilitar o scroll quando a fonte tiver ativada, por padrão ficará ativada, assim que ativar ou aumentar ou diminuir
    a fonte, será desabilitado o scroll 
    */
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);

    // Para alterar o idioma
    const { isLanguageOn, toggleAlterLanguage } = useChangeLanguage();

    const [isChatOpen, setIsChatOpen] = useState(false);


    useEffect(() => { 
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const toggleExpand = () => {
      setExpanded(!expanded);
    };

    // Ajuste para aumentar a fonte
    const toggleFontIncrease = () => {
      setIsFontUpEnabled(prevState => {
        const newState = !prevState;
        localStorage.setItem('isFontUpEnabled', String(newState));
        return newState;
      });
    };

    useEffect(() => {
      const storedValue = localStorage.getItem('isFontUpEnabled');
      setIsFontUpEnabled(storedValue === 'true');
    }, []);

    // Ajuste para diminuir a fonte
    const toggleFontDecrease = () => {
      setIsScrollEnabled(false); // Desabilita o scroll
      setIsFontDownEnabled(prevState => {
        const newStateDecrease = !prevState;
        localStorage.setItem('isFontDownEnabled', String(newStateDecrease));
        return newStateDecrease;
      });
    };

    useEffect(() => {
      const storedValueDecrease = localStorage.getItem('isFontDownEnabled');
      setIsFontDownEnabled(storedValueDecrease === 'true');
    }, []);
    
    // Ativar ou desativar as ações
    const handleClick = (action: string | undefined, href: string) => {

      // Isso interrompe a função se action for undefined
      if (!action) return;

      switch (action) {
        case 'toggleDarkMode':
          const htmlElement = document.documentElement;
          const isDarkMode = htmlElement.classList.contains('dark');
          htmlElement.classList.toggle('dark', !isDarkMode);
          break;
            

        case 'toggleFontIncrease':
          // Ativar ou desativar a ação de aumentar a fonte
          toggleFontIncrease();
          break;

        case 'toggleFontDecrease':
          // Ativar ou desativar a ação de diminuir a fonte
          toggleFontDecrease();
          break;
        
        case 'ChangeLanguage':
        // Ativar ou desativar a ação de diminuir a fonte
          toggleAlterLanguage();
        break;  

        case 'CustomChat':
          setIsChatOpen(true); // Altera o estado para exibir o chatbot
      break;
        
        default:
            console.log('Ação não reconhecida:', action);
      
      }
    };



    return (
      <nav
        className={`fixed ${isMobile ? 'bottom-0 left-0 w-full flex justify-between' : 'top-0 right-0'} bg-gray-800 p-4 ${isMobile ? 'md:hidden' : 'hidden md:flex md:flex-col md:justify-start md:h-full'}`}
        onMouseEnter={() => !isMobile && setExpanded(true)}
        onMouseLeave={() => !isMobile && setExpanded(false)}
        onClick={toggleExpand}
      >
        {solutions.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="text-white flex items-center p-2 hover:bg-gray-700"
          onClick={() => handleClick(item.action, item.href)} 
        >
          <item.icon className="h-6 w-6 mr-2" />
          <span className={expanded && !isMobile ? 'block' : 'hidden'}>{item.name}</span>
        </a>
      ))}
      
      </nav>

      
    );
    
  };

  export default Sidebar;
