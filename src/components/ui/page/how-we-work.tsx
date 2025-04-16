import React from 'react'
import { Button } from '../button'

const HowWeWork = () => {
  return (
    <section className="w-full flex border-t px-4 md:px-0 bg-neutral-50 border-neutral-400/35 justify-center items-center gap-3 flex-col  py-20">
      <div className="flex flex-col items-start  w-full max-w-6xl justify-start">
        <h2 className="text-4xl font-bold">How I Work</h2>
        <p className="text-lg  text-neutral-700 mt-2">I grow and adapt with your needs while providing an exceptional development experience from start to finish.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-10">
        <div className="">
          <div className="text-primary mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3 5-5m-5 2v6m-3-3h6M5 3v4m14-4v4m0 10v4m-14-4v4m6-17v2m0 16v2" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">Initial Consultation</h3>
          <p className="text-neutral-600 mt-2">I begin by understanding your project requirements, goals, and vision to establish clear objectives from day one.</p>
        </div>

        <div className="">
          <div className="text-primary mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">Planning & Design</h3>
          <p className="text-neutral-600 mt-2">I create detailed project plans and design mockups to ensure we're aligned before any coding begins.</p>
        </div>

        <div className="">
          <div className="text-primary mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">Development</h3>
          <p className="text-neutral-600 mt-2">I build your solution using modern technologies and best practices, with regular updates on progress.</p>
        </div>

        <div className="">
          <div className="text-primary mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">Testing & QA</h3>
          <p className="text-neutral-600 mt-2">Rigorous testing ensures your application is bug-free and performs optimally across all devices.</p>
        </div>

        <div className="">
          <div className="text-primary mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">Deployment</h3>
          <p className="text-neutral-600 mt-2">I handle the entire deployment process to ensure your application launches smoothly and securely.</p>
        </div>

        <div className="">
          <div className="text-primary mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">Support & Maintenance</h3>
          <p className="text-neutral-600 mt-2">I provide ongoing support to keep your application running smoothly and up-to-date with the latest technologies.</p>
        </div>
      </div>

      <div className="mt-12">
        <Button className="bg-black text-white px-6 py-3 rounded-lg font-medium flex items-center  transition-colors">
          Start your project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Button>
      </div>
    </section>
  )
}

export default HowWeWork