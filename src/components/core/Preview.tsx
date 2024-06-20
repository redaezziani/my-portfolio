import React from 'react'
import { Radar } from './Radar'


const Preview = () => {
    return (
        <div className=" flex left-0 h-96 absolute bottom-0 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
            <Radar className="absolute -bottom-12" />
            <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

    )
}

export default Preview