import clsx from 'clsx'


interface ProgressLineProp {
    time:0.5 | 1 | 1.5 | 2
}

export function ProgressLine({time}:ProgressLineProp) {
    
    return (
        <div className= {clsx('h-1 bg-defaultBlue rounded-lg mb-2 md:mb-1',{
            'w-1/4': time === 0.5,
            'w-2/4': time === 1,
            'w-3/4': time === 1.5,
            'w-full': time === 2,
        })} >

        </div>
    )
}