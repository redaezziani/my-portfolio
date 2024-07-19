'use client'
import Link from 'next/link'

import { Button } from '@/components/ui/button';
const page = () => {
    const navLinks = [
        {
            "name": "home",
            "type": "link",
            "path": "/"
        },

        {
            "name": "Shop Collection",
            "type": "anchor",
            "path": "#shop-collection"
        },
        {
            "name": "Best Seller",
            "type": "anchor",
            "path": "#best-seller"
        },

    ]
    return (
        <div className=' w-full bg-black min-h-screen flex justify-start flex-col items-center gap-6 relative overflow-x-hidden'
        >
           
            <header
                className=' absolute px-3 top-0 w-full flex justify-center items-center flex-col gap-4'
            >
                <nav
                    className=' flex  py-3 w-full mt-3 max-w-7xl justify-between items-center relative'
                >
                    <div className="flex justify-center items-center gap-2">

                        <h1
                            className=' font-bold text-slate-50'
                        >
                            <b className=' text-2xl pr-0.5 text-red-600'>D</b>exer io
                        </h1>
                    </div>
                    <ul
                        className=' flex justify-between items-center gap-4 text-white text-sm'
                    >
                        {
                            navLinks.map((i, index) => {
                                return (
                                    <li
                                        key={index}
                                        className=' hover:text-red-600 focus:text-red-600 transition-all ease-in-out duration-300'
                                    >
                                        <Link
                                            href={i.type === 'link' ? `${i.path}` : `#${i.path}`}
                                        >
                                            {i.name}
                                        </Link>
                                    </li>
                                )
                            })

                        }
                    </ul>

                </nav>
            </header>

            <div className=" grid  w-full grid-cols-3 max-w-5xl gap-3">
                <div className="w-full bg-gradient-to-b from-red-700/15 to-transparent aspect-[9/14] -ml-2 p-2 col-span-1 border rounded-lg border-red-700/20"/>
                <div className="w-full bg-gradient-to-b from-red-700/15 to-transparent aspect-[9/14] scale-105 transform p-2 col-span-1 border rounded-lg border-red-700/20"/>
                <div className="w-full bg-gradient-to-b from-red-700/15 to-transparent aspect-[9/14] ml-2  p-2 col-span-1 border rounded-lg border-red-700/20"/>

            </div>
        </div>
    )
}


export default page