import React from 'react';
import Preview from '../core/Preview';
import { AvatarCirclesGroup } from '../ui/page/avatar-goup';

const SecondCard = () => {
  return (
    <div className="relative flex size-full select-none flex-col items-start justify-start rounded-lg border-slate-700/25 bg-gradient-to-b from-slate-500/40 to-transparent p-px">
      <div className="group relative flex size-full select-none flex-col items-start justify-start gap-3 overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200  bg-bottom bg-slate-50 p-2 transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-800 dark:hover:border-slate-800">
        <div className="z-10 mt-4 flex items-center justify-start gap-2 px-2 text-sm capitalize text-slate-500 dark:text-slate-200">
          <div className="z-10 flex size-full flex-col items-start justify-end gap-3">
           <AvatarCirclesGroup/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
