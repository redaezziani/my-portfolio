'use client';

import { motion } from 'framer-motion';
import { Ro4Logo, GithubLogo, HamburgIcon, LinkedInLogo } from './Icons';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import ThemeSwitch from './theme-switch';
import { usePathname } from 'next/navigation';

const HeaderAnimations = {
  show: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
};

const mobileListAnimations = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0.4,
  },
};

const mobileItemsAnimations = {
  show: {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
  },
  hidden: {
    scale: 0.3,
    opacity: 0.4,
    filter: 'blur(20px)',
  },
};

const overlayAnimations = {
  show: {
    opacity: 0.15,
  },
  hidden: {
    opacity: 0,
  },
};

const NavBar = () => {
  const location = usePathname();

  const headerTabs = [
    { name: 'about', link: 'about' },
    { name: 'project', link: 'projects' },
    { name: 'exhibition', link: 'exhibition' },
  ];

  const [focused, setFocused] = useState<string | null>(null);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 640) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <>
      {isMenuOpen && (
        <motion.div
          initial='hidden'
          animate='show'
          variants={overlayAnimations}
          onClick={() => setMenuOpen(false)}
          className='fixed inset-0 z-40 bg-slate-950'
        ></motion.div>
      )}
      <motion.header
        onMouseLeave={() => setFocused(null)}
        transition={{
          duration: 1,
          type: 'spring',
        }}
        variants={HeaderAnimations}
        initial={'hidden'}
        animate={'show'}
        className='fixed left-0 right-0 top-6 z-50 w-full px-2 sm:top-12 sm:px-0'
      >
        <motion.div
          className={` ${
            isMenuOpen ? 'shadow-lg' : 'bg-slate-900'
          } mx-auto flex w-full flex-col items-center overflow-hidden rounded-full border border-slate-200 backdrop-blur-sm transition duration-500 hover:border-slate-300/90 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-slate-700/90 md:max-w-xl`}
        >
          <div
            className={`flex w-full flex-row justify-between px-1 py-[0.125rem] sm:justify-normal ${
              isMenuOpen
                ? 'border-b border-dashed border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950'
                : ''
            }`}
          >
            <Link
              onMouseEnter={() => setFocused(null)}
              to={location === '/' ? 'top' : 'top'}
              smooth={true}
              duration={500}
              className='flex cursor-pointer flex-row gap-2 px-4 py-2 sm:px-3'
            >
              <Ro4Logo className='h-6 w-6 fill-slate-900 dark:fill-slate-100' />
              <span className='flex text-lg font-semibold text-slate-700 dark:text-slate-300 sm:hidden'>
                Menu
              </span>
            </Link>
            <div
              onClick={() => setMenuOpen(!isMenuOpen)}
              className='flex rounded-lg px-2 py-2 sm:hidden'
            >
              <HamburgIcon
                className={`h-6 w-6 stroke-slate-800 hover:stroke-slate-700 dark:stroke-slate-200 dark:hover:stroke-slate-300 ${
                  isMenuOpen ? 'rotate-45 scale-75' : 'rotate-0'
                } origin-center transition duration-300 ease-in-out`}
              />
            </div>
            <div className='hidden items-center gap-2 sm:flex sm:flex-row'>
              <div className='flex'>
                {headerTabs.map((headerTab) => (
                  <Link
                    key={headerTab.link}
                    onFocus={() => setFocused(headerTab.link)}
                    onMouseEnter={() => setFocused(headerTab.link)}
                    className='relative px-4 py-2 text-sm text-slate-50 transition duration-500 hover:text-slate-800 dark:text-slate-100 dark:hover:text-slate-200 sm:px-3'
                    to={
                      location === '/' ? headerTab.link : '/' + headerTab.link
                    }
                    smooth={true}
                    duration={500}
                  >
                    {headerTab.name}
                    {focused === headerTab.link ? (
                      <motion.div
                        transition={{
                          layout: {
                            duration: 0.2,
                            ease: 'easeOut',
                          },
                        }}
                        className='absolute left-0 right-0 top-0 -z-10 hidden h-full w-full rounded-full bg-slate-200/75 dark:bg-slate-700/50 sm:block'
                        layoutId='highlight'
                      />
                    ) : null}
                  </Link>
                ))}
              </div>
              <div className='hidden h-3 w-[1px] self-center border-l border-slate-300 dark:border-slate-500 sm:block'></div>
              <div className='hidden sm:flex'>
                <a
                  onFocus={() => setFocused('Github')}
                  onMouseEnter={() => setFocused('Github')}
                  className='group relative ml-1 flex h-9 w-9 items-center justify-center transition duration-500'
                  href='https://github.com/redaezziani'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GithubLogo className='h-[1.125rem] w-auto fill-slate-900 transition duration-500 group-hover:fill-slate-700 dark:fill-slate-100 dark:group-hover:fill-slate-300' />
                  {focused === 'Github' ? (
                    <motion.div
                      transition={{
                        layout: {
                          duration: 0.2,
                          ease: 'easeOut',
                        },
                      }}
                      className='absolute left-0 right-0 top-0 -z-10 hidden h-full w-full rounded-lg bg-slate-200/75 dark:bg-slate-700/50 sm:block'
                      layoutId='highlight'
                    />
                  ) : null}
                </a>
                <div
                  onFocus={() => setFocused('dribble')}
                  onMouseEnter={() => setFocused('dribble')}
                  className='group relative flex h-9 w-9 cursor-pointer items-center justify-center transition duration-500'
                >
                  <ThemeSwitch />

                  {focused === 'dribble' ? (
                    <motion.div
                      transition={{
                        layout: {
                          duration: 0.2,
                          ease: 'easeOut',
                        },
                      }}
                      className='absolute left-0 right-0 top-0 -z-10 hidden h-full w-full rounded-lg bg-slate-200/75 dark:bg-slate-700/50 sm:block'
                      layoutId='highlight'
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <motion.div
              initial='hidden'
              animate='show'
              variants={mobileListAnimations}
              className='flex w-full origin-top flex-col items-center justify-center bg-slate-50 px-4 py-4 dark:bg-slate-950'
            >
              {headerTabs.map((headerTab) => (
                <Link
                  key={headerTab.link}
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className='w-full text-base font-medium text-slate-800 dark:text-slate-200'
                  to={location === '/' ? headerTab.link : '/' + headerTab.link}
                  smooth={true}
                  duration={500}
                >
                  <motion.div
                    variants={mobileItemsAnimations}
                    transition={{
                      duration: 0.1,
                    }}
                    className='origin-right py-3 text-right'
                  >
                    {' '}
                    {headerTab.name}
                  </motion.div>
                </Link>
              ))}
              <div className='flex w-full flex-col'>
                <motion.a
                  variants={mobileItemsAnimations}
                  transition={{
                    duration: 0.1,
                  }}
                  className='relative flex w-full origin-right items-center justify-end py-3'
                  href='https://github.com/redaezziani/'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => setMenuOpen(!isMenuOpen)}
                >
                  <GithubLogo className='h-[1.125rem] w-[1.125rem] fill-slate-900 transition duration-500 group-hover:fill-slate-700 dark:fill-slate-100 dark:group-hover:fill-slate-300' />
                </motion.a>
                <motion.a
                  variants={mobileItemsAnimations}
                  transition={{
                    duration: 0.1,
                  }}
                  className='relative flex w-full origin-right items-center justify-end py-3'
                  href='https://www.linkedin.com/in/reda-ezziani-43a121295/'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => setMenuOpen(!isMenuOpen)}
                >
                  <svg
                    className='h-[1.125rem] w-[1.125rem] transition duration-500 dark:group-hover:fill-slate-300'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width={20}
                    height={20}
                    fill={'none'}
                  >
                    <path
                      d='M7 10V17'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M7.00801 7L6.99902 7'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinejoin='round'
                    />
                  </svg>
                </motion.a>
                <div className='flex w-full items-center justify-end'>
                  <motion.div
                    variants={mobileItemsAnimations}
                    transition={{
                      duration: 0.1,
                    }}
                    className='flex'
                  >
                    <ThemeSwitch />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.header>
    </>
  );
};

export default NavBar;
