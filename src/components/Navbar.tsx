"use client"

/* Importações gerais */
import React from "react";
import Link from "next/link";
import { useState } from "react";

/* Importações de componentes */
import NavSolution from './NavSolution'
import NavForms from "./NavForms";
import TextReader from "./TextReader";

export default function Navbar(){

    /* Abrir o menu quando tiver em tamanho para mobile */
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(

        <header className="p-4 dark:bg-gray-700 dark:text-white">

            <div className="container flex justify-between h-16 mx-auto">

                <Link rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
                    
                    <img src={'/assets/Navbar/imagem.svg'} width={100} height={500} alt="Logo da Sales Force"></img>
                
                </Link>

                <ul className={`items-stretch lg:flex ${menuOpen ? 'block' : 'hidden'}`}>
                    
                    <li className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-manrope">
                        
                        <TextReader text="Produto">
                            
                            <Link rel="noopener noreferrer" href="/Product" >Produto</Link>

                        </TextReader>

                    </li>

                    <li className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-manrope">

                        <TextReader text="Projeto">

                            <Link rel="noopener noreferrer" href="/Project" >Projeto</Link>

                        </TextReader>

                    </li>

                    <li className="flex">

                    
                        <Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-manrope"><NavForms/></Link>

                    </li>   

                    <li className="flex">
                        
                        <Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-manrope"><NavSolution/></Link>
                        
                    </li>

                </ul>

                <div className="items-center flex-shrink-0 hidden lg:flex">
                    
                <TextReader text="Sign in">

                    <Link href="/Login"><button className="self-center px-8 py-3 rounded font-sen hover:text-[#3EA0E7]">Sign in</button></Link>
                    
                </TextReader>
                    
                <TextReader text="Cadastre-se">

                    <Link href="/Cadastro"><button className="self-center px-8 py-3 font-sen rounded bg-segunda dark:bg-[#3EA0E7] dark:text-gray-50 text-white text-xl hover:bg-primeira">Cadastre-se</button></Link>
                    
                </TextReader>

                </div>

                <button className="p-4 lg:hidden" onClick={toggleMenu}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>

                </button>
            </div>

        </header>

    );
}