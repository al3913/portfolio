import Maintenance from '@/components/Maintenance';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="bg-brand-black">
      <main className="flex bg-brand-black min-h-screen flex-col items-center mx-auto justify-start px-[60px] md:px-[120px] relative max-w-[1680px]">
          <Hero />
      </main>
    </div>
  );
}
