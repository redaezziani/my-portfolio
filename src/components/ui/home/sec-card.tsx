'use client';
import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectCard from '@/components/projects/project-card';
import { Button } from '../button';

const BentoCard2 = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.to(ref.current, {
            opacity: 1,
            stagger: 0.2,
            scale: 1,
            ease: 'expo.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: ref.current,
                start: 'bottom bottom',
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

    return (
        <ProjectCard
            ref={ref}
            id='bento-card'
            className='col-span-1   scale-95 relative flex justify-start items-start flex-col  opacity-0 row-span-12 max-h-72 md:max-h-full  md:row-span-5 h-auto'
        >
            <div className="size-20 bottom-0 z-0 absolute bg-slate-100 blur-[100px] rounded-full" />
           
        </ProjectCard>
    );
}

export default BentoCard2;
