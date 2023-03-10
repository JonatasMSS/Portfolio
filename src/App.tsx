import "./styles/main.css";


import EuSB from './assets/Eu sem borda.svg';


import FastifyLogo from './assets/FastifyLogo.png';
import JavaScriptLogo from "./assets/javascript-logo.png";
import HtmlLogo from './assets/HtmlLogo.png';
import CssLogo from './assets/cssLogo.png';
import PrismaLogo from './assets/prisma.png';
import FlutterLogo from './assets/FlutterLogo.webp';
import GitLogo from './assets/GitLogo.png';
import TailwindCss from './assets/tailwindcssLogo.png';
import ReactLogo from "./assets/reactLogo.png";
import SimpleLinkedin from './assets/SimpleLinkedin.svg';
import SimpleGithub from './assets/SimpleGit.svg';
import TypescriptLogo from './assets/typescript.png';


import SPokedex from './assets/pokedex.png';
import SHabitSite from './assets/habitsSite.png';
import SDelivery from './assets/Delivery.png';
import SEstoqueControle from './assets/controleEstoque.png';

import { useMediaQuery } from 'react-responsive'
import { Header } from "./components/Header";
import { SkillContainer } from "./components/SkillContainer";

import { ProjectItemMobile } from "./components/ProjectItemMobie";
import { ProjectItemLarge } from "./components/ProjectItemLarge";
import ProjectModel from "./models/Project-model";
import SkillModel from "./models/Skill-model";

