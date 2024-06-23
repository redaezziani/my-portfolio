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
            <div


              className='group relative flex bg-gradient-to-br from-[#020406] via-[#03111a]  to-[#0c313f] h-full w-full select-none flex-col items-start justify-start overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200  bg-bottom p-2 transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800'>
              <div className='absolute -right-11 -top-11 flex size-60 rounded-full bg-primary/40 blur-[100px]' />

              <div className='z-10 mt-4 flex items-center justify-start gap-2 px-2 text-sm  text-slate-500 dark:text-slate-200'>
                <div className='z-10 flex h-full w-full flex-col items-start justify-end gap-3'>
                  <h1 className='text-balance text-xl capitalize font-semibold text-slate-50 dark:text-slate-100'>
                    Designe On your terms and pause anytime.
                  </h1>
                  <p className='text-md font-medium leading-relaxed text-slate-200 dark:text-slate-200/30'>
                    Make your designe good and make it a success.
                  </p>
                  <div className="w-full mt-1 flex flex-wrap gap-2">
                    <div className=" px-2 py-1 font-medium gap-2  border border-slate-100/35 rounded-lg flex justify-start items-start">
                      <DraftingCompass
                        className=' text-white'
                        size={14} />
                      <p className="text-xs text-white">
                        new design
                      </p>
                    </div>
                    <div className=" px-2 py-1 font-medium gap-2  border border-slate-100/35 rounded-lg flex justify-start items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={14} height={14} color={"#ffffff"} fill={"none"}>
                        <path d="M20.9427 16.8354C20.2864 12.8866 18.2432 9.94613 16.467 8.219C15.9501 7.71642 15.6917 7.46513 15.1208 7.23257C14.5499 7 14.0592 7 13.0778 7H10.9222C9.94081 7 9.4501 7 8.87922 7.23257C8.30834 7.46513 8.04991 7.71642 7.53304 8.219C5.75682 9.94613 3.71361 12.8866 3.05727 16.8354C2.56893 19.7734 5.27927 22 8.30832 22H15.6917C18.7207 22 21.4311 19.7734 20.9427 16.8354Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M10.125 17.5L10.125 11.5M12 11.5V10M12 19V17.5M10.125 14.5H13.875M13.875 14.5C14.4963 14.5 15 15.0037 15 15.625V16.375C15 16.9963 14.4963 17.5 13.875 17.5H9M13.875 14.5C14.4963 14.5 15 13.9963 15 13.375V12.625C15 12.0037 14.4963 11.5 13.875 11.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.25662 4.44287C7.05031 4.14258 6.75128 3.73499 7.36899 3.64205C8.00392 3.54651 8.66321 3.98114 9.30855 3.97221C9.89237 3.96413 10.1898 3.70519 10.5089 3.33548C10.8449 2.94617 11.3652 2 12 2C12.6348 2 13.1551 2.94617 13.4911 3.33548C13.8102 3.70519 14.1076 3.96413 14.6914 3.97221C15.3368 3.98114 15.9961 3.54651 16.631 3.64205C17.2487 3.73499 16.9497 4.14258 16.7434 4.44287L15.8105 5.80064C15.4115 6.38146 15.212 6.67187 14.7944 6.83594C14.3769 7 13.8373 7 12.7582 7H11.2418C10.1627 7 9.6231 7 9.20556 6.83594C8.78802 6.67187 8.5885 6.38146 8.18945 5.80064L7.25662 4.44287Z" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <p className="text-xs text-white">
                        save mony
                      </p>
                    </div>
                    <div className=" px-2 py-1 font-medium gap-2  border border-slate-100/35 rounded-lg flex justify-start items-start">
                      <DraftingCompass
                        className=' text-white'
                        size={14} />
                      <p className="text-xs text-white">
                        new design
                      </p>
                    </div>
                    <div className=" px-2 py-1 font-medium gap-2  border border-slate-100/35 rounded-lg flex justify-start items-start">
                      <DraftingCompass
                        className=' text-white'
                        size={14} />
                      <p className="text-xs text-white">
                        new design
                      </p>
                    </div>
                    <div className=" px-2 py-1 font-medium gap-2 border-dashed  border border-slate-100/35 rounded-lg flex justify-start items-start">
                      <DraftingCompass
                        className=' text-white opacity-0 '
                        size={14} />
                      <p className="text-xs opacity-0 text-white">
                        new design
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`absolute opacity-90 inset-0 z-[1] bg-cover`}>
                  <div
                    className="h-full w-full  bg-repeat bg-[url('./images/decorationBlockDark.svg')]"
                    style={{
                      WebkitMaskImage:
                        'radial-gradient(70% 70% at 50.00% 30%, #000 0%, rgba(0, 0, 0, 0.25) 100%)',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsSection;
