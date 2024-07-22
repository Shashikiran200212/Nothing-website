"use client"

import React from 'react'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './ui/text-reveal-card'

const Hero = () => {
  return (
    <div id='phone2'>
   
      <div className='w-full h-screen gap-4 bg-black flex flex-col md:flex-row px-4 md:px-16 lg:px-32 xl:px-64 justify-center relative'>
        <div className='flex justify-center w-full h-60 md:h-[500px] mt-16 md:mt-52'>
          <img src="/hero1.png" alt="" className='object-contain' />
        </div>
        <div className="flex items-center justify-center h-full md:h-[50rem] rounded-2xl w-full">
          <div className=" w-full">
            <TextRevealCard
              text="Snapdragon 8 series"
              revealText="Optimal performance "
              className='font-mono'
            >
              <TextRevealCardTitle>
                <div className='font-mono text-4xl md:text-6xl lg:text-8xl'>Phone 2</div>
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                <div className='font-mono text-xs md:text-lg lg:text-xl'>The ultimate version of Phone 2 <br />Built from our community&apos;s imagination.</div>
              </TextRevealCardDescription>
            </TextRevealCard>
   
             <div className='px-9'>
                  <button className="p-[3px] relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-800 rounded-lg" />
                      <div className="px-8 py-4  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                          <a href="https://in.nothing.tech/pages/phone-2">Buy now</a>
                      </div>
                  </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero