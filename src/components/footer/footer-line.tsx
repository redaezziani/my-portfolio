'use client';
import React from 'react'
import { useTheme } from "next-themes"

const FooterLine = () => {
    const { theme } = useTheme()
  return (
    <div
    style={{
        background: theme === 'dark' ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)' : 'radial-gradient(circle, rgba(59,130,246,0.1) 20%, rgba(59,130,246,0.1) 100%)'
    }}
    className=' h-[0.05rem] relative overflow-hidden  w-full '
>
    <span
        className={` move  rotate-45  h-1 w-1/4 absolute top-0 left-0 ${theme === 'dark' ? 'bg-white/45' : 'bg-blue-600/45'}`}
    >

    </span>
</div>
  )
}

export default FooterLine