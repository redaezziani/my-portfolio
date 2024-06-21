import { DraftingCompass, LockOpen, MoveRight, Star } from 'lucide-react';
import { Button } from '../button';
import FirstCard from '@/components/card-section/first-card';
import SecondCard from '@/components/card-section/second-card';
import Image from 'next/image';
const CardsSection = () => {
  return (
    <div className='z-o mx-auto flex h-fit w-full max-w-[74rem] flex-auto flex-col items-center justify-center gap-4 bg-transparent px-4 md:px-4'>
      <div className='relative grid w-full grid-cols-1 gap-2 bg-transparent md:grid-cols-3'>
        <div className='absolute bottom-40 right-60 z-[-1] size-96 rounded-full bg-gradient-to-b from-sky-500/30 to-transparent blur-[120px]' />
        <FirstCard />
        <section className='col-span-1 flex aspect-video h-full w-full flex-col items-center justify-start gap-2 overflow-hidden'>
          <SecondCard />

          <div className='relative flex h-full w-full select-none flex-col items-start justify-start gap-3 rounded-lg border-slate-700/25 bg-gradient-to-tl from-slate-500/40 to-transparent p-px'>
            <div className='group relative flex h-full w-full select-none flex-col items-start justify-start overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200 bg-white bg-bottom p-2 transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800'>
              <div className='flex w-full items-center justify-between'>
                <Button
                  size={'icon'}
                  variant={'outline'}
                  className='cursor-auto p-1'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width={20}
                    height={20}
                    fill={'none'}
                  >
                    <path
                      d='M9.66667 7.7143V6.41327C9.66667 4.94834 10.2781 3.68557 11.179 2.62107C11.5294 2.20702 11.7046 2 12 2C12.2954 2 12.4706 2.20702 12.821 2.62107C13.7219 3.68557 14.3333 4.94834 14.3333 6.41327V7.7143C14.3333 8.78573 14.3333 9.09036 14.9807 9.559C15.4985 9.8919 16 10.2143 16 10.8598C16 11.6429 15.6667 12 14.9358 12H9.06415C8.33333 12 8 11.6429 8 10.8598C8 10.2143 8.50146 9.8919 9.01933 9.559C9.66667 9.09036 9.66667 8.78573 9.66667 7.7143Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M19.5 22C20.8807 22 22 20.8061 22 19.3333C22 17.8606 20.8807 16.6667 19.5 16.6667C19.5 15.1939 18.3807 14 17 14'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M4.5 22C3.11929 22 2 20.8061 2 19.3333C2 17.8606 3.11929 16.6667 4.5 16.6667C4.5 15.1939 5.61929 14 7 14'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10 15V20'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                    />
                    <path
                      d='M14 15V17'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                    />
                  </svg>
                </Button>
              </div>
              <h4 className='mt-3 text-sm font-medium text-slate-500 dark:text-slate-100'>
                Modern Design and Development
              </h4>
              <p className='mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-200/30'>
                Make your design good and make it a success. Lets build your
                next project with the best technologies in the market today and
                make it a success.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsSection;
