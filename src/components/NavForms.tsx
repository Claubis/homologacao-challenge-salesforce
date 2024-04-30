"use client"

/* Importações gerais */
import React from "react";
import Link from 'next/link'

/* Instalar
npm install @headlessui/react @heroicons/react
*/

/* Importação dos icones */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { ChartPieIcon, CursorArrowRaysIcon, HeartIcon} from '@heroicons/react/24/outline'

/* Importação de componentes */
import TextReader from "./TextReader";

const solutions = [
  { name: 'Descoberta', description: 'Se ainda não conhece nossos produtos, preencha esse formulário e vamos indicar uma ou mais soluções para o seu negócio.', href: '/FormDescoberta', icon: ChartPieIcon },
  { name: 'Cadastro', description: 'Se ainda não é nosso usuário, se cadastre e veja os conteúdos de uma forma diferente e completa.', href: '/Cadastro', icon: CursorArrowRaysIcon },
  { name: 'Contato', description: "Receba nosso contato no dia e horário que desejar.", href: '/Contact', icon: PhoneIcon },
  { name: 'Feedback', description: 'Deixe uma sugestão, elogio ou critica sobre nossos produtos e serviços.', href: '/FormFeedback', icon: HeartIcon },
]
const callsToAction = [
  { name: 'Demonstração', href: '#', icon: PlayCircleIcon },
  { name: 'Ligue agora', href: '#', icon: PhoneIcon },
]

export default function NavForms() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 font-manrope leading-6  text-gray-900">
        <TextReader text="Formulários">
          <span className='dark:text-[#FFFF] dark:border-[#FFFF] font-manrope'>Formulários</span>
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white dark:bg-gray-700 font-sen leading-6 shadow-lg ring-1 ring-gray-900/5 ">
            <div className="p-4 ">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 dark:hover:bg-gray-600 hover:bg-segunda">

                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#3EA0E7] " aria-hidden="true" />
                  </div>

                  <div>

                    <Link href={item.href} className="font-manrope text-gray-900 dark:text-white">
                    
                    <TextReader text={item.name}>
                        {item.name}
                        <span className="absolute inset-0" />
                    </TextReader>

                    </Link>

                    <p className="mt-1 text-gray-600 dark:text-white">{item.description}</p>
                  </div>

                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (


              
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 font-manrope text-gray-900 hover:bg-gray-100"
                  >
                    <TextReader text={item.name}>

                        <Fragment>

                          <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}

                        </Fragment>

                    </TextReader>
                  </Link>
              
              ))}

              
            </div>

            <div className="flex justify-center h-20 text-xl">
              <Popover.Button as="button" onClick={() => {/* Aqui não é necessário uma ação adicional para fechar */}}>
              Fechar
              </Popover.Button>
            </div>

          </div>
          
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
