import { CircularIcon } from "./CircularIcon";


interface ProjectItemLarge {
    title: string;
    img: string;
    description: string;
    techs?: Array<string>;
    link?:string;
}


export function ProjectItemLarge({ ...props }: ProjectItemLarge) {
    return (
        <div className=" flex w-full items-center relative mb-20 ">
            <div className=" w-1/2  max-h-64 overflow-clip border-2 relative object-fill rounded-lg bg-gray-400 border-black shadow-cartoon" >
                <a href={props.link} className="absolute w-full h-full bg-defaultBlue/40 hover:bg-transparent transition-colors duration-500 cursor-pointer "></a>
                <img src={props.img} className="rounded-lg w-full lg:w-full lg:h-64" />
            </div>

            <div className="w-1/2 h-52 flex flex-col justify-between items-end absolute right-10 top-0 z-10 ">
                <span className="font-archivo font-semibold text-2xl">{props.title}</span>

                <div className="border-2 w-full p-2 h-fit rounded-lg border-black shadow-cartoon bg-white ">
                    <span className="text-xl font-archivo ">{props.description}</span>
                </div>

                <div 
                style={{direction:"rtl"}}
                className="bottom-0  grid grid-flow-row  grid-cols-6 ">
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