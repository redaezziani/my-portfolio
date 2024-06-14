import React from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, MotionProps } from 'framer-motion'; 

//@ts-ignore
interface ProjectCardProps  {
    children?: React.ReactNode;
    className?: string;
}


const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(({ className, children, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleIsHovered = () => {
        setIsHovered(!isHovered);
    };

    return (
        <motion.section
            ref={ref}
            onHoverStart={handleIsHovered}
            onHoverEnd={handleIsHovered}
            className={cn(` w-full touch-none select-none    rounded-lg bg-gradient-to-b from-slate-500/40 to-transparent p-px flex justify-start items-start gap-3 flex-col relative`, className)}
            {...props}
        >
            <AnimatePresence>
                <motion.div
                    className='group select-none rounded-[calc(0.45rem-0.3px)]  relative bg-white dark:bg-slate-950  w-full h-full    bg-bottom border border-slate-200  hover:border-slate-300 dark:border-slate-900 dark:hover:border-slate-800  transition duration-500 flex flex-col items-end   justify-center overflow-hidden'
                >
                   
                    {children}
                </motion.div>
            </AnimatePresence>
        </motion.section>
    );
});

export default ProjectCard;
