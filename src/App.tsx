import "./styles/main.css";

import TesteImage from './assets/ImageTeste.png';
import Eu from "./assets/Eu.svg";

import FastifyLogo from './assets/FastifyLogo.png';
import ReactLogo from "./assets/reactLogo.png";
import JavaScriptLogo from "./assets/javascript-logo.png";
import HtmlLogo from './assets/HtmlLogo.png';
import CssLogo from './assets/cssLogo.png';
import PrismaLogo from './assets/prisma.png';
import FlutterLogo from './assets/FlutterLogo.webp';
import GitLogo from './assets/GitLogo.png';
import TailwindCss from './assets/tailwindcssLogo.png';
import ButtonCarrousel from './assets/Button.svg';
import SHabitDay from './assets/habitsSite.png';
import SOxeIe from './assets/OxeIe.png';
import SControleEstoque from './assets/controleEstoque.png';
import SPokedex from './assets/pokedex.png';

import {useMediaQuery} from 'react-responsive'


import { Header } from "./components/Header";
import { SkillsContainer } from "./components/SkillsContainer";
import { Footer } from "./components/Footer";
import { ProjectItem } from "./components/ProjectItem";
import { useState, useRef } from "react";
import { number } from "prop-types";
function App() {

  const [projectIndex, setProjectIndex] = useState(0);


  const Skills = [
    {
      desc: 'Fastify',
      img: FastifyLogo
    },
    {
      desc: 'Prisma',
      img: PrismaLogo
    },
    {
      desc: 'React',
      img: ReactLogo
    },
    {
      desc: 'Javascript',
      img: JavaScriptLogo
    },
    {
      desc: 'Html',
      img: HtmlLogo
    },
    {
      desc: 'Css',
      img: CssLogo
    },
    {
      desc: 'TailwindCSS',
      img: TailwindCss
    },
    {
      desc: 'Git',
      img: GitLogo
    },
    {
      desc: 'Flutter',
      img: FlutterLogo
    }

  ]


  const myProjects = [
    <ProjectItem
      img={SHabitDay}
      title="Controle de Hábitos"
      description="Projeto criado durante aulas da NWS da RocketSeat. Consiste em um site que ajuda no controle de hábitos de um indivíduo durante os meses do ano. Fiz toda a estrutura do site, isto é, Front-end e back-end. Este ultimo, utilizei uma ORM - O prisma - e para requisições ao banco de dados, utilizei o Fastify, em vez do Express."
      techs={[ReactLogo, HtmlLogo, TailwindCss, CssLogo, PrismaLogo]}
      repoLink="https://github.com/JonatasMSS/habits-site-react"

    />,
    <ProjectItem
      img={SOxeIe}
      title="Site de delivery - Oxe Ie"
      description="Site de delivery de comidas feito baseando-se em proposta de um cliente. Utilizei um pouco mais a fundo do React e outras ferramentas de componentização, como Radix-UI, além de usar a API do whatsappweb para redirecionar mensagens diretas."
      techs={[ReactLogo, HtmlLogo, TailwindCss, CssLogo]}
      repoLink="https://github.com/JonatasMSS/Food-delivery"
    />,
    <ProjectItem
      img={SControleEstoque}
      title="Mobile app de gestão de estoque e vendas"
      description="App de controle de estoque e vendas. Criei observando problemas de pequenos fornecedores de minha região. Usei ferramentas de armazenamento persistente - SQLite - e geração de documentos que podem ser salvos ou compartilhados entre redes sociais."
      techs={[FlutterLogo]}
      repoLink="https://github.com/JonatasMSS/ControleEstoqueApp"
    />,
    <ProjectItem
      img={SPokedex}
      title="Pokedex"
      description="Site que coleta dados de Pokemons por meio de uma API. Criei durante aulas de um BootCamp da DIO. Entendi conceitos importantes do Javascript,html e CSS. Além disso, aprendi e usei requisições HTTP para tal coleta de dados"
      techs={[HtmlLogo, CssLogo, JavaScriptLogo]}
      repoLink="https://github.com/JonatasMSS/jonatasPokedex.github.io"
    />
  ]



  const isMediumScreen = useMediaQuery({query:'(min-width:800px)'})


  return (
    <div className="min-h-screen flex flex-col justify-between overflow-hidden  bg-defaultWhite">
      <div className="flex flex-col">
        <Header />
        {/* Introduction section */}
        <div className="w-full flex flex-col items-center px-4 md:px-10">
          <div
            className="w-full px-4 flex items-center justify-evenly bg-white  m-10 shadow-cartoon border-[3px] rounded-lg border-black">
            <div className="font-lato font-bold w-64 md:w-full">
              <span className="md:text-4xl lg:text-5xl">Olá, sou Jonatas Miguel. <span className="font-extrabold">Desenvolvedor Front-end</span></span>
            </div>
            <img src={Eu} alt="Foto de Jonatas" className="w-1/4" />
          </div>
        </div>


      

        

          {/* About me section */}
          <div className="flex flex-col items-center px-4 gap-2 w-full">
            <span className="font-archivo-black md:text-2xl">Sobre mim</span>
            <div className="w-full flex p-2 items-center justify-evenly bg-white min-h-[128px] shadow-cartoon border-[3px] rounded-lg border-black">
              <span className="font-lato text-sm text-start font-semibold md:text-xl lg:text-2xl">Sou apaixonado por tecnologia e ciências. Desde pequeno, tive gosto por investigar e experimentar das mais diversas tecnologias. Quando entrei no ensino médio técnico, pude aprofundar meus conhecimentos tanto na robótica, como no curso de desenvolvimento de sistemas. Sempre tentei por em prática os meus conhecimentos: criando robôs, aplicativos, códigos e fazendo muitos experimentos</span>
            </div>
          </div>

          {/* Skills Section */}

          <div className="flex flex-col items-center gap-10 px-4 mt-10 ">
            <span className="font-archivo-black md:text-2xl">Skills</span>
            <div className="grid grid-flow-row grid-cols-3 gap-9 md:gap-20 ">
              {
                Skills.map((Skill, i) => (
                  <SkillsContainer
                    key={i}
                    img={Skill.img}
                    desc={Skill.desc}
                  />
                ))
              }
            </div>
          </div>

       
        {/* Projects Section */}

        {
          !isMediumScreen  ? <div className="flex flex-col w-full items-center gap-5 my-14 px-4">
          <span className="font-archivo-black md:text-2xl">Projetos</span>

          {/* Caroussel */}
          <div className="flex w-full items-center justify-center gap-2">
            <button onClick={() => { setProjectIndex(prev => prev === 0 ? (myProjects.length) - 1 : prev - 1) }} >
              <img src={ButtonCarrousel} alt="Button carousel" className="w-14 -rotate-180" />
            </button>
            {
              myProjects[projectIndex]
            }
            <button onClick={() => setProjectIndex(prev => prev >= (myProjects.length - 1) ? 0 : prev + 1)}>
              <img src={ButtonCarrousel} alt="Button carousel" className="w-14" />
            </button>
          </div>
        </div> :
        <div className="w-full grid grid-flow-row grid-cols-3 my-10 bg-red-300 h-32">
          
        </div>
        }




      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
