'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectCard from '@/components/projects/project-card';
import { Button } from '../button';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

gsap.registerPlugin(ScrollTrigger);
const BentoCard2 = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const {theme} = useTheme();

    const [currentTheme, setCurrentTheme] = React.useState<string | undefined>(theme);
    useGSAP(() => {
        gsap.to(ref.current, {
            opacity: 1,
            stagger: 0.2,
            scale: 1,
            ease: 'expo.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: ref.current,
                start:" bottom top",
                end: 'top 20%',
                scrub: 1,
            },
        });

        gsap.to('.text-header', {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,

        });
    }, []);
    useEffect(() => {
        setCurrentTheme(theme);
    }
    , [theme]);

    return (
        <ProjectCard
            ref={ref}
            className=' col-span-1 w-full relative     flex justify-start items-start flex-col  opacity-0 h-full aspect-square '
        >
        <div className="size-20 bottom-0 z-0 absolute dark:bg-slate-100 bg-[#1BA0F2] blur-[100px] rounded-full" />
           <div className="w-full p-3 h-full flex flex-col gap-2 justify-start items-start">
            <div className="flex mt-6 flex-col justify-start items-start md:max-w-5xl">
                <span className="text-[11px] font-semibold uppercase leading-5 tracking-wide">
                Turning Your Imagination into Reality
                </span>
                <span className="text-[11px] mt-3 font-semibold uppercase leading-5 tracking-wide text-gray-500">
                Together, we'll turn your dream website into a vibrant reality, ensuring it captures hearts and minds alike,
                and leaves a lasting impression on all who visit.
                </span>
            </div>
           <motion.span
            animate={{ y: -10,x:2 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
            }}

            className="flex items-center"><span className="mt-3 inline-block whitespace-nowrap rounded-full  bg-gradient-to-r from-[#1B8EF2] via-[#1BA0F2] to-[#30BBF2]  shadow hover:bg-gradient-to-r hover:from-[#1B8EF2] hover:via-[#1BA0F2] hover:to-[#30BBF2] px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white">
            Let's Get Started
            </span>
            <svg className="mr-6  h-8 w-10 [transform:rotateY(180deg)rotateX(0deg)]" width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z" fill="currentColor" className="fill-gray-500  dark:fill-gray-100"></path></svg>
            </motion.span>
           </div>
           <div
           style={{
                filter: 'drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.25))',
                backdropFilter: 'blur(4px)',
           }}
           className="w-2/3 rounded border z-10 border-bordre p-2 absolute h-52 flex justify-start items-start px-4 flex-col  -bottom-10 -right-6 ">
            <div className="w-full">
                <span className="text-[11px] font-semibold uppercase leading-5 tracking-wide">
                  Just imagine
                </span>
                <span className="text-[11px] font-semibold uppercase leading-5 tracking-wide text-gray-500">
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
