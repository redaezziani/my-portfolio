import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, MotionProps } from 'framer-motion'; // Import MotionProps

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement>, MotionProps { // Extend MotionProps
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
            className={cn(`w-full cursor-pointer flex justify-start items-start gap-3 flex-col relative`, className)}
            {...props}
        >
            <AnimatePresence>
                <motion.div
                    className='group relative rounded-lg w-full h-full  inset-0 bg-cover bg-bottom border border-slate-200  hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow-sm transition duration-500 flex flex-col items-end hover:shadow-2xl hover:shadow-blue-100/20 justify-center overflow-hidden'
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </motion.section>
    );
});

export default ProjectCard;
