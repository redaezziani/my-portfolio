import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    return (
        <div
        id='projects'
            className='max-w-6xl w-full px-3 md:p-0 mx-auto mt-0 mb-8 sm:mt-20 flex flex-auto flex-col  gap-4 h-auto sm:h-[37.5rem]'
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
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20}  fill={"none"}>
                        <path d="M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>
            <div className=" mt-5 w-full gap-3 grid  md:grid-cols-3 sm:grid-cols-2  grid-cols-1">
                
                <div className="w-full cursor-pointer col-span-1 flex justify-start items-start gap-3 flex-col overflow-hidden relative">
                    <div className="group  relative rounded-lg w-full h-60  bg-[#FAFCFF] dark:bg-slate-900 border border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow-sm transition duration-500 flex flex-col items-end justify-center overflow-hidden">
                        <span
                        className='absolute z-20  top-0 left-0 bg-sky-400 text-white p-1 text-xs rounded-br-lg rounded-tl-lg'
                        >
                            Next js
                        </span>
                        <Image
                         src="/project/zinder-saas.png"
                         className='w-full z-10 h-full object-fill'
                         fill
                         alt="" 
                         />
                    </div>
                    <div className="flex gap-2 justify-start items-start flex-col">
                        <Link
                        href='https://www.dimach9.online/'
                        className='text-lg '
                        >
                            Zinder.io
                        </Link>
                        <p
                        className='text-sm opacity-80 line-clamp-1'
                        >
                        platform for managing your business and track your sales  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects