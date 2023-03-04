
import { Header } from "./components/Header";
import "./styles/main.css";
import Eu from "./assets/Eu.svg";
function App() {


  return (
    <div className="w-screen min-h-screen bg-defaultWhite">
      <Header />
      <div className="w-full flex flex-col items-center px-2">
        <div
          className="w-full flex items-center justify-evenly bg-white h-32 m-10 shadow-cartoon border-[3px] rounded-lg border-black">
            <div className="font-lato font-bold w-64">
              <span>Olá, sou Jonatas Miguel. <span className="font-extrabold">Desenvolvedor Front-end</span></span>
            </div>
            <img src={Eu} alt="Foto de Jonatas" className="w-20"/>
        </div>
      </div>
    </div>
  )
}

export default App
