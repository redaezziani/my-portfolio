import React from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  children?: React.ReactNode;
  className?: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, children, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleIsHovered = () => {
      setIsHovered(!isHovered);
    };

    return (
      <motion.section
        ref={ref}
        onHoverStart={handleIsHovered}
        onHoverEnd={handleIsHovered}
        className={cn(
          `relative flex w-full touch-none select-none flex-col items-start justify-start gap-3 rounded-lg bg-gradient-to-b from-slate-500/40 to-transparent p-px`,
          className
        )}
        {...props}
      >
        <AnimatePresence>
          <motion.div className="group relative flex size-full select-none flex-col items-end justify-center overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200 bg-white bg-bottom transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800">
            {children}
          </motion.div>
        </AnimatePresence>
      </motion.section>
    );
  }
);
ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
