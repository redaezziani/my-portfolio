'use client';
import React from 'react';

import ProjectCard from '@/components/projects/project-card';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
const MainCard = () => {
    const {theme} = useTheme();
    const [currentTheme, setCurrentTheme] = React.useState<string | undefined>(theme);
    return (
        <ProjectCard
            className='col-span-2    relative flex justify-start items-start flex-col max-h-[23.5rem] h-full'
        >
            <div className="size-20 bottom-0 z-0 absolute dark:bg-slate-100 bg-[#1BA0F2] blur-[100px] rounded-full" />
            <div className="w-full p-3 h-full flex flex-col gap-2 justify-start items-start">
                <div className="flex mt-6 flex-col justify-start items-start md:max-w-5xl">
                    <span className="text-[11px] font-semibold uppercase leading-5 tracking-wide">
                       Real Web Code , no templates no shortcuts
                    </span>
                    <span className="text-[11px] mt-3 font-semibold uppercase leading-5 tracking-wide text-gray-500">
                        I build websites from scratch using the latest web technologies. No templates, no shortcuts. Just real web code that's built to last.
                    </span>
                </div>
            </div>
            <img
            // add a blue shadow to the image
            
            className=' absolute  -right-14 rounded w-full md:w-2/3   z-10 -bottom-10'
             src={currentTheme !== 'dark' ? "/project/terminal-light.png" : '/project/terminal-dark.png'}
            alt="terminal-image"  />
            
            <img
            className='absolute  bottom-0 right-0 z-0 w-full aspect-auto  object-cover'
            src="/project/grid-bg.png" alt="grid-image"  />

        </ProjectCard>
    )
}

export default MainCard