'use client';
import { motion } from 'framer-motion';
import MagicCard from "@/components/projects/magic-card";

const CardsSection = () => {
    return (
        <div className="w-full px-4 md:px-16 mt-10 min-h-96 bg-transparent  relative max-w-7xl flex flex-col gap-3 justify-start items-start">
            <img
                className="w-full absolute   object-cover opacity-40"
                src="/project/grid-bg.png" alt="" />
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-3 sm:grid-cols-2">
                <MagicCard >
                    <motion.img
                        className="w-1/2 opacity-60 object-cover"
                        src="/icons/tecket.svg"
                        alt=""
                        layoutId='card'
                    />
                </MagicCard>
                <MagicCard />
                <MagicCard />
            </div>
        </div>
    )
}

export default CardsSection