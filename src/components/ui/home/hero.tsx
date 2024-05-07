'use client';

import { motion } from "framer-motion";



const HeroAnimations = {
show:{
    opacity:1,
    y:0
  },
  hidden:{
    opacity:0,
    y:100
  }
}



function Hero() {

  return (
    <>
      <section id="top" className="relative z-30 px-0 text-center" style={{WebkitMaskImage: 'linear-gradient(to bottom, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)'}}>
        <div className={`absolute -z-[1]  inset-0 bg-cover`}>
          <div className="w-full h-full bg-repeat bg-[url('./images/decorationBlockLight.svg')] dark:bg-[url('./images/decorationBlockDark.svg')]" style={{WebkitMaskImage: 'radial-gradient(70% 70% at 50.00% 30%, #000 0%, rgba(0, 0, 0, 0.25) 100%)'}}></div>
        </div>
        <motion.div
          transition={{
            delay:0.5,
            duration:0.8,
            type:'Tween'
          }}
          variants={HeroAnimations}
          initial={'hidden'}
          animate={'show'}
          className="pt-40 relative sm:pt-60 mx-auto inline-block font-Inter font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-950 to-slate-700 dark:from-slate-50 dark:to-slate-200 leading-tight text-4xl sm:leading-tight sm:text-5xl lg:leading-tight lg:text-6xl">
          Reda.<br/>
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
            delay:0.8,
            duration:0.8,
            type:'Tween'
          }}
          variants={HeroAnimations}
          initial={'hidden'}
          animate={'show'}
          className="px-4 text-center mt-6 py-10 max-w-[30rem] mx-auto text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
                I'm a software engineer based in Morocco. I specialize in building exceptional digital experiences.
            </p>
        </motion.div>
        
      </section>
    </>
  );
}

export default Hero;