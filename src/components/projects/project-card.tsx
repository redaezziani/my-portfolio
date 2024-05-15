import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
                    className='group relative rounded-lg w-full h-full bg-[url("./images/HabbitBackgroundbottom.png")] inset-0 bg-cover bg-bottom border border-slate-200 bg-[#FAFCFF] dark:bg-slate-900 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow-sm transition duration-500 flex flex-col items-end hover:shadow-2xl hover:shadow-blue-100/20 justify-center overflow-hidden'
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </motion.section>
    );
});

export default ProjectCard;
