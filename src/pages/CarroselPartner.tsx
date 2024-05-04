"use client";

/* Instalação
npm i framer-motion clsx tailwind-merge --force
*/

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";


export default function InfiniteMovingCardsDemo() {
  return (

    <div className="bg-white">

      <div className="min-h-[30vh] flex flex-col antialiased bg-white relative mx-auto">

          <div>
              <InfiniteMovingCards
                  items={comentarios}
                  direction="right"
                  speed="fast"
                  className="font-sen text-xl"
              />
          </div>

      </div>

    </div>
  );
}


const comentarios = [
  {
    id: 1,
    imagem: <img src="/assets/PartnerCarrosel/imagem1.png" alt="Imagem 1" width={400} height={300} />,
    name: "A IA amplifica a voz da Gucci em todos os centros de atendimento ao cliente.",
    product: "Inteligência Artificial",
  },

  {
    id: 2,
    imagem: <img src="/assets/PartnerCarrosel/imagem.jpg" alt="Imagem 2" width={400} height={200} />,
    name: "Crexi economiza 5 horas por dia para seus representantes de vendas com Inteligência Artificial de Vendas.",
    product: "Inteligência Artificial e Crexi",
  },

  {
    id: 3,
    imagem: <img src="/assets/PartnerCarrosel/imagem2.jpg" alt="Imagem 3" width={400} height={300} />,
    name: "Neolait cria descrições de produtos em minutos com IA.",
    product: "Inteligência Artificial",
  },

  {
    id: 4,
    imagem: <img src="/assets/PartnerCarrosel/imagem6.png" alt="Imagem 4" width={400} height={300} />,
    name: "O Grubhub alcança um aumento de 21% na produtividade de vendas com o Sales Cloud.",
    product: "Sales Cloud",
  },

  {
    id: 5,
    imagem: <img src="/assets/PartnerCarrosel/imagem9.png" alt="Imagem logo da empresa Turtle Bay"  />,
    name: "O Turtle Bay Resort eleva a hospitalidade com personalização orientada por IA.",
    product: "Inteligência Artificial",
  },

  {
    id: 6,
    imagem: <img src="/assets/PartnerCarrosel/imagem8.png" alt="Imagem logo do Spotify" width={400} height={300} />,
    name: "A automação mantém o negócio de publicidade do Spotify crescendo ano após ano.",
    product: "Automações",
  },

  {
    id: 7,
    imagem: <img src="/assets/PartnerCarrosel/imagem7.png" alt="Imagem logo da empresa Schneider" width={400} height={400}/>,
    name: "Schneider Electric desbloqueia oportunidades de vendas com o Salesforce.",
    product: "Vendas",
  },

  {
    id: 8,
    imagem: <img src="/assets/PartnerCarrosel/imagem3.png" alt="Imagem logo do Uber Eats" width={400} height={300} />,
    name: "Uber Eats resolve casos mais rapidamente automatizando fluxos de trabalho.",
    product: "Atendimento ao cliente e Automação",
  },

  {
    id: 9,
    imagem: <img src="/assets/PartnerCarrosel/imagem5.png" alt="Imagem do banco Inter" width={400} height={100} />,
    name: "Inter personaliza cada experiência bancária com dados e IA.",
    product: "Atendimento ao cliente",
  },
  
];

