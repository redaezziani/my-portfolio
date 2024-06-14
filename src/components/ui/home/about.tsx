'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
const figmaAnimations = {
  notHover: {
    x: 20,
    rotate: -15
  },
  isHover: {
    x: 0,
    rotate: 0
  }
}

const postmanAnimations = {
  notHover: {
    x: -100,
    rotate: 20
  },
  isHover: {
    x: 0,
    rotate: 0
  }
}

const nodeAnimations = {
  notHover: {
    x: -70
  },
  isHover: {
    x: 0
  }
}

const aeAnimations = {
  notHover: {
    x: 190,
    rotate: -20
  },
  isHover: {
    x: 0,
    rotate: 0
  }
}

const code1Animations = {
  notHover: {
    x: 350,
    opacity: 0.7
  },
  isHover: {
    x: -350,
    opacity: 1
  }
}

const code2Animations = {
  notHover: {
    x: -250,
    opacity: 0.7
  },
  isHover: {
    x: 250,
    opacity: 1
  }
}

const code3Animations = {
  notHover: {
    x: 290,
    opacity: 0.7
  },
  isHover: {
    x: -290,
    opacity: 1
  }
}

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
}


const About = () => {

  const CardRef1 = useRef(null);
  const CardRef2 = useRef(null);
  const CardRef3 = useRef(null);
  const CardRef4 = useRef(null);
  const CardRef5 = useRef(null);
  const CardRef6 = useRef(null);
  const CardRef7 = useRef(null);
  const CardRef8 = useRef(null);

  useGSAP(() => {
    // card 1 from -x: 100 to x: 0 and opacity: 0 to 1
    gsap.fromTo(CardRef1.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease:"power1.inOut" });
    // card 2 from -y: 100 to y: 0 and opacity: 0 to 1
    gsap.fromTo(CardRef2.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease:"power1.inOut" });
    // card 3 from -y: 100 to y: 0 and opacity: 0 to 1
    gsap.fromTo(CardRef3.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease:"power1.inOut" });
    // card 4 from -y: 100 to y: 0 and opacity: 0 to 1
    gsap.fromTo(CardRef4.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease:"power1.inOut" });
    // card 5 from -y: 100 to y: 0 and opacity: 0 to 1
    gsap.fromTo(CardRef5.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease:"power1.inOut" });
    // card 6 from scale: 0.5 to scale: 1 and opacity: 0 to 1
    gsap.fromTo(CardRef6.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease:"power1.inOut" });
    // card 7 from -y: 100 to y: 0 and opacity: 0 to 1
    gsap.fromTo(CardRef7.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease:"power1.inOut" });
    // card 8 from -y: 100 to y: 0 and opacity: 0 to 1
    gsap.fromTo(CardRef8.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease:"power1.inOut" });
  }, []);
  return (
    <>
      <section id="about" className="relative -mt-10  sm:-mt-28 px-4 z-10 pt-8 pb-8 overflow-hidden">
        <div className="max-w-6xl mx-auto mt-0 mb-8 sm:mt-32 flex flex-auto sm:flex-1 flex-col sm:flex-row gap-3 h-auto sm:h-[37.5rem]">
          <div className="flex-auto sm:flex-1 flex flex-col gap-3 h-[37.5rem]">
            <div
              ref={CardRef1}
              style={{ opacity: 0 }}
              className="myself basis-2/3 border relative   inset-0 bg-cover bg-center border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 rounded-lg shadow-sm hover:shadow overflow-hidden">
                <Image
                fill
                placeholder='blur'
                className='w-full h-full object-cover'
                src="/image-2.jpg"
                 blurDataURL='/image-2.jpg'
                alt=""  />
              </div>
            <div
              ref={CardRef2}
              style={{ opacity: 0 }}
              className="myword group basis-1/3 border border-slate-200 hover:border-slate-300 dark:hover:border-slate-700 dark:border-slate-800 p-2 rounded-lg flex items-center justify-center bg-[url('./images/Background-Monologue.png')] hover:bg-[url('./images/Background-Monologue-1.png')] dark:bg-[url('./images/Background-Monologue-dark.png')] dark:hover:bg-[url('./images/Background-Monologue-dark-1.png')] inset-0 bg-cover bg-center shadow-sm ">
              <div className=" leading-7 font-medium text-slate-700 group-hover:text-slate-800 dark:text-slate-200 group-hover:dark:text-slate-50">
                A jovial guy with a passion for design.<br />
                Enjoys exploring the quirkiest of interests.<br />
                Loves making new friends with clients and colleagues.<br />
              </div>
            </div>
          </div>
          <div className="flex-auto sm:flex-1 flex flex-col gap-4 h-[37.5rem]">
            <div
              ref={CardRef3}
              style={{ opacity: 0 }}
              className="group basis-1/2 bg-[#FAFCFF] dark:bg-slate-900 rounded-lg border border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow-sm  flex flex-col items-end justify-center overflow-hidden">
              <motion.div initial={'notHover'} whileHover={'isHover'} className="bg-[url('./images/HabbitBackgroundtop.png')] inset-0 bg-cover bg-bottom h-full w-full flex items-center justify-center">
                <motion.img variants={aeAnimations} className='w-[3.6rem] -ml-1 h-auto' src={paths.laravel} alt="laravel" />
                <motion.img variants={figmaAnimations} className='w-[3.5rem] ml-1 h-auto z-10' src={paths.mysql} alt="mysql" />
                <motion.img variants={postmanAnimations} className='w-[4.3rem] h-auto' src={paths.postman} alt="postman" />
                <motion.img variants={nodeAnimations} className='w-[3.7rem] h-auto' src={paths.prisma} alt="node" />
              </motion.div>
              <div className="flex flex-col w-full px-6 pb-6">
                <div className='flex flex-row items-center gap-2'>
                  <div className="text-base font-medium text-slate-800 dark:text-slate-50">Back-End Development</div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-[1.4rem] line-clamp-3">As a Back-End Developer, my passion lies in building the server-side logic that powers web applications.</div>
              </div>
            </div>
            <div
              ref={CardRef4}
              style={{ opacity: 0 }}
              className="group basis-1/2 bg-[#FAFCFF] dark:bg-slate-900 rounded-lg border border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow-sm  flex flex-col items-end justify-center overflow-hidden">
              <motion.div initial={'notHover'} whileHover={'isHover'} className="bg-[url('./images/HabbitBackgroundbottom.png')] inset-0 bg-cover bg-bottom h-full w-full flex items-center justify-center relative">
                <motion.img variants={code1Animations} transition={{ ease: "linear", repeat: Infinity, repeatType: 'reverse', duration: 7, delay: 0.2 }} className="h-[0.875rem] w-auto absolute top-2" src={paths.code01} alt="Code" />
                <motion.img variants={code2Animations} transition={{ ease: "linear", repeat: Infinity, repeatType: 'reverse', duration: 6.5, delay: 0.4 }} className="h-[0.7rem] w-auto absolute top-16" src={paths.code02} alt="Code" />
                <motion.img variants={code3Animations} transition={{ ease: "linear", repeat: Infinity, repeatType: 'reverse', duration: 6, delay: 0.6 }} className="h-[0.8rem] w-auto absolute top-32" src={paths.code03} alt="Code" />
                <motion.img variants={aeAnimations} className='w-16 h-auto z-10' src={paths.tailwindcss} alt="Tailwind CSS" />
                <motion.img variants={figmaAnimations} className='w-16 h-auto z-20 drop-shadow-sm' src={paths.react} alt="React" />
                <motion.img variants={postmanAnimations} className='w-[4.3rem] z-10 h-auto' src={paths.xcodeoriginal} alt="VSCode" />
                <motion.img variants={nodeAnimations} className='w-16 z-10 h-auto' src={paths.figma} alt="figma" />
              </motion.div>
              <div className="flex flex-col w-full px-6 pb-6">
                <div className='flex flex-row items-center gap-2'>
                  <div className="text-base font-medium text-slate-800 dark:text-slate-50">Front-End Development</div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-[1.4rem] line-clamp-3"> Only designers understand their own work best. With this in mind, I started exploring how to build web pages to showcase my work perfectly. Slowly, I entered a new field...</div>
              </div>
            </div>
          </div>
          <div className="flex-auto sm:flex-1 flex flex-col gap-4 h-[37.5rem]">
            <div
              ref={CardRef5}
              style={{ opacity: 0 }}
              className="basis-1/3 rounded-lg flex items-end justify-center bg-[url('./images/Habbit-1.jpg')] relative inset-0 bg-cover bg-center border border-white dark:border-slate-900 shadow-sm hover:shadow  overflow-hidden">
              <div className="w-full h-full z-10 bg-gradient-to-b from-[#02061700] to-[#02061773] absolute"></div>

              <div className="flex flex-col w-full z-30 px-8 pt-1 pb-5 bg-gradient-to-b from-[#02061700] to-[#02061773]">
                <div className="text-base font-medium text-white">Sports Enthusiast｜Passionate Athlete</div>
                <div className="text-white/[0.65] text-sm font-normal">Diving into various sports, embracing the thrill of competition and the joy of victory</div>
              </div>
            </div>
            <div
              ref={CardRef6}
              style={{ opacity: 0 }}
              className="basis-1/3 bg-primary-600 rounded-lg flex items-end justify-center bg-[url('./images/Habbit-2.jpg')] relative inset-0 bg-cover bg-center border border-white dark:border-slate-900 shadow-sm hover:shadow  overflow-hidden">
              <div
                ref={CardRef7}
                style={{ opacity: 0 }}
                className="w-full h-full z-10 bg-gradient-to-b from-[#02061700] to-[#02061773] absolute"></div>
              <div className="flex flex-col w-full z-30 px-8 pt-1 pb-5 bg-gradient-to-b from-[#02061700] to-[#02061773]">
                <div className="text-base font-medium text-white">Passionate Cook｜Creating Delicious Culinary Delights</div>
                <div className="text-white/[0.65] text-sm font-normal">I love cooking and creating mouthwatering dishes with love and creativity</div>
              </div>
            </div>
            <div
              ref={CardRef8}
              style={{ opacity: 0 }}
              className="basis-1/3 bg-primary-600 rounded-lg relative flex items-end justify-center bg-[url('./images/Habbit-3.jpg')] inset-0 bg-cover bg-center border border-white dark:border-slate-900 shadow-sm hover:shadow  overflow-hidden">
              <div className="w-full h-full z-10 bg-gradient-to-b from-[#02061700] to-[#02061773] absolute"></div>
              <div className="flex flex-col z-40 w-full px-8 pt-1 pb-5 ">
                <div className="text-base font-medium text-white">Digital Lifestyle｜Embracing Technology</div>
                <div className="text-white/[0.65] text-sm font-normal">Embarking on a journey of exploring smart living</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;