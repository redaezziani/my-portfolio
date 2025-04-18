'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<string | null>(null);
  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setCurrentTheme(theme === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    setCurrentTheme(theme ?? 'light');
  }, [theme]);

  return (
    <div
      className={`relative flex size-6 cursor-pointer items-center justify-center`}
      onClick={handleThemeChange}
      style={{ transform: theme === 'light' ? 'rotate(180deg)' : '' }}
      aria-label="Toggle theme"
    >
      {currentTheme == 'light' ? (
        <SunIcon className="size-[1.2rem]" />
      ) : (
        <MoonIcon className="size-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
};

export default ThemeSwitch;
