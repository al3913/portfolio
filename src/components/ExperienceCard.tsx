import Image from "next/image";

interface ExperienceCardProps {
    logo: string;
    company: string;
    role: string;
    date: string;
    description: string;
}

export default function ExperienceCard(experience : ExperienceCardProps) {
    return (
        <div className="flex flex-col">
            <div className="flex border-y border-brand-light-blue">
                <div className="w-[149px] h-[24px]">
                    <Image src={experience.logo} alt={experience.company} width={149} height={24} className="h-full"/>
                </div>
            </div>
        </div>
    )
}