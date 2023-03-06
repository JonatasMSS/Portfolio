


type SkillContainerProp = {
    img?: string;
    desc?: string;
}


export function SkillsContainer({ ...SkillProps }: SkillContainerProp) {
    return (
        <div className="flex items-center justify-center border-[3px] h-20 min-w-[5rem] bg-white rotate-45 rounded-md  border-black">
            {
                SkillProps.img && <div className=" flex flex-col  -rotate-45 items-center justify-center  ">

                    <img src={SkillProps.img} alt={SkillProps.desc} width={39} />

                    <span className="font-teko font-bold text-sm "> {SkillProps.desc}</span>
                </div>
            }
        </div>
    )
}