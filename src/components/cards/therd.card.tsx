'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectCard from '@/components/projects/project-card';
import { Button } from '@/components/ui/button';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import NumberTicker from '../projects/number';
import AnimatedTag from '../projects/animated-tag';

gsap.registerPlugin(ScrollTrigger);
const BentoCard3 = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

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
                start: " bottom top",
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
            <div className="neon" />
            <div className="w-full p-3 h-full flex flex-col gap-2 justify-start items-start">
                <div className="flex mt-6 flex-col justify-start items-start md:max-w-5xl">
                    <span className="text-[11px] font-semibold uppercase leading-5 tracking-wide">
                        Elevate Your Online Presence with SEO Mastery
                    </span>
                    <span className="text-[11px] mt-3 font-semibold uppercase leading-5 tracking-wide text-gray-500">

                        Transform your website into an online powerhouse with SEO expertise. Craft a lightning-fast, user-friendly site that dominates search rankings and drives success.
                    </span>
                </div>
                <AnimatedTag text='fast and user-friendly' />
            </div>
            <div
                style={{
                    filter: 'drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.25))',
                    backdropFilter: 'blur(4px)',
                }}
                className="w-2/3 rounded border z-10 border-bordre p-2 absolute h-52 flex justify-start items-start px-4 flex-col  -bottom-10 -right-6 ">
                <div className="w-full">
                    <span className="text-[11px] font-semibold uppercase leading-5 tracking-wide">
                        SEO Mastery
                    </span>
                    <span className="text-[11px] font-semibold uppercase leading-5 tracking-wide text-gray-500">
                        and search engine rankings
                    </span>
                    <div className="flex gap-2 justify-center items-center mt-3">
                        <NumberTicker
                            value={100}
                            className=' text-6xl font-semibold'
                        />
                        {' '}
                        %
                    </div>
                </div>
            </div>
        </ProjectCard>
    );
}

export default BentoCard3;
