"use client";
import { useEffect, useState } from "react";
import MobileWarning from "./MobileWarning";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => { 
        const handleEnter = () => document.body.style.cursor = "url('/cursors/UserCursor.png') 0 0, auto";
        const handleLeave = () => document.body.style.cursor = "auto";
        document.addEventListener("mouseenter", handleEnter);
        document.addEventListener("mouseleave", handleLeave);
    
        return () => {
          document.removeEventListener("mouseenter", handleEnter);
          document.removeEventListener("mouseleave", handleLeave);
        };
      }, []);

    useEffect(() => {
        const checkViewport = () => {
            setIsMobile(window.innerWidth < 1440);
        };

        // Check on mount
        checkViewport();

        // Listen for resize events
        window.addEventListener("resize", checkViewport);

        return () => {
            window.removeEventListener("resize", checkViewport);
        };
    }, []);

    if (isMobile) {
        return (
            <main className="flex bg-brand-black min-h-screen flex-col items-center justify-center px-[60px] md:px-122 relative">
                <MobileWarning/>
            </main>
        );
    }

    return <>{children}</>;
}