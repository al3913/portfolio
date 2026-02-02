'use client';

export default function FinalCTA() {
    return (
        <div className="flex flex-col gap-[80px] justify-start w-full">
            <div className="flex flex-col text-hero text-brand-light-blue items-start w-full">
                <p> If you have a problem worth solving — </p>
                <p>
                    <span className="font-black"> big, </span>
                    <span className="font-light"> small, </span>
                    or in between
                </p>
                <p className="mt-[40px]">
                    I&apos;d love to hear your story.
                </p>
            </div>
            <div className="flex flex-col items-center w-full gap-[40px] relative">
                <a href="https://linkedin.com/in/andylin21" target="_blank" rel="noopener noreferrer">
                    <button className="bg-brand-light-blue px-[70px] py-[20px] rounded-[59.6px] text-hero leading-[48px] text-[40px]"> Let&apos;s connect </button>
                </a>
                <span className="text-h2 text-brand-light-blue typewriter-blink" style={{"--count": 21} as React.CSSProperties}> what are you waiting for?</span>
            </div>
        </div>
    )
}