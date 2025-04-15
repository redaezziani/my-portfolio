import { DraftingCompass } from 'lucide-react';
import FirstCard from '@/components/card-section/first-card';
import SecondCard from '@/components/card-section/second-card';
import { ThirdCard } from '@/components/card-section/third-card';
const CardsSection = () => {
    return (
        <div className="z-o mx-auto flex h-fit w-full max-w-[74rem] flex-auto flex-col items-center justify-center gap-4 bg-transparent px-4 md:px-4">
            <div className="relative grid w-full grid-cols-1 gap-2 bg-transparent md:grid-cols-3">
                <div className="absolute bottom-40 right-60 z-[-1] size-96 rounded-full bg-gradient-to-b from-sky-500/30 to-transparent blur-[120px]" />
                <FirstCard />
                <section className="col-span-1 flex aspect-video size-full flex-col items-center justify-start gap-2 overflow-hidden">
                    <SecondCard />
                    <ThirdCard />
                </section>
            </div>
        </div>
    );
};

export default CardsSection;
