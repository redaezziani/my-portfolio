import React from 'react'

const FooterPage = () => {
  return (
    <footer
    className=' w-full max-w-[74rem] flex flex-col gap-3 justify-start items-start relative z-10'
    >
        <div className="w-full rounded-lg bg-slate-50/30 border border-slate-400/35 p-3 flex  gap-2 justify-between items-center">
            <div className="flex flex-col gap-3 justify-start items-center">
                <h1
                className=' text-2xl font-medium text-slate-900'
                >
                    Join our weeky newsletter
                </h1>
            </div>
        </div>
    </footer>
  )
}

export default FooterPage