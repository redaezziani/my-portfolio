import React from 'react';

const SecondCard = () => {
  return (
    <div className="relative overflow-hidden flex size-full max-h-52 select-none flex-col items-start justify-start rounded-lg border-slate-700/25 bg-gradient-to-b from-slate-500/40 to-transparent p-px">
      <div className="group relative  flex size-full select-none flex-col items-center justify-center gap-3 overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200  bg-bottom bg-neutral-100 p-1 transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-800 dark:hover:border-slate-800">
        
        <img src='/cover-v1.jpg' alt="cover"
         className='w-full h-full object-cover rounded-lg shadow-sm border border-neutral-400/45 dark:border-slate-900'
          />
      </div>
    </div>
  );
};

export default SecondCard;
