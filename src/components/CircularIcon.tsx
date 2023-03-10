
interface CircularIconProps{
    img: string;
}


export function CircularIcon({img}:CircularIconProps) {
    return (
        <div className="w-full flex">
            <div className="w-9 h-9 bg-gray-500 rounded-full m-2 p-1 border-2 border-black ">
                <img src={img} alt="" />
            </div>
        </div>
    )
}