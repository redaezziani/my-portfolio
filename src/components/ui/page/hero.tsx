'use client';

import { motion } from 'framer-motion';
import { Button } from '../button';
import SaveButton from './save-button';

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
          <Button
            variant={'gradient'}
            className="mb-20 flex items-center justify-center gap-1 py-3 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={18}
              height={18}
              fill={'none'}
            >
              <path
                d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            contact me
          </Button>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
