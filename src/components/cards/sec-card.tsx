'use client';
import React, { useEffect } from 'react';
import ProjectCard from '@/components/projects/project-card';
import { useTheme } from 'next-themes';

const BentoCard2 = () => {
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
    </ProjectCard>
  );
};

export default BentoCard2;
