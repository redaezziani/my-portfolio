'use client';
import React, { useEffect } from 'react';
import ProjectCard from '@/components/projects/project-card';
import { useTheme } from 'next-themes';
import AnimatedTag from '../projects/animated-tag';

const BentoCard2 = () => {
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
        <div className="neon" />
           <div className="w-full p-3 h-full flex flex-col gap-2 justify-start items-start">
            <div className="flex mt-6 flex-col justify-start items-start md:max-w-5xl">
                <span className=" text-sm font-medium capitalize ">
                Turning Your Imagination into Reality
                </span>
                <span className=" mt-3 text-sm  text-gray-500">
                Together, we'll turn your dream website into a vibrant reality, ensuring it captures hearts and minds alike,
                and leaves a lasting impression on all who visit.
                </span>
            </div>
             <AnimatedTag text='Lets Get Started' />
           </div>
           <div
           style={{
                filter: 'drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.25))',
                backdropFilter: 'blur(4px)',
           }}
           className="w-2/3 rounded border z-10 border-bordre p-2 absolute h-52 flex justify-start items-start px-4 flex-col  -bottom-10 -right-6 ">
            <div className="w-full">
                <span className=" text-sm ">
                  Just imagine
                </span>
                <span className=" text-sm  text-gray-500">
                   dreams can come true
                </span>
                <img
                className='w-full h-32 opacity-80'
                style={
                    {
                        filter: 'drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.25))',
                        backdropFilter: 'blur(4px)',
                    
                    }
                }
                src={currentTheme !== 'dark' ? '/project/barin-dark.svg' : '/project/brain-light.svg'}
                alt=""  />
            </div>
           </div>
        </ProjectCard>
    );
}

export default BentoCard2;
