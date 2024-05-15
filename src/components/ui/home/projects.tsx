'use client';
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/projects/project-card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Projects = () => {
    const [isHovered, setIsHovered] = React.useState(false)
    const ref = React.useRef(null)
    const handelIsHovered = () => {
        console.log('hovered')
        setIsHovered(!isHovered)
    }

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
            <div className=" mt-5 grid-rows-12   h-[45rem] w-full gap-3 grid  md:grid-cols-3 sm:grid-cols-2  grid-cols-1">
                <ProjectCard
                    onHoverStart={handelIsHovered}
                    onHoverEnd={handelIsHovered}
                    ref={ref}
                    className='col-span-1 row-span-6 md:row-span-5 h-auto'
                >
                    <div

                        className="w-full relative h-full  gap-2  justify-center text-center items-center flex-col flex">

                        <motion.div
                            transition={{ duration: 0.3 }}
                            animate={isHovered ? { scale: 1.03, marginBottom: 120 } : { scale: 1 }}

                            className="w-full relative z-20 max-w-[80%] flex justify-end items-center  rounded-xl  h-14 border border-slate-100/25 backdrop-blur-sm p-2">
                                 <svg
                            className='w-8 h-8 text-green-500'
                            viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L11 13.3656L9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="#00ff6e"></path> </g></svg>
                            </motion.div>
                           
                        <motion.p
                            animate={isHovered ? { opacity: 1, y: 20 } : { opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className=' text-sm w-[80%] capitalize font-semibold absolute'
                        >
                            the project will be build with the latest technologies
                        </motion.p>
                        <div className="flex justify-start w-[80%] items-center gap-2">
                           
                        </div>
                    </div>
                </ProjectCard>
                <ProjectCard
                    className='col-span-1 row-span-6 h-auto'
                >
                </ProjectCard>
                <ProjectCard
                    className='col-span-1 row-span-6 md:row-span-5 h-auto'
                >
                </ProjectCard>
                <ProjectCard
                    className='col-span-1 row-span-6 h-auto'
                >
                </ProjectCard>
                <ProjectCard
                    className='col-span-1 row-span-6 h-auto'
                >
                </ProjectCard>
                <ProjectCard
                    className='col-span-1 row-span-6 md:row-span-5 h-auto'
                >
                </ProjectCard>

            </div>
        </div>
    )
}

export default Projects