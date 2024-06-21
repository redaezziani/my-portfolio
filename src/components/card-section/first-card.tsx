import { Zap } from 'lucide-react';
import React from 'react';
import Preview from '../core/Preview';

const FirstCard = () => {
  return (
    <section className='relative col-span-1 flex aspect-video w-full select-none flex-col items-start justify-start gap-3 rounded-lg border-slate-700/25 bg-gradient-to-b from-slate-500/40 to-transparent p-px md:col-span-2'>
      <div className='group relative flex h-full w-full select-none flex-col items-start justify-center gap-4 overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200 bg-neutral-50 bg-bottom p-[24px] transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-2'>
          <div className='z-10 flex aspect-video h-auto w-72 items-center justify-center rounded-lg border border-dashed border-slate-400/35 bg-neutral-50 dark:bg-slate-950'>
            <Zap
              strokeWidth={0.8}
              className='h-12 w-12 text-slate-400/75 dark:text-slate-400/35'
            />
          </div>
          <h3 className='mt-6 uppercase text-primary'>The best technologies</h3>
          <p className='w-[60%] text-center text-sm font-medium text-slate-400 dark:text-slate-400'>
            Lets build your next project with the best technologies in the
            market today and make it a success.
          </p>
        </div>
        <Preview />
      </div>
    </section>
  );
};

export default FirstCard;
