import { PenTool, PanelsTopLeft, Terminal, AppWindow } from "lucide-react";
import Image from "next/image";
import { designPrinciples, designTools, engineerFrontend, engineerBackend } from "@/app/data/skills";
import SkillList from "../SkillList";

export default function Skills() {
    return (
        <div className="flex w-full">
            <div className="flex flex-col gap-[32px] w-full">
                <div className="flex gap-[32px] items-center w-full ml-[-12px]">
                    <Image src="/icons/chevron.svg" alt="Chevron" width={40} height={40} className="rotate-90"/>
                    <h2 className="text-headline text-[#ad86ff] border-3 border-brand-light-blue p-[16px]">design</h2>
                </div>
                <div className="pl-[80px] flex flex-col gap-[20px]">
                    <div className="flex gap-[24px]">
                        <PanelsTopLeft color="#ffffff" size={30}/>
                        <h3 className="text-title text-brand-light-blue">Principles</h3>
                    </div>
                    <SkillList items={designPrinciples} className="pl-[90px] flex flex-col gap-[18px]"/>
                </div>
                <div className="pl-[80px] flex flex-col gap-[20px]">
                    <div className="flex gap-[24px]">
                        <PenTool color="#ffffff" size={30}/>
                        <h3 className="text-title text-brand-light-blue">Tools</h3>
                    </div>
                    <SkillList items={designTools} className="pl-[90px] flex flex-col gap-[18px]"/>  
                </div>    
            </div>
            <div className="flex flex-col gap-[32px] w-full">
                <div className="flex gap-[32px] items-center w-full ml-[-12px]">
                    <Image src="/icons/chevron.svg" alt="Chevron" width={40} height={40} className="rotate-90"/>
                    <h2 className="text-headline text-brand-light-blue py-[19px]">{'<'}<span className="text-[#96e1ff]">Engineer</span>{'/>'}</h2>
                </div>
                <div className="pl-[80px] flex flex-col gap-[20px]">
                    <div className="flex gap-[24px]">
                        <AppWindow color="#ffffff" size={30}/>
                        <h3 className="text-title text-brand-light-blue">Frontend</h3>
                    </div>
                    <SkillList items={engineerFrontend} className="pl-[90px] flex flex-col gap-[18px]"/>
                </div>
                <div className="pl-[80px] flex flex-col gap-[20px]">
                    <div className="flex gap-[24px]">
                        <Terminal color="#ffffff" size={30}/>
                        <h3 className="text-title text-brand-light-blue">Backend</h3>
                    </div>
                    <SkillList items={engineerBackend} className="pl-[90px] flex flex-col gap-[18px]"/>  
                </div>
            </div>
        </div>
    )
}