import Image from "next/image";

interface ExperienceCardProps {
    logo: string;
    company: string;
    role: string;
    date: string;
    description: string;
    className?: string;
}

export default function ExperienceCard({className, ...experience} : ExperienceCardProps) {
    return (
        <div className={`flex flex-col ${className} border-t border-brand-light-blue`}>
            <div className="flex py-[40px]">
                <div className="flex flex-row gap-[56px] justify-start items-center">
                    <Image src={experience.logo} alt={experience.company} width={149} height={24} className="h-[51.61px] shrink-0"/>
                    <div className="flex flex-col h-full min-w-[410px] shrink-0 gap-[6px]">
                        <p className="text-brand-light-blue text-title ">{experience.role}</p>
                        <p className="text-brand-light-blue text-label">{experience.date}</p>
                    </div>
                    <p className="text-body text-brand-light-blue">{experience.description}</p>
                </div>
            </div>
        </div>
    )
}