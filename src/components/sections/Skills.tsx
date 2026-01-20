import { CodeXml, PanelsTopLeft } from "lucide-react";
import Image from "next/image";

export default function Skills() {
    return (
        <>
            <div className="flex gap-[48px] items-center w-full ml-[-40px]">
                <Image src="/icons/chevron.svg" alt="Chevron" width={64} height={64}/>
                <CodeXml color="white" size={64}/>
            </div>
            <div className="flex gap-[48px] items-center w-full ml-[-40px]">
                <Image src="/icons/chevron.svg" alt="Chevron" width={64} height={64}/>
                <PanelsTopLeft color="white" size={64} strokeWidth={1.5}/>
            </div>
        </>
    )
}