import React from 'react';
import Image from 'next/image';

// Image asset from Figma
const maintenanceImage = "/chibis/chibi-maintenance.png";

interface MaintenanceProps {
  className?: string;
}

export default function MobileWarning({ className = '' }: MaintenanceProps) {
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
        className="flex flex-col gap-3 text-brand-light-blue text-center"
        data-node-id="228:115"
      >
        <p className="text-title">
          {"I'm still iterating on this view right now"}
        </p>
        <p className="text-label">
          Checkout the view on a bigger screen 🙂
        </p>
      </div>
    </div>
  );
}
