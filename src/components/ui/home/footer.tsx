'use client'
import { useTheme } from "next-themes"
import { Ro4Logo } from "./Icons"

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
            <div className="w-full col-span-1 flex justify-start items-start gap-2">
                <div
                className=" w-full flex justify-start items-center gap-2"
                >
                    <Ro4Logo
                    className=" w-5 h-5"
                    />
                    <span
                    className=' text-slate-300/45  '
                    >
                        reda ezziani 
                    </span>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer