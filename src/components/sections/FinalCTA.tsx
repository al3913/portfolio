'use client';

import Cursor from "../Cursor";
import Typewriter from "../Typewriter";

export default function FinalCTA() {
    return (
        <div className="flex flex-col gap-[60px]">
            <div className="flex flex-col text-hero text-brand-light-blue items-start w-full">
                <p> If you have a problem worth solving — </p>
                <p>
                    <span className="font-black"> big, </span>
                    <span className="font-light"> small, </span>
                    or in between
                </p>
                <p className="mt-[20px]">
                    I'd love to hear your story.
                </p>
            </div>
            <div className="flex flex-col items-center w-full gap-[40px] relative">
                <a href="https://linkedin.com/in/andylin21" target="_blank" rel="noopener noreferrer">
                <button className="bg-brand-light-blue px-[70px] py-[20px] rounded-[59.6px] text-hero leading-[48px]"> Let's connect </button>
                </a>
                <div className="absolute bottom-0 right-0"><Cursor variant="You"/></div>
                <div className="flex gap-[16px]">
                    <Typewriter className="text-h2 bg-brand-black" words={["what are you waiting for?"]}/>
                    <Cursor variant="You"/>
                </div>
            </div>
        </div>
    )
}