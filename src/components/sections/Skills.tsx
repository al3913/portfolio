import { CodeXml, PanelsTopLeft } from "lucide-react";
import Image from "next/image";

export default function Skills() {

    const toggleOpen = () => {
        // TODO: Handler for rotating chevron + opening dropdowns
    }
        
    return (
        <>
            <div className="flex gap-[48px] items-center w-full ml-[-40px]">
                <Image src="/icons/chevron.svg" alt="Chevron" width={64} height={64}/>
                <h2 className="text-hero text-brand-light-blue">{'<'}<span className="text-[#96e1ff]">Engineer</span>{'/>'}</h2>
            </div>
            <div className="flex gap-[48px] items-center w-full ml-[-40px]">
                <Image src="/icons/chevron.svg" alt="Chevron" width={64} height={64}/>
                <h2 className="text-hero text-[#ad86ff] border-3 border-brand-light-blue p-[16px]">design</h2>
            </div>
        </>
    )
}