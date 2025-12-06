import Image from "next/image";

export default function AboutMe() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-between items-center">
                <p className="text-h2 text-brand-light-blue max-w-[471px]">
                    {"I’m a software engineer who blends full-stack development with a strong focus on design and usability. Whether it’s building tools that save hours of work or creating apps that feel intuitive from the first tap, I aim for solutions that leave a lasting impact on the people who use them."}
                </p>
                <Image src="/other/About Me Photo.svg" alt="Chibi Right" width={530} height={412}/>
            </div>

        </div>
    )
}