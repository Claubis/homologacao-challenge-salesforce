"use client"

/* Instalar
npm install @headlessui/react @heroicons/react

*/

import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, ArrowUpIcon, ArrowDownIcon, FolderMinusIcon, ArrowRightStartOnRectangleIcon  } from '@heroicons/react/20/solid'
import { GlobeAltIcon, MoonIcon, Cog6ToothIcon, MegaphoneIcon  } from '@heroicons/react/24/outline'

/* Importações geais */
import Link from 'next/link';

/* Importação dos componentes */
import { useToggleFontIncrease } from './useToggleFontIncrease';
import { useToggleFontDecrease } from './useToggleFontDecrese';
import { useChangeLanguage } from './useChangeLanguage';
import { useTextReader } from './useTextReader';
import TextReader from './TextReader'

export default function NavSolution() {

  const [isReadingEnabled, setIsReadingEnabled] = useState(false);

  // Para ajuste das fontes
  const { isFontUpEnabled, toggleFontIncrease } = useToggleFontIncrease();
  const { isFontDownEnabled, toggleFontDecrease } = useToggleFontDecrease();

  // Para alterar o idioma
  const { isLanguageOn, toggleAlterLanguage } = useChangeLanguage();

  // Ativar leitor de tela
  const { isTextReaderOn, toggleTextReaderOn } = useTextReader();
 
  const solutions = [
    { name: 'Documentação', description: 'Conheça o que foi criado e como utilizar cada recurso para acessibilidade', href: '/Documentation', icon: FolderMinusIcon},
    { name: 'Navegação com TAB', description: 'Navegue pelos nossos conteúdos utilizando a tecla TAB. Cada sessão e conteúdo que você acessar ficará em foco e destacado, facilitando a seleção e ação que você deseja realizar.', href: '/Documentation', icon: ArrowRightStartOnRectangleIcon},
    { name: 'Tema', description: 'Defina entre claro ou escuro', href: '#', icon: MoonIcon, action: 'toggleDarkMode' },
    { name: 'Leitor de tela', description: 'Leitura parcial ou total dos textos disponíveis na nossa página', href: '#', icon: MegaphoneIcon, action: 'useTextReader'  },
    { name: 'Configuração', description: "Ajuste a cor das fontes", href: '#', icon: Cog6ToothIcon },
    { name: 'Idioma', description: 'Defina o idioma da sua página', href: '/ModalIdioma', icon: GlobeAltIcon, action:'ChangeLanguage' },
    { name: 'Aumentar fonte', description: 'Defina o tamanho da fonte usando a seta para cima para aumentar a fonte', href: '#', icon: ArrowUpIcon, action: 'useToggleFontIncrease' },
    { name: 'Diminuir fonte', description: 'Defina o tamanho da fonte usando seta para baixo para diminuir a fonte', href: '#', icon: ArrowDownIcon, action: 'useToggleFontDecrease' },
  ]

  const callsToAction = [
    { name: 'Demonstração', href: '#', icon: PlayCircleIcon },
    { name: 'Contato agora', href: '#', icon: PhoneIcon },
  ]

  // Ajuste do tema para claro ou escuro
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  // Ajuste para ler o conteúdo usando fala
  const toggleReader = () => {
    setIsReadingEnabled(!isReadingEnabled);
  };

  
  const handleClick = (action: string | undefined, href: string) => {

    // Isso interrompe a função se action for undefined
    if (!action) return;

    switch (action) {
      case 'toggleDarkMode':
        document.documentElement.classList.toggle('dark');
        break;

      case 'useTextReader':
        // Ativar o leitor de tela
        toggleTextReaderOn();
        break;

      case 'useToggleFontIncrease':
        // Ativar ou desativar a ação de aumentar a fonte
        toggleFontIncrease();
        break;

      case 'useToggleFontDecrease':
        // Ativar ou desativar a ação de diminuir a fonte
        toggleFontDecrease();
        break;
      
      case 'ChangeLanguage':
      // Ativar ou desativar a ação de diminuir a fonte
        toggleAlterLanguage();
      break;  
      
      default:
          console.log('Ação não reconhecida:', action);
     
    }
  };


  return (

    <Popover className="relative ">
      <Popover.Button className="inline-flex items-center gap-x-1 font-sen leading-6 text-gray-900">
        
        <TextReader text="Acessibilidade">
            <span className='dark:text-[#FFFF] dark:border-[#FFFF] font-manrope'>Acessibilidade</span>
        </TextReader>

        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 dark:bg-gray-700">
          
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white font-sen leading-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-700">
            
            <div className="p-4">
              {solutions.map((item) => (
                
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-600" onClick={() => handleClick(item.action, item.href)}>
                  
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:text-white dark:group-hover:bg-gray-600">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#3EA0E7]" aria-hidden="true" />
                  </div>

                  <div>

                  {item.href.startsWith('/') ? (
                    <Link href={item.href} className="font-sen text-gray-900 dark:text-white dark:group-hover:bg-gray-600">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link >
                    ) : (
                      <Link href={item.href} className="font-sen text-gray-900 dark:text-white dark:group-hover:bg-gray-600" onClick={() => item.action && handleClick(item.action, item.href)}>
                        {item.name}
                    </Link>
                    )}
                    <p className="mt-1 text-gray-600 dark:text-white dark:group-hover:bg-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-manrope text-gray-900 hover:bg-[#3EA0E7]"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex justify-center h-20 text-xl dark:text-white">
              <Popover.Button as="button" onClick={() => {/* Aqui não é necessário uma ação adicional para fechar */}}>
              Fechar
              </Popover.Button>
            </div>

          </div>

        </Popover.Panel>
      </Transition>
     
    </Popover>

  );
}
