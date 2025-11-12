'use client';

import Image from 'next/image';
import Cursor from './Cursor';

export default function Hero() {
  return (
    <div className="flex flex-col gap-[140px] items-start justify-center pb-0 pt-[315px] relative w-full min-h-screen bg-brand-black">
      {/* Headline Section */}
      <div className="relative w-full max-w-6xl">
        {/* Background highlight for "challenges" */}
        {/* <div className="absolute bg-brand-light-blue h-[58px] ml-[550px] mt-[62px] w-[299px] hidden lg:block" /> */}
        
        {/* Main headline text */}
        <div className="text-hero font-bold relative text-brand-light-blue text-[32px] md:text-[40px] lg:text-[48px] leading-[1.25] lg:leading-[64px]">
          <p className="mb-0">I build software by starting</p>
          <p>
            <span>with people, their </span>
            <span className="text-brand-black text-hero relative bg-brand-light-blue typewriter ">
              challenges
            </span>
          </p>
        </div>
      </div>

      {/* Body Section */}
      <div className="relative w-full max-w-4xl">
        {/* Body text */}
        <div className="font-ethos font-medium relative text-brand-light-blue text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.2px] leading-[1.5] max-w-[589px]">
          <p>
            The best software isn't just powerful, it feels like it was made for you. 
            I focus on understanding people first, then designing and building in a way 
            that makes the solution clear, usable, and enjoyable.
          </p>
        </div>
        
        {/* Cursor component */}
        <div className="h-[50px] mt-[40px] md:mt-[60px] lg:mt-[102px] relative w-[66.886px]">
          <Cursor variant="Andy" />
        </div>
      </div>

      {/* Artwork Image */}
      {/* <div className="absolute right-[60px] md:right-[120px] lg:left-[1042px] w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[319px] lg:h-[319px] top-[259px]">
        <Image
          src="/chibis/black_left.png"
          alt="Character artwork"
          width={319}
          height={319}
          className="w-full h-full object-cover"
          priority
        />
      </div> */}
    </div>
  );
}
