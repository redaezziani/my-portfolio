'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FirstCard = () => {
  // lets make a crazy card animation
  const imagesFrame = ['/frame-1.svg', '/frame-2.svg', '/frame-3.svg', '/frame-4.svg']
  const [currentFrame, setCurrentFrame] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % imagesFrame.length) // the value will be 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative col-span-1 flex aspect-video w-full select-none flex-col items-start justify-start gap-3 rounded-lg border-[#1B8EF2]/25 bg-gradient-to-b from-[#1B8EF2]/40 to-transparent p-px md:col-span-2">
      <div className="group relative flex size-full select-none flex-col items-start justify-center gap-4 overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200 bg-gradient-to-t from-[#1B8EF2] via-[#1BA0F2] to-[#30BBF2]  bg-bottom transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800">
        <div className="flex size-full flex-col items-start justify-start">
          <div className="z-10 w-full  flex  p-3 border-b border-dashed border-white items-center justify-start gap-2 text-sm capitalize text-white">
            <div className="z-10 flex size-full flex-col items-start justify-end gap-2">
              <h1 className="text-xl font-medium text-white">
                Modern Ui Design
              </h1>
              <p className=" font-medium line-clamp-2 text-white/90">
                Modern web design is an approach to web design that emphasizes making websites user-friendly and visually appealing on any device.
              </p>
            </div>
          </div>
          <div className="w-full select-none  h-full flex justify-center items-center relative">
            <AnimatePresence>
            <motion.div
            key={currentFrame}
            initial={{  y: 300 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5,ease: "easeInOut"}}
            exit={{scale: 0.5, opacity: 0}}
            className="w-[90%] md:w-[40rem] overflow-hidden absolute -bottom-32 border-slate-50/40 border rounded-lg  p-0.5">
            <img
            className='w-full h-full object-cover rounded-md'
            src={imagesFrame[currentFrame]}
             alt=""  />
            </motion.div>
            </AnimatePresence>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FirstCard;
