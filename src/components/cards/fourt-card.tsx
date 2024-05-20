'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectCard from '@/components/projects/project-card';
import { Button } from '../button';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import NumberTicker from '../projects/number';

gsap.registerPlugin(ScrollTrigger);
const BentoCard4 = () => {
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
                    latest web technologies
                </span>
                <span className="text-[11px] mt-3 font-semibold uppercase leading-5 tracking-wide text-gray-500">
                the greatest web technologies are used to build websites from scratch. No templates, no shortcuts. Just real web code that's built to last.
                </span>
            </div>
           
           </div>
           <img
           className='absolute -bottom-32 -right-32 z-0 w-full aspect-auto  object-cover opacity-20'
           src="/project/c.png" alt="" srcset="" />
           
        </ProjectCard>
    );
}

export default BentoCard4;
