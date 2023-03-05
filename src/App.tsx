import Eu from "./assets/Eu.svg";
import ReactLogo from "./assets/reactLogo.png";
import JavaScriptLogo from "./assets/javascript-logo.png";
import HtmlLogo from './assets/HtmlLogo.png';
import CssLogo from './assets/cssLogo.png';
import FlutterLogo from './assets/FlutterLogo.webp';
import GitLogo from './assets/GitLogo.png';
import TailwindCss from './assets/tailwindcssLogo.png';
import TesteImage from './assets/ImageTeste.png';



import { Header } from "./components/Header";
import "./styles/main.css";
import { SkillsContainer } from "./components/SkillsContainer";
import { CircleIconProjectContainer } from "./components/CircleIconProjectContainer";
import { Footer } from "./components/Footer";
function App() {

  const Skills = [
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





  return (
    <div className="w-screen min-h-screen  overflow-hidden bg-defaultWhite">
      <Header />


      {/* Introduction section */}
      <div className="w-full flex flex-col items-center px-4">
        <div
          className="w-full flex items-center justify-evenly bg-white h-32 m-10 shadow-cartoon border-[3px] rounded-lg border-black">
          <div className="font-lato font-bold w-64">
            <span>Olá, sou Jonatas Miguel. <span className="font-extrabold">Desenvolvedor Front-end</span></span>
          </div>
          <img src={Eu} alt="Foto de Jonatas" className="w-20" />
        </div>
      </div>


      {/* About me section */}
      <div className="flex flex-col items-center px-4 gap-2 w-full">
        <span className="font-archivo-black">Sobre mim</span>
        <div className="w-full flex items-center justify-evenly bg-white min-h-[128px] shadow-cartoon border-[3px] rounded-lg border-black">
        </div>
      </div>

      {/* Skills Section */}

      <div className="flex flex-col w-full items-center gap-10 px-4 mt-10">
        <span className="font-archivo-black">Skills</span>
        <div className="w-full grid grid-flow-row grid-cols-3 gap-9 px-5">
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

      <div className="flex flex-col w-full items-center gap-5 my-14 px-4">
        <span className="font-archivo-black">Projetos</span>
        <div className="flex flex-col items-center  w-64 min-h-[20rem] bg-white border-2 border-black rounded-lg">
          {/* Image */}

          <img src={TesteImage} className="w-11/12 mt-5 h-36 rounded-lg" />


          {/* Description Section */}
          <div className="w-full flex flex-col h-full gap-3 px-4 my-2">
            <span className="font-archivo-black">Titulo do projeto</span>
            <span className="font-teko">Descrição breve do projeto localizada aqui</span>
            <span className=" border-t-2 border-t-black font-teko font-semibold">Tecnologias usadas</span>
            <div className="w-full flex ">
              <CircleIconProjectContainer />
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App
