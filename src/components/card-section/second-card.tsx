import React from 'react';
import Preview from '../core/Preview';

const SecondCard = () => {
  return (
    <div className='relative flex h-full w-full select-none flex-col items-start justify-start rounded-lg border-slate-700/25 bg-gradient-to-b from-slate-500/40 to-transparent p-px'>
      <div className='group relative flex h-full w-full select-none flex-col items-start justify-start gap-3 overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200 bg-white bg-bottom p-2 transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800'>
        <div className='absolute -right-11 -top-11 flex size-60 rounded-full bg-primary/40 blur-[100px]'></div>
        <span className='relative z-10 flex touch-none select-none flex-col items-start justify-start gap-3 rounded-full border-slate-500/25 bg-gradient-to-b from-slate-500/40 to-transparent p-px'>
          <div className='group relative flex h-full w-full select-none items-center justify-center overflow-hidden rounded-[calc(0.85rem-0.2px)] border border-slate-400/35 bg-white bg-bottom px-3 py-0.5 text-xs text-slate-700 transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-slate-800'>
            6.7K Client
          </div>
        </span>
        <div className='z-10 mt-4 flex items-center justify-start gap-2 px-2 text-sm capitalize text-slate-500 dark:text-slate-200'>
          <div className='z-10 flex h-full w-full flex-col items-start justify-end gap-3'>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
