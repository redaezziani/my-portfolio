import { DraftingCompass, LockOpen, MoveRight, Star } from 'lucide-react';
import { Button } from '../button';
import FirstCard from '@/components/card-section/first-card';
import SecondCard from '@/components/card-section/second-card';
const CardsSection = () => {
  return (
    <div className='z-o mx-auto flex h-fit w-full max-w-[74rem] flex-auto touch-none flex-col items-center justify-center gap-4 bg-transparent px-4 md:px-4'>
      <div className='relative grid w-full grid-cols-1 gap-2 bg-transparent md:grid-cols-3'>
        <div className='absolute bottom-40 right-60 z-[-1] size-96 rounded-full bg-gradient-to-b from-sky-500/30 to-transparent blur-[120px]' />
        <FirstCard />
        <section className='col-span-1 flex aspect-video h-full w-full flex-col items-center justify-start gap-2 overflow-hidden'>
          <SecondCard />

          <div className='relative flex h-full w-full touch-none select-none flex-col items-start justify-start gap-3 rounded-lg border-slate-700/25 bg-gradient-to-tl from-slate-500/40 to-transparent p-px'>
            <div className='group relative flex h-full w-full select-none flex-col items-start justify-start overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200 bg-white bg-bottom p-2 transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800'>
              <div className='absolute bottom-0 left-0 z-10 flex h-40 w-full items-end justify-center gap-3 p-[10px]'>
                <Button
                  className='flex items-center justify-center gap-2 border border-slate-400/35 text-xs font-medium capitalize text-slate-400'
                  variant={'secondary'}
                >
                  <DraftingCompass size={16} />
                  save as draft
                </Button>
                <Button className='flex w-full items-center justify-center gap-2 text-xs font-medium capitalize text-slate-50'>
                  Next Step
                  <MoveRight size={16} />
                </Button>
              </div>
              <div className='absolute right-2 top-2 w-full'></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsSection;
