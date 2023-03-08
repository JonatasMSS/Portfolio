import "./styles/main.css";

import TesteImage from './assets/ImageTeste.png';

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



import { useState, useRef } from "react";
import { number } from "prop-types";
import { Header } from "./components/Header";
import { SkillContainer } from "./components/SkillContainer";
function App() {


  const SkillsDataToComponent:Array<{name:string,exp:0.5|1|1.5|2, img:string}> = [
    {name:'React',exp:1,img:ReactLogo},{name:'Javascript',exp:1.5,img:JavaScriptLogo},{name:'Html',exp:2,img:HtmlLogo},{name:'Css',exp:1.5,img:CssLogo},{name:'TailwindCss',exp:0.5,img:TailwindCss},{name:'Flutter',exp:2,img:FlutterLogo},{name:'Prisma',exp:0.5,img:PrismaLogo},{name:'Fastify',exp:0.5,img:FastifyLogo},{name:'Git',exp:1.5,img:GitLogo}
  ]



  return (
    <div className=" min-h-screen">
      <Header />

      {/* Introduction section */}
      <div className="w-full bg-defaultBlue flex items-center justify-around ">
        {/* Text */}
        <div className="flex flex-col font-archivo font-semibold text-white p-2 pt-8  md:pt-12 md:text-3xl lg:pt-16 lg:text-5xl">
          <span>Olá! Sou Jonatas Miguel,</span>
          <span>Desenvolvedor Front-end</span>
          <div className="flex gap-2 mt-4 ">
            <a href="" className="hover:scale-125 transition-transform"><img src={SimpleLinkedin} alt="Simple Linkedin" className="w-8 md:w-12 lg:w-16" /></a>

            <a href="" className="hover:scale-125 transition-transform"><img src={SimpleGithub} alt="Simple Github" className="w-8 md:w-12 lg:w-16" /></a>
          </div>
        </div>

        <img src={EuSB} className="w-32 md:w-40 lg:w-52" />
      </div>

      {/* About me section */}
      <div className="w-full flex flex-col font-archivo items-center gap-2 my-5 p-2">
        <span className="font-semibold md:text-2xl lg:text-3xl">Sobre mim</span>
        <span className="text-sm  font-medium text-justify w-full md:w-11/12 md:text-xl lg:text-2xl lg:w-10/12">Sempre fui apaixonado por tecnologia, desde novo tive oportunidade de me aventurar nesse mundo. Quando entrei no ensino médio, pude aprofundar meus conhecimentos sobre programação quando entrei na robótica e fiz um curso técnico de desenvolvimento de softwares. Atualmente, Estou buscando aprimorar meus conhecimentos sobre desenvolvimento front-end, usando react e reactJs, e um pouco de back-end, futuramente pretendo ser full-stack. Já desenvolvi projetos para problemas locais, os quais me proporcionaram uma dose de desafio e grandes aprendizados</span>
      </div>

      {/* Skills Section */}
      <div className="w-full flex flex-col gap-2 font-archivo items-center my-5">
        <span className="font-semibold md:text-2xl lg:text-3xl"> Skills </span>
        <div className="w-full grid gap-12 grid-flow-row grid-cols-1 md:grid-cols-2 items-center px-10">
          {
            SkillsDataToComponent.map((skill,i) => 
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

    </div>
  )
}

export default App
