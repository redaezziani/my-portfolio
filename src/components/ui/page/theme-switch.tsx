'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState(theme);
  const handelThemeChange = (theme: string) => {
    if (theme === 'dark') {
      setTheme('dark');
      setCurrentTheme('dark');
    }
    if (theme === 'light') {
      setTheme('light');
      setCurrentTheme('light');
    }
  };
  return (
    <div
      className={`relative flex h-6 w-6  transform cursor-pointer items-center justify-center ${currentTheme === 'dark' ? '' : 'rotate-180'}`}
      onClick={() =>
        handelThemeChange(currentTheme === 'dark' ? 'light' : 'dark')
      }
      aria-label='Toggle theme'
    >
      {currentTheme === 'light' ? (
        <SunIcon className='h-[1.2rem] w-[1.2rem]' />
      ) : (
        <MoonIcon className='h-[1.2rem] w-[1.2rem]' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </div>
  );
};

export default ThemeSwitch;
