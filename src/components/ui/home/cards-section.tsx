'use client';
import { motion } from 'framer-motion';
import MagicCard from "@/components/projects/magic-card";

const CardsSection = () => {
    return (
        <div className="w-full touch-none z-0 px-4 md:px-16 mt-10 min-h-96 bg-transparent  relative max-w-7xl flex flex-col gap-3 justify-start items-start">
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-3 sm:grid-cols-2">
                <MagicCard 
                title='Ticketing System'
                description='A ticketing system for a company to manage their customer support.'
                link=''
                >
                    
                </MagicCard>
                <MagicCard />
                <MagicCard />
            </div>
        </div>
    )
}

export default CardsSection