function App() {


  //Verify screen size
  const isSmall = useMediaQuery({ query: '(max-width:799px)' })



  const SkillsDataToComponent: Array<SkillModel> = [
    { name: 'React', exp: 1, img: ReactLogo }, {name:'Typescript',img:TypescriptLogo,exp:1},{ name: 'Javascript', exp: 1.5, img: JavaScriptLogo }, { name: 'Html', exp: 2, img: HtmlLogo }, { name: 'Css', exp: 1.5, img: CssLogo }, { name: 'TailwindCss', exp: 0.5, img: TailwindCss }, { name: 'Flutter', exp: 2, img: FlutterLogo }, { name: 'Prisma', exp: 0.5, img: PrismaLogo }, { name: 'Fastify', exp: 0.5, img: FastifyLogo }, { name: 'Git', exp: 1.5, img: GitLogo }
  ]

  const ProjectsDataToComponent: Array<ProjectModel> = [
    {
      title: 'Site de Delivery',
      description: 'Baseando-me na necessidade de um cliente, tive a ideia de criar um site de deliveries. Todo o desing foi baseando-se nas informa????es dadas pelo cliente. Al??m disso, optei por usar o Firebase Hosting e envio de pedidos por meio da Api whatsapp.',
      img: SDelivery,
      techs: [ReactLogo, TailwindCss, JavaScriptLogo],
      link:'https://github.com/JonatasMSS/Food-delivery'
    },
    {
      title: 'Registro e analise de h??bitos',
      description: 'Criado durante um evento da Rocketseat, o site de h??bitos foi uma grande oportunidade de aprendizados. Utilizei no projeto ferramentas de estiliza????o, aprendi a lidar com arquitetura de pastas e uso de ORM"s para cria????o de banco de dados.',
      img: SHabitSite,
      techs: [ReactLogo, JavaScriptLogo, FastifyLogo, PrismaLogo],
      link:"https://github.com/JonatasMSS/habits-site-react"
    },
    {
      title: 'App de controle de estoque e vendas',
      description: 'Esse projeto criei baseando-se na necessidade de um pequeno fornecedor de produtos. A ideia era criar um App que pudesse ajuda-lo a controlar seu estoque e gerar documentos de vendas desses produtos as lojas. Foi um dos primeiros des??fios que tive, o qual veio com grande aprendizado: aprendendo o uso de dados persistentes e comunica????o entre componentes',
      img: SEstoqueControle,
      techs: [FlutterLogo],
      link:"https://github.com/JonatasMSS/ControleEstoqueApp"
    },
    {
      title: 'Pokedex Site',
      description: 'Um dos primeiros projetos criados por mim. Criei enquanto estava em um bootcamp da DIO sobre forma????o Javascript, Html,Css e React. Utilizei conceitos com arquitetura de pastas e requisi????es HTTP. Tive, tamb??m, o contato com o DOM usando Javascript.',
      img: SPokedex,
      techs: [HtmlLogo, JavaScriptLogo, CssLogo],
      link:"https://github.com/JonatasMSS/jonatasPokedex.github.io"
    }
  ]


  return (
    <div className="min-h-screen">
      <Header />

      {/* Introduction section */}
      <div className="w-full bg-defaultBlue flex items-center justify-around ">
        {/* Text */}
        <div className="flex flex-col font-archivo font-semibold text-white p-2 pt-8  md:pt-12 md:text-3xl lg:pt-16 lg:text-5xl">
          <span>Ol??! Sou Jonatas Miguel,</span>
          <span>Desenvolvedor Front-end</span>
          <div className="flex gap-2 mt-4 ">
            <a href="https://www.linkedin.com/in/jonatasmss/" className="hover:scale-125 transition-transform"><img src={SimpleLinkedin} alt="Simple Linkedin" className="w-8 md:w-12 lg:w-16" /></a>

            <a href="https://github.com/JonatasMSS" className="hover:scale-125 transition-transform"><img src={SimpleGithub} alt="Simple Github" className="w-8 md:w-12 lg:w-16" /></a>
          </div>
        </div>

        <img src={EuSB} className="w-32 md:w-40 lg:w-52" />
      </div>

      {/* About me section */}
      <div className="w-full flex flex-col font-archivo items-center gap-2 my-5 p-2">
        <span className="font-semibold md:text-2xl lg:text-3xl">Sobre mim</span>
        <span className="text-sm  font-medium text-justify w-full md:w-11/12 md:text-xl lg:text-2xl lg:w-10/12">Sempre fui apaixonado por tecnologia, desde novo tive oportunidade de me aventurar nesse mundo. Quando entrei no ensino m??dio, pude aprofundar meus conhecimentos sobre programa????o quando entrei na rob??tica e fiz um curso t??cnico de desenvolvimento de softwares. Atualmente, Estou buscando aprimorar meus conhecimentos sobre desenvolvimento front-end, usando react e reactJs, e um pouco de back-end, futuramente pretendo ser full-stack. J?? desenvolvi projetos para problemas locais, os quais me proporcionaram uma dose de desafio e grandes aprendizados</span>
      </div>


      {/* Skills Section */}
      <div className="w-full flex flex-col gap-2 font-archivo items-center my-5">
        <span className="font-semibold md:text-2xl lg:text-3xl"> Skills </span>
        <div className="w-full grid gap-12 grid-flow-row grid-cols-1 md:grid-cols-2  items-center px-10">
          {
            SkillsDataToComponent.map((skill, i) =>
              <SkillContainer
                key={i}
                title={skill.name}
                experience={skill.exp}
                img={skill.img}
              />
            )
          }
        </div>
      </div>

      {/* Project Section */}
      <div className={`w-full flex flex-col lg:px-40  items-center p-5 ${isSmall ? 'gap-5' : 'gap-32'}`}>
        <span className="font-semibold md:text-2xl lg:text-3xl">Projetos</span>
        {
          isSmall ?
            ProjectsDataToComponent.map((e, i) => (
              <ProjectItemMobile
                key={i}
                title={e.title}
                description={e.description}
                img={e.img}
                techs={e.techs}
                link={e.link}
              />
            ))
            : ProjectsDataToComponent.map((e, i) => (
              <ProjectItemLarge
                title={e.title}
                description={e.description}
                img={e.img}
                key={i}
                techs={e.techs}
                link={e.link}
              />
            ))

        }
      </div>

      {/* Contact-me Section */}
      <div className=" w-full items-center flex flex-col gap-5 font-archivo my-20 md:px-20 lg:px-40 ">
        <span className="font-semibold md:text-2xl lg:text-3xl"> Fale comigo </span>
        <span className="text-base text-center md:text-2xl lg:text-3xl">Estou buscando uma primeira oportunidade em trabalhar em uma empresa no setor de desenvolvimento ou em um projeto em equipe</span>
        <a href="mailto:jonatas.miguelss@gmail.com" className="flex items-center w-fit bg-white border-2 p-2 md:p-5  rounded-lg border-black hover:shadow-cartoon hover:scale-110 transition-all duration-200 ease-in-out">
          <span className="font-archivo font-semibold text-sm md:text-xl lg:text-2xl ">Entre em contato</span>
        </a>  
      </div>
      
    </div>
  )
}

export default App
