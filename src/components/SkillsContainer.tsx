


type SkillContainerProp = {
    img?: string;
    desc?: string;
}


export function SkillsContainer({ ...SkillProps }: SkillContainerProp) {
    return (
        <div className="border-[3px] h-20 w-20 bg-white rotate-45 rounded-md  border-black">
            {
                SkillProps.img && <div className=" flex flex-col -rotate-45 w-full items-center">
                    <img src={SkillProps.img} alt={SkillProps.desc} className="w-14" />
                    <span className="font-teko font-bold text-sm"> {SkillProps.desc}</span>
                </div>
            }
        </div>
    )
}