'use client';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
const cardVariants = {
    initial: { perspective: 600 },
    hover: {
      rotateY: 10,
      scale: 1.05,
      transition: { 
        duration: 0.3,
      }
    }
  };

const layerVariants = {
    initial: { y: 0 },
    hover: (layerIndex) => ({
        y: layerIndex * -10,
        transition: { duration: 0.3 }
    })
};

const textVariants = {
    initial: { opacity: 0.6, y: 20 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, delay: 0.1 }
    }
  };
  
// add a interface for the props that will be passed to the MagicCard component :
/*
 
*/

// take a motion.img and add the layoutId prop to it 

interface MagicCardProps {
    children?: React.ReactNode;
}
const MagicCard = ({children}: MagicCardProps) => {
  return (
    <AnimatePresence>
    <motion.div
        className="w-full  select-none   relative col-span-1 flex flex-col gap-2 justify-start  items-start"
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        layout
    >
        <motion.div
            className="w-full flex justify-center items-start relative h-52 z-20 bg-slate-50/0 border border-border rounded-lg"
            variants={layerVariants}
            custom={0}
            layoutId='card'
        >
        {children} 
        </motion.div>
        <motion.div
            className="w-full absolute z-10 left-0 bg-slate-50/5 h-52 border border-border rounded-lg"
            variants={layerVariants}
            custom={1}
            layoutId='card'
        />
        <motion.div
           
            className="w-full absolute z-0 left-0 bg-slate-50/10 h-52 border border-border rounded-lg"
            variants={layerVariants}
            custom={2}
            layoutId='card'
        />
       
        <motion.div
         variants={textVariants}
        className="mt-4 pb-8 flex flex-col gap-2 justify-start items-start px-1">
            <Link
                href='https://github.com/redaezziani/train-api'
                ><motion.h1
                className='text-sm  text-slate-50'
                >
                    tecket api train project 
                </motion.h1>
            </Link>
            <motion.p
            className='text-xs line-clamp-2 text-slate-50/40'
            >
                this project is a ticket api project that will help you to book your ticket and travel
            </motion.p>
        </motion.div>
    </motion.div>
</AnimatePresence>
  )
}

export default MagicCard