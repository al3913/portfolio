import React from 'react';
import Image from 'next/image';

// Image asset from Figma
const maintenanceImage = "/chibis/black_maintenance.png";

interface MaintenanceProps {
  className?: string;
}

export default function Maintenance({ className = '' }: MaintenanceProps) {
  return (
    <div 
      className={`flex flex-col gap-2_5 items-center justify-center relative w-full h-full ${className}`}
      data-name="Maintenance" 
      data-node-id="66:88"
    >
      <Image 
        src={maintenanceImage} 
        alt="Maintenance" 
        width={350} 
        height={350}
        data-name="Untitled_Artwork 4 1" 
        data-node-id="228:113"
      />
      <div 
        className="flex flex-col gap-10 text-brand-light-blue text-center text-hero"
        data-node-id="228:115"
      >
        <p className="text-2xl lg:text-4xl md:leading-[40px] lg:leading-[60px]">
          This page is taking a quick break <br className="hidden md:block"/> while I fix things up.
        </p>
        <p className="text-h2 text-xl lg:text-2xl">
          Back soon, and <span className="underline underline-offset-4">better</span>.
        </p>
      </div>
    </div>
  );
}
