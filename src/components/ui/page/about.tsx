'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';
const figmaAnimations = {
  notHover: {
    x: 20,
    rotate: -15,
  },
  isHover: {
    x: 0,
    rotate: 0,
  },
};

const postmanAnimations = {
  notHover: {
    x: -100,
    rotate: 20,
  },
  isHover: {
    x: 0,
    rotate: 0,
  },
};

const nodeAnimations = {
  notHover: {
    x: -70,
  },
  isHover: {
    x: 0,
  },
};

const aeAnimations = {
  notHover: {
    x: 190,
    rotate: -20,
  },
  isHover: {
    x: 0,
    rotate: 0,
  },
};

const code1Animations = {
  notHover: {
    x: 350,
    opacity: 0.7,
  },
  isHover: {
    x: -350,
    opacity: 1,
  },
};

const code2Animations = {
  notHover: {
    x: -250,
    opacity: 0.7,
  },
  isHover: {
    x: 250,
    opacity: 1,
  },
};

const code3Animations = {
  notHover: {
    x: 290,
    opacity: 0.7,
  },
  isHover: {
    x: -290,
    opacity: 1,
  },
};

const paths = {
  figma: '/about/figma.png',
  postman: '/about/postman.png',
  laravel: '/about/laravel.svg',
  prisma: '/about/prisma.svg',
  mysql: '/about/my-sql.svg',
  react: '/about/react.png',
  tailwindcss: '/about/tailwindcss.png',
  xcodeoriginal: '/about/xcode-original.png',
  code01: '/about/code01.png',
  code02: '/about/code02.png',
  code03: '/about/code03.png',
};

