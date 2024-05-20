'use client';
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/projects/project-card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BentoCard from './first-card';
import BentoCard2 from './sec-card';
import MainCard from '@/components/cards/main-card';
const Projects = () => {
    return (
        <div
            id='projects'
            className='max-w-6xl w-full px-3 md:p-0 mx-auto mt-0 mb-8 sm:mt-20 flex flex-auto flex-col  gap-4 sm:min-h-[37.5rem]'
        >
            <div className="flex gap-3 justify-center items-center flex-col">
                <p
                    className=' opacity-80'
                >
                    Build with me a wondrful project  and let's make it happen
                </p>
                <span
                    className=' flex'
                >
                    the project will be build with the latest technologies and will be a great experience for both of us
                    <svg
                        className=' ml-2 md:block hidden '
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill={"none"}>
                        <path d="M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>
            <div className=" mt-5 grid-rows-12   min-h-[45rem] w-full gap-3 grid  md:grid-cols-3 sm:grid-cols-2  grid-cols-1">
                <BentoCard
                />
                
                <BentoCard2
                />
                <BentoCard2
                />
               
                <MainCard/>
                <ProjectCard
                    className='col-span-1 row-span-6 h-auto'
                >
                </ProjectCard>
               

            </div>
        </div>
    )
}

export default Projects