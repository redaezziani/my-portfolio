'use client';
import React from 'react';
import BentoCard from '@/components/cards/first-card';
import BentoCard2 from '@/components/cards/sec-card';
import MainCard from '@/components/cards/main-card';
import BentoCard3 from '@/components/cards/therd.card';
import BentoCard4 from '@/components/cards/fourt-card';
const Projects = () => {
  return (
    <div
      id='projects'
      className='z-o mx-auto  flex h-fit w-full max-w-[74rem] flex-auto touch-none flex-col gap-4 justify-center items-center  bg-transparent px-4 md:max-h-[55rem] md:p-0 md:px-1'
    >
      <div className='relative  grid  w-full grid-cols-1 gap-3 overflow-hidden bg-transparent md:grid-cols-3'>
        {/* <div className='absolute bottom-40 right-60 z-0 size-96 rounded-full bg-gradient-to-b from-sky-500/30 to-transparent blur-[120px]'></div> */}
        {/* <div className='col-span-1 aspect-square w-full'>
          <BentoCard />
        </div>
        <div className='col-span-1 aspect-square w-full'>
          <BentoCard2 />
        </div>
        <div className='col-span-1 aspect-square w-full'>
          <BentoCard3 />
        </div>
        <div className='aspect-square w-full md:col-span-2'>
          <MainCard />
        </div>
        <div className='col-span-1 aspect-square w-full'>
          <BentoCard4 />
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
