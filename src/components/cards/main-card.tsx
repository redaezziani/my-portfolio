'use client';
import React from 'react';

import ProjectCard from '@/components/projects/project-card';
import { Button } from '@/components/ui/button';
const MainCard = () => {
   
    return (
        <ProjectCard
            id='bento-card'
            className='col-span-2    relative flex justify-start items-start flex-col   row-span-12 max-h-72 md:max-h-full  md:row-span-6 h-auto'
        >
            <div className="size-20 bottom-0 z-0 absolute bg-slate-100 blur-[100px] rounded-full" />
            <div className="w-full absolute bottom-0 pointer-events-none  z-10 p-3 h-full flex gap-1 justify-start items-start flex-col">
            

            </div>
        </ProjectCard>
    )
}

export default MainCard