import { SkillItem } from "@/app/types/skill";
import Image from 'next/image'

type Props = {
    items: SkillItem[]
    className?: string
}

const SkillList = ({items, className } : Props) => {
    return (
        <ul className={className}>
            {
                items.map((item, index) => (
                    <div key={index} className="flex gap-[36px]">
                        <Image src={item.icon} width={21} height={21} alt={'icon for ' + item.name}/>
                        <h4 className="text-label text-brand-light-blue">{item.name}</h4>
                    </div>
                ))
            }
        </ul>
    )
}

export default SkillList;