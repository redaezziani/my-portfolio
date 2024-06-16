'use client';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
const cardVariants = {
  initial: { perspective: 600 },
  hover: {
    rotateY: 10,
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};
const layerVariants = {
  initial: { y: 0 },
  hover: (layerIndex: number) => ({
    y: layerIndex * -10,
    transition: { duration: 0.3 },
  }),
};

const textVariants = {
  initial: { opacity: 0.6, y: 20 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.1 },
  },
};

interface MagicCardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  link?: string;
}
const MagicCard = ({
  children,
  title,
  description,
  link = '',
}: MagicCardProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className='relative col-span-1 flex w-full select-none flex-col items-start justify-start gap-2'
        variants={cardVariants}
        initial='initial'
        whileHover='hover'
        whileTap={{ scale: 0.95 }}
        layout
      >
        <motion.div
          className='relative z-20 flex h-52 w-full items-start justify-center rounded-lg border border-border bg-slate-50/0'
          variants={layerVariants}
          custom={0}
          layoutId='card'
        >
          {children}
        </motion.div>
        <motion.div
          className='absolute left-0 z-10 h-52 w-full rounded-lg border border-border bg-slate-50/5'
          variants={layerVariants}
          custom={1}
          layoutId='card'
        />
        <motion.div
          className='absolute left-0 z-0 h-52 w-full rounded-lg border border-border bg-slate-50/10'
          variants={layerVariants}
          custom={2}
          layoutId='card'
        />
        <motion.div
          variants={textVariants}
          className='mt-4 flex flex-col items-start justify-start gap-2 px-1 pb-8'
        >
          <Link href={link}>
            <motion.h1 className='text-sm text-slate-800 dark:text-slate-50'>
              {title}
            </motion.h1>
          </Link>
          <motion.p className='line-clamp-2 text-xs text-slate-400 dark:text-slate-50/40'>
            {description}
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MagicCard;
