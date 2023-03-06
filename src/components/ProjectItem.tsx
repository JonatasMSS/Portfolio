
import { CircleIconProjectContainer } from "./CircleIconProjectContainer";
import github from "../assets/github-icon-white-6.jpg";




type ProjectItemProps = {
    img: string;
    title: string;
    description: string;
    techs: Array<string>;
    repoLink?:string;
}

export function ProjectItem({ ...props }: ProjectItemProps) {



    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center  w-64 min-h-[20rem] bg-white border-2 border-black rounded-lg">
                {/* Image */}

                <img src={props.img} className="w-11/12 mt-5 h-36 rounded-lg" />


                {/* Description Section */}
                <div className="w-full flex flex-col h-full gap-3 px-4 my-2">
                    <span className="font-archivo-black">{props.title}</span>
                    <span className="font-teko">{props.description}</span>
                    <span className=" border-t-2 border-t-black font-teko font-semibold">Tecnologias usadas</span>
                    <div className="w-full flex gap-2 ">
                        {
                            props.techs.map((tech, i) => (
                                <CircleIconProjectContainer
                                    key={i}
                                    img={tech}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            
            <a href={props.repoLink} className=" w-full  bg-black/90 my-4 p-1 rounded-lg flex items-center justify-around">
               <img src={github} alt="Github" className="w-12"/>
               <span className="font-archivo-black text-white">Ir para o repositório</span>
            </a>

        </div>

    )
}
