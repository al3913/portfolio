'use client';

export default function FinalCTA() {
    return (
        <div className="flex flex-col gap-[40px] justify-start items-center w-full">
            <div className="flex flex-col text-headline text-brand-light-blue items-center w-full">
                <p> If you have a problem worth solving — 
                    <span className="font-black"> big, </span> 
                    <span className="font-light"> small, </span> 
                    or in between
                </p>
                <p className="mt-[30px]">
                    I&apos;d love to hear your story.
                </p>
            </div>
            <a href="https://linkedin.com/in/andylin21" target="_blank" rel="noopener noreferrer">
                <button className="bg-brand-light-blue px-[70px] py-[20px] rounded-[59.6px] text-title"> Let&apos;s connect </button>
            </a>
        </div>
    )
}