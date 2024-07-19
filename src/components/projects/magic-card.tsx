'use client';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
const cardVariants = {
  initial: { perspective: 600 },
  hover: {
    rotateY: 10,
    scale: 1.03,
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
  initial: { opacity: 1, y: 20 },
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
    <motion.div
      className="group border border-border rounded-lg relative col-span-1 flex w-full select-none flex-col items-start justify-start gap-2"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      layout
    >
      
        {children}
     
      <motion.div
        variants={textVariants}
        className="flex flex-col items-start justify-start gap-2 px-2 pb-8"
      >
        <Link href={link}>
          <motion.h1 className="text-sm font-medium text-slate-800 group-hover:text-[#1b4df2] dark:text-white">
            {title}
          </motion.h1>
        </Link>
        <motion.p className="line-clamp-2 text-xs font-medium text-slate-500 dark:text-slate-50/40">
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default MagicCard;
