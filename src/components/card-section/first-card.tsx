'use client';
import React from 'react';
import { motion } from 'framer-motion';

const FirstCard = () => {
  return (
    <section className="relative col-span-1 flex aspect-video w-full select-none flex-col items-start justify-start gap-3 rounded-lg border-slate-700/25 bg-gradient-to-b from-slate-500/40 to-transparent p-px md:col-span-2">
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
          <div className="w-full  h-full flex justify-center items-center relative">
            <motion.div
            initial={{  y: 300 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5,ease: "easeInOut"}}
            className="w-[90%] md:w-[40rem] overflow-hidden absolute -bottom-36 border-slate-50/40 border rounded-lg  p-0.5">
            <img
            className='w-full h-full object-cover rounded-md'
            src="/ui.svg" alt=""  />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FirstCard;
