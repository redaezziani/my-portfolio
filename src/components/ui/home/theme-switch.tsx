"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ThemeSwitch = () => {
  const { setTheme,theme} = useTheme()
  const [currentTheme, setCurrentTheme] = React.useState(theme)
  const handelThemeChange = (theme: string) => {
   if (theme === "dark") {
      setTheme("dark")
      setCurrentTheme("dark")
    }
    if (theme === "light") {
      setTheme("light")
      setCurrentTheme("light")
    }
  }
  return (    
        <div
          className={`w-6 h-6 justify-center items-center transform flex relative cursor-pointer ${currentTheme === "dark" ? " rotate-12" : " rotate-180"}`}
          onClick={() => handelThemeChange(currentTheme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          
          {currentTheme !== "dark" ? (
            <SunIcon className="h-[1.2rem] w-[1.2rem] " />
          ) : (
            <MoonIcon className="h-[1.2rem] w-[1.2rem] " />
          )}
          <span className="sr-only">Toggle theme</span>
        </div>
  
  )
}


export default ThemeSwitch