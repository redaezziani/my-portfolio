'use client';

import { motion } from 'framer-motion';
import { Button } from '../button';
import SaveButton from './save-button';
import ContactMe from './contact-me';

const HeroAnimations = {
  show: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};

function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative z-30 px-0 text-center"
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)',
        }}
      >
        <div className={`absolute inset-0 -z-[1] bg-cover`}>
          <div
            className="size-full bg-[url('./images/decorationBlockLight.svg')] bg-repeat dark:bg-[url('./images/decorationBlockDark.svg')]"
            style={{
              WebkitMaskImage:
                'radial-gradient(70% 70% at 50.00% 30%, #000 0%, rgba(0, 0, 0, 0.25) 100%)',
            }}
          ></div>
        </div>
        <motion.div
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: 'Tween',
          }}
          variants={HeroAnimations}
          initial={'hidden'}
          animate={'show'}
          className="font-Inter relative mx-auto inline-block bg-gradient-to-b from-slate-950 to-slate-700 bg-clip-text pt-40 text-4xl font-bold leading-tight text-transparent sm:pt-60 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight dark:from-slate-50 dark:to-slate-200"
        >
          Reda.
          <br />
          Ezziani.
          <svg
            className="absolute right-0 w-52 sm:w-72"
            height="22"
            viewBox="0 0 283 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332"
              stroke="url(#paint0_linear_18_19)"
              strokeWidth="4"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_18_19"
                x1="282"
                y1="5.49999"
                x2="40"
                y2="13"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFF0"></stop>
                <stop offset="1" stopColor="#00A3FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          transition={{
            delay: 0.8,
            duration: 0.8,
            type: 'Tween',
          }}
          variants={HeroAnimations}
          initial={'hidden'}
          animate={'show'}
          className="mx-auto mt-6 max-w-[30rem] px-4 py-10 text-center leading-relaxed text-slate-600 dark:text-slate-400"
        >
          <p>
            I am a software engineer based in Morocco. I specialize in building
            exceptional digital experiences.
          </p>
        </motion.div>
        <motion.div
          transition={{
            delay: 0.8,
            duration: 0.8,
            type: 'Tween',
          }}
          variants={HeroAnimations}
          initial={'hidden'}
          animate={'show'}
          className="mt-3 flex w-full items-center justify-center gap-3 pb-6"
        >
          <SaveButton />
         <ContactMe/>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
