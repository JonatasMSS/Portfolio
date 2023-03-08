import ProgressionLine from '../assets/ProgressionLine.svg';

import { ProgressLine } from './ProgressionLine';




interface SkillContainerProps{
    title: string;
    img: string;
    experience: 0.5 | 1 | 1.5| 2;

}



export function SkillContainer({...props}: SkillContainerProps) {
    return (
        <div className="w-full rounded-lg p-1 px-2 flex bg-white border-2 border-black shadow-cartoon">

            {/* IMG */}
            <img src={props.img} className="w-20 lg:w-28 m-2 border-2 border-black rounded-full p-2" />

            {/* Data */}
            <div className="flex w-full flex-col justify-between items-center">
                <div className="flex flex-col items-center mb-2">
                    <span className="font-archivo font-bold md:text-xl lg:text-3xl "> {props.title}</span>
                    <span className="font-archivo font-normal text-xs md:text-sm lg:text-xl">Experiência(anos)</span>
                </div>

                <div className=" flex w-full flex-col ">
                    <ProgressLine
                        time={props.experience}
                    />
                    <img src={ProgressionLine} alt="Progressão" className="" />
                </div>
            </div>

        </div>

    )
}