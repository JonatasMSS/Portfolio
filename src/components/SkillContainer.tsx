import ProgressionLine from '../assets/ProgressionLine.svg';

import ReactLogo from "../assets/reactLogo.png";
export function SkillContainer() {
    return (
        <div className="w-full rounded-lg p-1 px-2 flex bg-white border-2 border-black shadow-cartoon">

            {/* IMG */}
            <img src={ReactLogo} className="w-20 lg:w-28 m-2 border-2 border-black rounded-full p-2" />

            {/* Data */}
            <div className="flex w-full flex-col justify-between items-center">
                <div className="flex flex-col items-center mb-2">
                    <span className="font-archivo font-bold md:text-xl lg:text-3xl "> React</span>
                    <span className="font-archivo font-normal text-xs md:text-sm lg:text-xl">Experiência(anos)</span>
                </div>

                <div className=" flex w-full flex-col ">
                    <div className="w-full h-1 bg-defaultBlue rounded-lg mb-2 md:mb-1">

                    </div>
                    <img src={ProgressionLine} alt="Progressão" className="" />
                </div>
            </div>

        </div>

    )
}