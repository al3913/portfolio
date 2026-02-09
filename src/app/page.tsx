import MobileWarning from '@/components/sections/MobileWarning';
import Hero from '@/components/sections/Hero';
import AboutMe from '@/components/sections/AboutMe';
import FinalCTA from '@/components/sections/FinalCTA';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <div className="bg-brand-black">
      <main className="flex bg-brand-black min-h-screen flex-col py-[310px] gap-[315px] items-center m-auto justify-start px-[60px] md:px-[120px] relative max-w-[1440px]">
          <Hero />
          <AboutMe />
          <Skills />
          <FinalCTA />
          <div className="z-100 fixed bg-brand-black inset-0 laptop:hidden">
            <MobileWarning/>
          </div>
      </main>
    </div>
  );
}