const About = () => {
  return (
    <section
      id="about"
      className="relative -mt-16 overflow-hidden px-4 pt-8 md:-mt-36"
    >
      <div className="mx-auto mb-8 mt-0 flex h-auto max-w-6xl flex-auto flex-col gap-3 sm:mt-32 sm:h-[37.5rem] sm:flex-1 sm:flex-row">
        <div className="flex h-[37.5rem] flex-auto flex-col gap-3 sm:flex-1">
          <div className="myself relative inset-0 basis-2/3 overflow-hidden rounded-lg border border-slate-200 bg-cover bg-center shadow-sm hover:border-slate-300 hover:shadow dark:border-slate-800 dark:hover:border-slate-700">
            <Image
              fill
              placeholder="blur"
              className="size-full object-cover"
              src="/image-2.jpg"
              blurDataURL="/image-2.jpg"
              alt=""
            />
          </div>
          <div className="myword group inset-0 flex basis-1/3 items-center justify-center rounded-lg border border-slate-200 bg-[url('./images/Background-Monologue.png')] bg-cover bg-center p-2 shadow-sm hover:border-slate-300 hover:bg-[url('./images/Background-Monologue-1.png')] dark:border-slate-800 dark:bg-[url('./images/Background-Monologue-dark.png')] dark:hover:border-slate-700 dark:hover:bg-[url('./images/Background-Monologue-dark-1.png')]">
            <div className="font-medium leading-7 text-slate-700 group-hover:text-slate-800 dark:text-slate-200 group-hover:dark:text-slate-50">
              A jovial guy with a passion for design.
              <br />
              Enjoys exploring the quirkiest of interests.
              <br />
              Loves making new friends with clients and colleagues.
              <br />
            </div>
          </div>
        </div>
        <div className="flex h-[37.5rem] flex-auto flex-col gap-4 sm:flex-1">
          <div className="group flex basis-1/2 flex-col items-end justify-center overflow-hidden rounded-lg border border-slate-200 bg-[#FAFCFF] shadow-sm hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
            <motion.div
              initial={'notHover'}
              whileHover={'isHover'}
              className="inset-0 flex size-full items-center justify-center bg-[url('./images/HabbitBackgroundtop.png')] bg-cover bg-bottom"
            >
              <motion.img
                variants={aeAnimations}
                className="-ml-1 h-auto w-[3.6rem]"
                src={paths.laravel}
                alt="laravel"
              />
              <motion.img
                variants={figmaAnimations}
                className="z-10 ml-1 h-auto w-14"
                src={paths.mysql}
                alt="mysql"
              />
              <motion.img
                variants={postmanAnimations}
                className="h-auto w-[4.3rem]"
                src={paths.postman}
                alt="postman"
              />
              <motion.img
                variants={nodeAnimations}
                className="h-auto w-[3.7rem]"
                src={paths.prisma}
                alt="node"
              />
            </motion.div>
            <div className="flex w-full flex-col px-6 pb-6">
              <div className="flex flex-row items-center gap-2">
                <div className="text-base font-medium text-slate-800 dark:text-slate-50">
                  Back-End Development
                </div>
              </div>
              <div className="mt-2 line-clamp-3 text-sm leading-[1.4rem] text-slate-600 dark:text-slate-400">
                As a Back-End Developer, my passion lies in building the
                server-side logic that powers web applications.
              </div>
            </div>
          </div>
          <div className="group flex basis-1/2 flex-col items-end justify-center overflow-hidden rounded-lg border border-slate-200 bg-[#FAFCFF] shadow-sm hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
            <motion.div
              initial={'notHover'}
              whileHover={'isHover'}
              className="relative inset-0 flex size-full items-center justify-center bg-[url('./images/HabbitBackgroundbottom.png')] bg-cover bg-bottom"
            >
              <motion.img
                variants={code1Animations}
                transition={{
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 7,
                  delay: 0.2,
                }}
                className="absolute top-2 h-3.5 w-auto"
                src={paths.code01}
                alt="Code"
              />
              <motion.img
                variants={code2Animations}
                transition={{
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 6.5,
                  delay: 0.4,
                }}
                className="absolute top-16 h-[0.7rem] w-auto"
                src={paths.code02}
                alt="Code"
              />
              <motion.img
                variants={code3Animations}
                transition={{
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 6,
                  delay: 0.6,
                }}
                className="absolute top-32 h-[0.8rem] w-auto"
                src={paths.code03}
                alt="Code"
              />
              <motion.img
                variants={aeAnimations}
                className="z-10 h-auto w-16"
                src={paths.tailwindcss}
                alt="Tailwind CSS"
              />
              <motion.img
                variants={figmaAnimations}
                className="z-20 h-auto w-16 drop-shadow-sm"
                src={paths.react}
                alt="React"
              />
              <motion.img
                variants={postmanAnimations}
                className="z-10 h-auto w-[4.3rem]"
                src={paths.xcodeoriginal}
                alt="VSCode"
              />
              <motion.img
                variants={nodeAnimations}
                className="z-10 h-auto w-16"
                src={paths.figma}
                alt="figma"
              />
            </motion.div>
            <div className="flex w-full flex-col px-6 pb-6">
              <div className="flex flex-row items-center gap-2">
                <div className="text-base font-medium text-slate-800 dark:text-slate-50">
                  Front-End Development
                </div>
              </div>
              <div className="mt-2 line-clamp-3 text-sm leading-[1.4rem] text-slate-600 dark:text-slate-400">
                {' '}
                Only designers understand their own work best. With this in
                mind, I started exploring how to build web pages to showcase my
                work perfectly. Slowly, I entered a new field...
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[37.5rem] flex-auto flex-col gap-4 sm:flex-1">
          <div className="relative inset-0 flex basis-1/3 items-end justify-center overflow-hidden rounded-lg border border-white bg-[url('./images/Habbit-1.jpg')] bg-cover bg-center shadow-sm hover:shadow dark:border-slate-900">
            <div className="absolute z-10 size-full bg-gradient-to-b from-[#02061700] to-[#02061773]"></div>

            <div className="z-30 flex w-full flex-col bg-gradient-to-b from-[#02061700] to-[#02061773] px-8 pb-5 pt-1">
              <div className="text-base font-medium text-white">
                Sports Enthusiast｜Passionate Athlete
              </div>
              <div className="text-sm font-normal text-white/[0.65]">
                Diving into various sports, embracing the thrill of competition
                and the joy of victory
              </div>
            </div>
          </div>
          <div className="bg-primary-600 relative inset-0 flex basis-1/3 items-end justify-center overflow-hidden rounded-lg border border-white bg-[url('./images/Habbit-2.jpg')] bg-cover bg-center shadow-sm hover:shadow dark:border-slate-900">
            <div className="absolute z-10 size-full bg-gradient-to-b from-[#02061700] to-[#02061773]"></div>
            <div className="z-30 flex w-full flex-col bg-gradient-to-b from-[#02061700] to-[#02061773] px-8 pb-5 pt-1">
              <div className="text-base font-medium text-white">
                Passionate Cook｜Creating Delicious Culinary Delights
              </div>
              <div className="text-sm font-normal text-white/[0.65]">
                I love cooking and creating mouthwatering dishes with love and
                creativity
              </div>
            </div>
          </div>
          <div className="bg-primary-600 relative inset-0 flex basis-1/3 items-end justify-center overflow-hidden rounded-lg border border-white bg-[url('./images/Habbit-3.jpg')] bg-cover bg-center shadow-sm hover:shadow dark:border-slate-900">
            <div className="absolute z-10 size-full bg-gradient-to-b from-[#02061700] to-[#02061773]"></div>
            <div className="z-40 flex w-full flex-col px-8 pb-5 pt-1">
              <div className="text-base font-medium text-white">
                Digital Lifestyle｜Embracing Technology
              </div>
              <div className="text-sm font-normal text-white/[0.65]">
                Embarking on a journey of exploring smart living
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
