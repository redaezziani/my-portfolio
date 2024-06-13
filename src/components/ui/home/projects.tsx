'use client';
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/projects/project-card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BentoCard from '@/components/cards/first-card';
import BentoCard2 from '@/components/cards/sec-card';
import MainCard from '@/components/cards/main-card';
import BentoCard3 from '@/components/cards/therd.card';
import BentoCard4 from '@/components/cards/fourt-card';
const Projects = () => {
    return (
        <div
            id='projects'
            className=' max-w-6xl bg-transparent  md:max-h-[55rem] h-fit overflow-hidden  w-full px-3 md:p-0 mx-auto mt-0 sm:mt-20 flex flex-auto flex-col  gap-4 '
        >
            <div className=" mt-5 h-fit bg-transparent overflow-hidden relative    w-full gap-3 grid  md:grid-cols-3 grid-cols-1 ">
                <div className="size-96 z-0 rounded-full absolute bottom-40 right-60 bg-gradient-to-b from-sky-500/30 to-transparent blur-[120px]">

                </div>
                <div className="w-full aspect-square col-span-1">
                    <BentoCard />
                </div>
                <div className="w-full aspect-square col-span-1">
                    <BentoCard2 />
                </div>
                <div className="w-full aspect-square col-span-1">
                    <BentoCard3 />
                </div>
                <div className="w-full  aspect-square md:col-span-2">
                    <MainCard />
                </div>
                <div className="w-full aspect-square col-span-1">
                    <BentoCard4 />
                </div>
            </div>
        </div>
    )
}

export default Projects