'use client';

import Image from 'next/image';
import Cursor from './Cursor';
import Typewriter from './Typewriter';

const words = ["challenges", "frustrations", "painpoints"];

export default function Hero() {
  return (
    <div className="flex flex-col gap-[140px] items-start justify-center pb-0 relative w-full h-screen bg-brand-black">
      {/* Headline Section */}
      <div className="relative w-full max-w-6xl">
        {/* Background highlight for "challenges" */}
        {/* <div className="absolute bg-brand-light-blue h-[58px] ml-[550px] mt-[62px] w-[299px] hidden lg:block" /> */}
        
        {/* Main headline text */}
        <div className="text-hero font-bold relative text-brand-light-blue text-[32px] md:text-[40px] lg:text-[48px] leading-[1.25] lg:leading-[64px]">
          <p className="mb-0">I build software by starting</p>
          <p>
            <span>with people, their </span>
            <Typewriter words={words}/>
          </p>
        </div>
      </div>

      {/* Body Section */}
      <div className="relative w-full max-w-2xl">
        {/* Body text */}
        <div className="text-h2 font-medium relative text-brand-light-blue text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.2px] leading-[1.5] max-w-[589px]">
          <p>
            {"The best software isn't just powerful, it feels like it was made for you. "}
            {"I focus on understanding people first, then designing and building in a way "}
            {"that makes the solution clear, usable, and enjoyable."}
          </p>
        </div>
        
        {/* Cursor component */}
        <div className="absolute -bottom-8 md:right-25 lg:right-75">
          <div className="h-[50px] relative w-[66.886px]">
            <Cursor variant="Andy" />
          </div>
        </div>
      </div>

      {/* Artwork Image */}
      <div className="absolute right-[60px] md:right-[-45] w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[319px] lg:h-[319px] top-[50%] -translate-y-3/4">
        <Image
          src="/chibis/chibi-left.png"
          alt="Character artwork"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
