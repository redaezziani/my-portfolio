'use client';
import React, { useEffect } from 'react';
import ProjectCard from '@/components/projects/project-card';
import { useTheme } from 'next-themes';

const BentoCard = () => {
  const { theme } = useTheme();

  const [currentTheme, setCurrentTheme] = React.useState<string | undefined>(
    theme
  );

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <ProjectCard className='relative touch-none select-none col-span-1 flex aspect-square h-full w-full flex-col items-start justify-start'>

      <div className='neon' />
      <div className='flex h-full w-full flex-col items-start justify-start gap-2 p-3'></div>
    </ProjectCard>
  );
};

export default BentoCard;
