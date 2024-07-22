import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'
import Image from 'next/image'

const Mainh = () => {
  return (
    <div className="flex flex-col overflow-hidden">
           <img src="/logo.png" alt="" className="w-20 h-5 mt-8 ml-9" />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
             <div className='m-6 font-mono font-light text-[#e9ede9]'> <q>Plus</q> <q>More</q> <q>Extra</q></div>
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                <img src="logow.png" alt="" />
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/hbg.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}

export default Mainh
