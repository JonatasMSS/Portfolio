
interface CircularIconProps{
    img: string;
}


export function CircularIcon({img}:CircularIconProps) {
    return (
        <div className="w-full flex">
            <div className="flex items-center justify-center w-9 h-9 bg-white hover:scale-125 transition-transform ease-in-out rounded-full m-2 p-1 border-2 border-black ">
                <img src={img} alt="" className="hover:rotate-360 transition-transform  duration-700 ease-in-out"/>
            </div>
        </div>
    )
}