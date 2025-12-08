"use client";
import { useEffect } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {

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

    return <>{children}</>;
}