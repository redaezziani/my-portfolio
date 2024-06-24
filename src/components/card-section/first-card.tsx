import { Zap } from 'lucide-react';
import React from 'react';
import Preview from '../core/Preview';

const FirstCard = () => {
  return (
    <section className="relative col-span-1 flex aspect-video w-full select-none flex-col items-start justify-start gap-3 rounded-lg border-slate-700/25 bg-gradient-to-b from-slate-500/40 to-transparent p-px md:col-span-2">
      <div className="group relative flex size-full select-none flex-col items-start justify-center gap-4 overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200 bg-gradient-to-t from-[#1B8EF2] via-[#1BA0F2] to-[#30BBF2]  bg-bottom p-[24px] transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800">
        <div className="flex size-full flex-col items-center justify-center gap-2"></div>
      </div>
    </section>
  );
};

export default FirstCard;
