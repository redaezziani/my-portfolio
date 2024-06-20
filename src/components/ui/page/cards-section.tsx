import { DraftingCompass, LockOpen, MoveRight, Star } from "lucide-react";
import { Button } from "../button";
import FirstCard from "@/components/card-section/first-card";
import SecondCard from "@/components/card-section/second-card";
const CardsSection = () => {
  return (
    <div
     
      className='z-o mx-auto  flex h-fit w-full max-w-[74rem] flex-auto touch-none flex-col gap-4 justify-center items-center  bg-transparent px-4  md:px-4'
    >
      <div className='relative  grid  w-full grid-cols-1 gap-2  bg-transparent md:grid-cols-3'>
        <div className='absolute bottom-40 right-60 z-[-1] size-96 rounded-full bg-gradient-to-b from-sky-500/30 to-transparent blur-[120px]'/>
        <FirstCard />
        <section className="w-full  col-span-1 h-full overflow-hidden flex justify-start items-center gap-2 flex-col  aspect-video">
          <SecondCard />

          <div className="w-full h-full      rounded-lg   border-slate-700/25   relative flex touch-none select-none flex-col items-start justify-start gap-3  bg-gradient-to-tl from-slate-500/40 to-transparent p-px">
            <div className="w-full group  relative flex h-full  select-none flex-col items-start justify-start p-2 overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200 bg-white bg-bottom transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800" >
              <div className="w-full  p-[10px] left-0 z-10 flex justify-center items-end  gap-3 h-40 absolute bottom-0">
                <Button

                  className=" text-slate-400 font-medium border border-slate-400/35 flex gap-2 justify-center items-center capitalize text-xs"
                  variant={'secondary'}
                >
                  <DraftingCompass
                    size={16}
                  />
                  save as draft
                </Button>
                <Button

                  className=" w-full font-medium text-slate-50 flex gap-2 justify-center items-center capitalize text-xs"
                >
                  Next Step
                  <MoveRight size={16} />
                </Button>
              </div>
              <div className="w-full absolute right-2 top-2">
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default CardsSection;
