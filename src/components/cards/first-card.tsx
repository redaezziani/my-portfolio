'use client';
import React, { useEffect } from 'react';
import ProjectCard from '@/components/projects/project-card';
import { useTheme } from 'next-themes';

const BentoCard = () => {
    const {theme} = useTheme();

    const [currentTheme, setCurrentTheme] = React.useState<string | undefined>(theme);
   
    useEffect(() => {
        setCurrentTheme(theme);
    }
    , [theme]);

    return (
        <ProjectCard
            className=' col-span-1 w-full relative     flex justify-start items-start flex-col   h-full aspect-square '
        >
            <div className="w-full bg-[url('./images/HabbitBackgroundbottom.png')] inset-0 bg-cover absolute"/>

               <div className="neon" />
           <div className="w-full p-3 h-full flex flex-col gap-2 justify-start items-start">
            
           </div>
           <div
           style={{
                filter: 'drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.25))',
                backdropFilter: 'blur(4px)',
           }}
           className="w-2/3 rounded border z-10 border-bordre p-2 absolute h-52 flex justify-start items-start px-4 flex-col  -bottom-10 -right-6 ">
            <div className="w-full">
              
            </div>
           </div>
        </ProjectCard>
    );
}

export default BentoCard;
