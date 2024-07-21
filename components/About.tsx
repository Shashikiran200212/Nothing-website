import React from 'react';

const About = () => {
  return (
    <div 
      className='bg-[#252525] w-full h-screen flex flex-col gap-5 justify-center items-start px-4 md:px-8 lg:px-16 xl:px-2'
      style={{ 
        backgroundImage: 'url(bg.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(70%)'
      }}
      id='about'
    >
      <div className='px-4 md:px-32'>
        <div className='font-mono text-3xl md:text-4xl lg:text-5xl xl:text-4xl'>About us</div>
      </div>
      <div className='flex flex-col justify-start font-mono gap-5 w-full md:w-[70vw] lg:w-[60vw] xl:w-[50vw]'>
        <div className='px-4 md:px-32 text-sm md:text-base lg:text-lg xl:text-sm'>
          Our lives rely on technology. But in a world where so much of it looks and feels the same, 
          it is easy to feel uninspired. Locked into empty product iterations. Under the thumb of giants.
        </div>
        <div className='px-4 md:px-32 text-sm md:text-base lg:text-lg xl:text-sm'>
          Nothing is here to change that. By creating iconic technology that feels just as joyful to interact with as it does to look at. 
          Whether its the Glyph Interface on the back of your phone allowing you to spend less time on your screen or a transparent earbud 
          stem revealing the precision of our engineering - we are making tech that inspires and empowers us again.
        </div>
      </div>
    </div>
  );
}

export default About;
