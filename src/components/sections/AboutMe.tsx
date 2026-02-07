import Image from "next/image";
import { experience } from "@/app/data/experience";
import ExperienceCard from "../ExperienceCard";

export default function AboutMe() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-between items-center">
                <div className="flex flex-col h-[412px] items-start justify-start gap-[32px]">
                    <div className="flex gap-[12px] items-center h-[68px]">
                        <p className="text-headline text-brand-light-blue">
                            {"Who's this guy?"}
                        </p>
                        <Image src="/chibis/chibi-down.png" alt="Chibi Andy pointing down" width={68} height={68} className="h-[58px] object-cover object-top"/>
                    </div>
                    <p className="text-body text-brand-light-blue max-w-[471px] text-[18px]">
                        {"I’m a software engineer who blends full-stack development with a strong focus on design and usability. Whether it’s building tools that save hours of work or creating apps that feel intuitive from the first tap, I aim for solutions that leave a lasting impact on the people who use them."}
                    </p>
                </div>
                <Image src="/other/About Me Photo.svg" alt="Picture of Andy" width={530} height={412}/>
            </div>
            <div className="grid grid-cols-[11px_1fr] gap-[48px]">
                <div className="flex flex-col w-full h-full relative justify-between items-center py-[60.305px]">
                    <div className="absolute top-0 bottom-0 w-[1px] bg-white"></div>
                    {experience.map((_, i) => (
                        <div key={i} className="w-full h-[11px] bg-[#D9D9D9] outline outline-2 rounded-full z-10"></div>
                    ))}
                </div>
                <div className="flex flex-col">
                    {experience.map((_, i) => (
                        <ExperienceCard className="last:border-b" key={i} {..._}/>
                    ))}
                </div>
            </div>

        </div>
    )
}