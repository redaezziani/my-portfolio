import React from 'react'
import { Ro4Logo } from '../ui/home/Icons'

const StikeyNav = () => {
    return (
        <nav
            className=' px-5 flex justify-between items-center py-2.5 rounded-full absolute bottom-6 w-96 border border-[#fbfeff21]'
        >
            <Ro4Logo className="w-6 h-6 fill-slate-900 dark:fill-slate-100" />
            <span className="flex sm:hidden text-lg font-semibold text-slate-700 dark:text-slate-300">
                Menu
            </span>

        </nav>
    )
}

export default StikeyNav