"use client"

import React from 'react'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './ui/text-reveal-card'

const Hero = () => {
  return (
    <div id='phone2'>
      <img src="/logo.png" alt="" className="w-20 h-5 mt-5 ml-6" />
      <div className='w-full h-screen gap-4 bg-black flex flex-col md:flex-row px-4 md:px-16 lg:px-32 xl:px-64 justify-center relative'>
        <div className='flex justify-center w-full h-60 md:h-[500px] mt-16 md:mt-52'>
          <img src="/hero1.png" alt="" className='object-contain' />
        </div>
        <div className="flex items-center justify-center h-full md:h-[50rem] rounded-2xl w-full">
          <TextRevealCard
            text="Snapdragon 8 series"
            revealText="Optimal performance "
            className='font-mono'
          >
            <TextRevealCardTitle>
              <div className='font-mono text-4xl md:text-6xl lg:text-8xl'>Phone 2</div>
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              <div className='font-mono text-base md:text-lg lg:text-xl'>The ultimate version of Phone 2. Built from our communitys imagination.</div>
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>
      </div>
    </div>
  )
}

export default Hero
