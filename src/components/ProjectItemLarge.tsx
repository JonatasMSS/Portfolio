import { CircularIcon } from "./CircularIcon";


interface ProjectItemLarge {
    title: string;
    img: string;
    description: string;
    techs?: Array<string>;
}


export function ProjectItemLarge({ ...props }: ProjectItemLarge) {
    return (
        <div className=" flex w-full items-center ">




            <div className=" w-1/2  border-2 relative object-fill rounded-lg bg-gray-400 border-black shadow-cartoon" >
                <div className="absolute w-full h-full bg-defaultBlue/40 hover:bg-transparent transition-colors duration-500 cursor-pointer "></div>
                <img src={props.img} className="rounded-lg z-0" />
            </div>

            <div className="w-1/2 h-52 flex flex-col justify-between items-end absolute right-10 z-10 ">
                <span className="font-archivo font-semibold text-2xl">{props.title}</span>

                <div className="border-2 w-full p-2 h-32   rounded-lg border-black shadow-cartoon bg-white ">
                    <span className="text-xl font-archivo ">{props.description}</span>
                </div>

                <div className="w-11/12  bottom-0 grid grid-flow-row  grid-cols-6">
                    {
                        props.techs?.map((e, i) => (
                            <CircularIcon
                                key={i}
                                img={e}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}