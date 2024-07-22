import React from 'react';
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './ui/text-reveal-card';

const Cmf = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row object-cover" id="cmf">
      {/* Image Container */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img src="cmf.webp" alt="CMF" className="w-full h-full object-cover" />
      </div>
      {/* Text and Button Container */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-start p-4 py-0 md:p-8 lg:p-12 xl:p-28 xl:py-60">
        <div className="flex flex-col w-full">
          <TextRevealCard
            text="Dimensity 7300 5G"
            revealText="Mediatek"
            className="font-mono"
          >
            <TextRevealCardTitle>
              <div className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left">
                INTRODUCING <br />
                <span className="block mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  CMF PHONE 1
                </span>
              </div>
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              <div className="font-mono text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-3 text-left">
                <p className="sm:w-full md:w-full lg:w-full xl:w-full">
                  Elite hardware comes together with advanced computational photography algorithms via Nothing&apos;s TrueLens Engine 2.0.
                </p>
              </div>
            </TextRevealCardDescription>
          </TextRevealCard>

            <div className='px-9'>
                  <button className="p-[3px] relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-800 rounded-lg" />
                      <div className="px-8 py-4  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                          <a href="https://in.cmf.tech/pages/phone-1">Buy now</a>
                      </div>
                  </button>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Cmf;