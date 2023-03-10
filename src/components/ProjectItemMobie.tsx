


interface ProjectItemMobileProps{
    img:string;
    title:string;
    description:string;

}


export function ProjectItemMobile({...props}:ProjectItemMobileProps) {
    return (
        <div className="w-10/12 flex flex-col items-center rounded-lg bg-white shadow-cartoon border-2 border-black">
            <div className=" p-2 my-3">
                <img src={props.img} className="rounded-sm  " />
            </div>

            {/* Text section */}
            <div className="w-full  flex  items-center gap-2 flex-col px-2">
                <span className="font-archivo font-semibold break-words w-full text-center text-base ">{props.title}</span>
                <span className="font-archivo w-full  break-words text-base ">{props.description}</span>
            </div>

            {/* Tecnologias usadas */}
            <div className=" w-full flex flex-col items-start p-2 ">
                <span className="font-archivo font-semibold text-base">Tecnologias Usadas</span>
                <div className="w-full h-0.5 bg-black rounded-lg" />

                {/* TODO: TRANSFORM THIS INTO A COMPONENT */}
               
            </div>
        </div>
    )
}