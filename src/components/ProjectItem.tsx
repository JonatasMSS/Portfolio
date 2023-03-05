import { CircleIconProjectContainer } from "./CircleIconProjectContainer";
import TesteImage from '../assets/ImageTeste.png';



export function ProjectItem() {
    return (
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
    )
}