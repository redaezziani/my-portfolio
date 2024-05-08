'use client'
import { useTheme } from "next-themes"
import { Ro4Logo } from "./Icons"
import { Label } from "../label"
import { Input } from "../input"
import { Textarea } from "../textarea"
import { Button } from "../button"

const Footer = () => {
    const { theme } = useTheme()
  return (
    <footer
    className=' max-w-6xl w-full px-3 md:p-0 mx-auto mt-0 mb-8 sm:mt-20 flex flex-auto sm:flex-1 flex-col  gap-4 h-auto sm:h-[37.5rem]'
    >
        <div
        style={{
            background: theme==='dark' ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)' : 'radial-gradient(circle, rgba(59,130,246,0.1) 20%, rgba(59,130,246,0.1) 100%)' 
        }}
        className=' h-[0.05rem] relative overflow-hidden  w-full '
        >
            <span
            className={` move  rotate-45  h-1 w-1/4 absolute top-0 left-0 ${theme==='dark' ? 'bg-white/45' : 'bg-blue-600/45'}`}
            >

            </span>
        </div>
        <section className=" w-full mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="w-full md:w-2/3 col-span-2 flex flex-col justify-start items-start gap-2">
                <div className="w-full flex flex-col gap-2 justify-start items-start">
                    <h1
                    className="text-2xl font-bold"
                    >
                    Connect with me 
                    </h1>
                    <p
                    className="opacity-80"
                    >
                    let's connect and build something great together
                    </p>
                    <form 
                    className="flex w-full mt-5  flex-col gap-3 justify-start items-start"
                    >
                    <Label htmlFor="email">
                        Email
                    </Label>   
                    <Input
                    className="w-full"
                    type="email"
                    id="email"
                    placeholder="Email"
                    />
                    <Label htmlFor="message">
                        Message
                    </Label>
                    <Textarea
                    className="w-full"
                    id="message"
                    placeholder="Message"
                    />
                    <Button
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-500"
                    >
                        Send Message
                    </Button>
                    </form>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer