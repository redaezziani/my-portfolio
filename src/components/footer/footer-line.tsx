'use client';
import React from 'react';
import { useTheme } from 'next-themes';

const FooterLine = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        background:
          theme === 'dark'
            ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.1) 20%, rgba(59,130,246,0.1) 100%)',
      }}
      className="relative h-[0.05rem] w-full overflow-hidden rounded-full"
    >
      <span
        className={`move absolute left-0 top-0 h-1 w-1/4 rotate-45 ${theme === 'dark' ? 'bg-white/45' : 'bg-blue-600/45'}`}
      ></span>
    </div>
  );
};

export default FooterLine;
