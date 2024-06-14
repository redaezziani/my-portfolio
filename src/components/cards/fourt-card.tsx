import React from 'react';
import ProjectCard from '@/components/projects/project-card';

const BentoCard4 = () => {
    return (
        <ProjectCard
            className=' col-span-1 w-full relative     flex justify-start items-start flex-col   h-full aspect-square '
        >
            <div className="neon" />            
            <div
            className="w-full  p-3 h-full flex flex-col gap-2 justify-start items-start">
                

            </div>
            <img
                className='absolute -bottom-32 -right-32 z-0 w-full aspect-auto  object-cover opacity-20'
                src="/project/c.png" alt=""  />

        </ProjectCard>
    );
}

export default BentoCard4;
