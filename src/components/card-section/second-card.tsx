import React from 'react'
import Preview from '../core/Preview'

const SecondCard = () => {
  return (
    <div className="w-full h-full     rounded-lg    border-slate-700/25   relative flex touch-none select-none flex-col items-start justify-start   bg-gradient-to-b from-slate-500/40 to-transparent p-px">
            <div className="w-full group relative flex gap-3 h-full  select-none flex-col items-start justify-start p-2 overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200 bg-white bg-bottom transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800" >
              <span className="rounded-full z-10    border-slate-500/25   relative flex touch-none select-none flex-col items-start justify-start gap-3  bg-gradient-to-b from-slate-500/40 to-transparent p-px">
                <div className="w-full group relative text-xs  flex h-full  select-none  items-center justify-center px-3 py-0.5 overflow-hidden rounded-[calc(0.85rem-0.2px)] border border-slate-400/35 bg-white bg-bottom transition duration-500 text-slate-700 dark:text-slate-100 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800">6.7K Client</div>
              </span>
              <div className="flex z-10 px-2 mt-4 gap-2 text-sm capitalize text-slate-500 dark:text-slate-200 justify-start items-center">
              <Preview/>
               <div className="h-full z-10 w-full flex flex-col justify-end items-start gap-3">
                <h1
                className='text-lg text-balance font-medium  text-slate-900 dark:text-slate-100'
                >
                    Designe On your terms and pause anytime.
                </h1>
                <p
                className=' text-xs text-slate-500 dark:text-slate-200/30'
                >
                 make your designe good
                </p>
               </div>
              </div>
            </div>
          </div>
  )
}

export default SecondCard