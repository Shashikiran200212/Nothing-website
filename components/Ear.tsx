import React from 'react';
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './ui/text-reveal-card';

const Ear = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-16 lg:px-32 xl:px-60 h-screen bg-black' id='ear2'>
      <div className="order-2 md:order-1 flex items-center justify-center h-[30rem] md:h-[50rem] rounded-2xl w-full">
        <TextRevealCard
          text="11 mm ceramic driver"
          revealText="Hi-Res Audio"
          className=''
        >
          <TextRevealCardTitle>
            <div className='font-mono text-4xl md:text-6xl lg:text-8xl'>Ear 2</div>
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            <div className='font-mono text-base md:text-lg lg:text-xl'>Our best audio experience ever. Ear is an expression of elite craftsmanship.</div>
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
      <div className='order-1 md:order-2 flex justify-center mt-8 md:mt-0'>
        <img src="ear1.png" alt="" className='w-[80vw] md:w-[60vw] lg:w-[50vw] h-auto'/>
      </div>
    </div>
  );
}

export default Ear;
