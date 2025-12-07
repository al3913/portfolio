import Maintenance from '@/components/sections/Maintenance';
import Hero from '@/components/sections/Hero';
import AboutMe from '@/components/sections/AboutMe';

export default function Home() {
  return (
    <div className="bg-brand-black">
      <main className="flex bg-brand-black min-h-screen flex-col pt-[310px] gap-[315px] items-center m-auto justify-start px-[60px] md:px-[120px] relative max-w-[1680px]">
          <Hero />
          <AboutMe />
          {/* <Maintenance /> */}
      </main>
    </div>
  );
}
