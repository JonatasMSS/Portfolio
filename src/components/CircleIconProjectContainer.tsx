


type CircleIconProjectContainerProps ={
    img?:string;
}

export function CircleIconProjectContainer({img}:CircleIconProjectContainerProps) {
    return (
        <div className="h-10 w-10 p-1 flex rounded-full bg-defaultWhite border-2 border-black">
            {img && <img src={img} alt="Logo" />}
        </div>
    )
}