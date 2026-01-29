import { PenTool, PanelsTopLeft, Terminal, AppWindow } from "lucide-react";
import Image from "next/image";
import { designPrinciples, designTools, engineerFrontend, engineerBackend } from "@/app/data/skills";
import SkillList from "../SkillList";

export default function Skills() {

    const toggleOpen = () => {
        // TODO: Handler for rotating chevron + opening dropdowns
    }
        
    return (
        <div className="flex w-full">
            <div className="flex flex-col gap-[32px] w-full">
                <div className="flex gap-[32px] items-center w-full ml-[-12px]">
                    <Image src="/icons/chevron.svg" alt="Chevron" width={64} height={64} className="rotate-90"/>
                    <h2 className="text-hero text-[#ad86ff] border-3 border-brand-light-blue p-[16px]">design</h2>
                </div>
                <div className="pl-[80px] flex flex-col gap-[20px]">
                    <div className="flex gap-[36px]">
                        <PanelsTopLeft color="#ffffff" size={58}/>
                        <h3 className="text-hero text-brand-light-blue text-[36px]">Principles</h3>
                    </div>
                    <SkillList items={designPrinciples} className="pl-[90px] flex flex-col gap-[32px]"/>
                </div>
                <div className="pl-[80px] flex flex-col gap-[20px]">
                    <div className="flex gap-[36px]">
                        <PenTool color="#ffffff" size={58}/>
                        <h3 className="text-hero text-brand-light-blue text-[36px]">Tools</h3>
                    </div>
                    <SkillList items={designTools} className="pl-[90px] flex flex-col gap-[32px]"/>  
                </div>    
            </div>
            <div className="flex flex-col gap-[32px] w-full">
                <div className="flex gap-[32px] items-center w-full ml-[-12px]">
                    <Image src="/icons/chevron.svg" alt="Chevron" width={64} height={64} className="rotate-90"/>
                    <h2 className="text-hero text-brand-light-blue p-[19px]">{'<'}<span className="text-[#96e1ff]">Engineer</span>{'/>'}</h2>
                </div>
                <div className="pl-[80px] flex flex-col gap-[20px]">
                    <div className="flex gap-[36px]">
                        <AppWindow color="#ffffff" size={58}/>
                        <h3 className="text-hero text-brand-light-blue text-[36px]">Frontend</h3>
                    </div>
                    <SkillList items={engineerFrontend} className="pl-[90px] flex flex-col gap-[32px]"/>
                </div>
                <div className="pl-[80px] flex flex-col gap-[20px]">
                    <div className="flex gap-[36px]">
                        <Terminal color="#ffffff" size={58}/>
                        <h3 className="text-hero text-brand-light-blue text-[36px]">Backend</h3>
                    </div>
                    <SkillList items={designTools} className="pl-[90px] flex flex-col gap-[32px]"/>  
                </div>
            </div>
        </div>
    )
}