import ReactLogo from "./assets/reactLogo.png";
import { Header } from "./components/Header";
import "./styles/main.css";
import Eu from "./assets/Eu.svg";
import { SkillsContainer } from "./components/SkillsContainer";
function App() {

  



  return (
    <div className="w-screen h-screen bg-defaultWhite">
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
          <SkillsContainer
            img={ReactLogo}
            desc="React"
          />
           <SkillsContainer
            img={ReactLogo}
            desc="React"
          />
           <SkillsContainer
            img={ReactLogo}
            desc="React"
          />
           <SkillsContainer
            img={ReactLogo}
            desc="React"
          />
        </div>
      </div>


    </div>
  )
}

export default App
