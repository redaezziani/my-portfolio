'use client';

import { motion } from "framer-motion";
import { Button } from "../button";
import SaveButton from "./save-button";



const HeroAnimations = {
  show: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 100
  }
}



function Hero() {

  return (
    <>
      <section id="top" className="relative z-30 px-0 text-center" style={{ WebkitMaskImage: 'linear-gradient(to bottom, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)' }}>
        <div className={`absolute -z-[1]  inset-0 bg-cover`}>
          <div className="w-full h-full bg-repeat bg-[url('./images/decorationBlockLight.svg')] dark:bg-[url('./images/decorationBlockDark.svg')]" style={{ WebkitMaskImage: 'radial-gradient(70% 70% at 50.00% 30%, #000 0%, rgba(0, 0, 0, 0.25) 100%)' }}></div>
        </div>
        <motion.div
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: 'Tween'
          }}
          variants={HeroAnimations}
          initial={'hidden'}
          animate={'show'}
          className="pt-40 relative sm:pt-60 mx-auto inline-block font-Inter font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-950 to-slate-700 dark:from-slate-50 dark:to-slate-200 leading-tight text-4xl sm:leading-tight sm:text-5xl lg:leading-tight lg:text-6xl">
          Reda.<br />
          Ezziani.
          <svg className="w-52 right-0 absolute sm:w-72" height="22" viewBox="0 0 283 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332" stroke="url(#paint0_linear_18_19)" stroke-width="4"></path>
            <defs>
              <linearGradient id="paint0_linear_18_19" x1="282" y1="5.49999" x2="40" y2="13" gradientUnits="userSpaceOnUse">
                <stop stop-color="#00FFF0"></stop>
                <stop offset="1" stop-color="#00A3FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          transition={{
            delay: 0.8,
            duration: 0.8,
            type: 'Tween'
          }}
          variants={HeroAnimations}
          initial={'hidden'}
          animate={'show'}
          className="px-4 text-center mt-6 py-10 max-w-[30rem] mx-auto text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            I'm a software engineer based in Morocco. I specialize in building exceptional digital experiences.
          </p>
        </motion.div>
        <motion.div
          transition={{
            delay: 0.8,
            duration: 0.8,
            type: 'Tween'
          }}
          variants={HeroAnimations}
          initial={'hidden'}
          animate={'show'}
          className="w-full pb-6  mt-3 flex justify-center items-center gap-3">
          <SaveButton/>
          <Button
             variant={'gradient'}
            className=" flex gap-1 font-medium justify-center items-center mb-20 py-3 "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill={"none"}>
              <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            contact me
          </Button>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;