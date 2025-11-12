'use client';

// SVG assets from Figma design
const imgVector1 = "http://localhost:3845/assets/1f7306d76a786d73b14e3990482004b0667b052a.svg";
const imgVector2 = "http://localhost:3845/assets/3f216635acf91e0e970554751d27239442f356cf.svg";
const imgVector3 = "http://localhost:3845/assets/62cdc82044f768ca8c359e0a20e8c710a404927d.svg";
const imgVector4 = "http://localhost:3845/assets/b8411917756e285444b89f0f17eb2931b754f45b.svg";
const imgVector5 = "http://localhost:3845/assets/840daf1a99bdc85a4dad275dc7f7ac407f081a3a.svg";
const imgVector6 = "http://localhost:3845/assets/6c311ce39dc5bec6ba5ed1159be47d3d9638e181.svg";
const imgVector7 = "http://localhost:3845/assets/10b13cce485e599725d5059f92e153494c334234.svg";

type CursorProps = {
  variant?: "Dev" | "Designer" | "Founder" | "Creator" | "Andy" | "You" | "Manager";
};

// Variant configuration
const variantConfig = {
  Manager: {
    icon: imgVector1,
    label: "Manager",
    bgColor: "#ff7979",
  },
  Dev: {
    icon: imgVector2,
    label: "Developer",
    bgColor: "#96e1ff",
  },
  Designer: {
    icon: imgVector3,
    label: "Designer",
    bgColor: "#ad86ff",
  },
  Founder: {
    icon: imgVector4,
    label: "Founder",
    bgColor: "#7cd1a3",
  },
  Creator: {
    icon: imgVector5,
    label: "Creator",
    bgColor: "#ff8857",
  },
  You: {
    icon: imgVector6,
    label: "You",
    bgColor: "#5f8eef",
  },
  Andy: {
    icon: imgVector7,
    label: "Andy",
    bgColor: "#ccdcff",
  },
} as const;

export default function Cursor({ variant = "Andy" }: CursorProps) {
  const config = variantConfig[variant];
  const isCreator = variant === "Creator";

  return (
    <div className="relative h-[50px] w-[67px]">
      {/* Icon/Image Section */}
      <div className="absolute bottom-[38%] left-0 right-[61.21%] top-0">
        <div className="absolute inset-[-5.11%_-6.1%_-5.11%_-6.18%]">
          {/* Using img instead of Next Image for external localhost URLs */}
          <img 
            alt="" 
            className="block max-w-none w-full h-full object-contain" 
            src={config.icon}
          />
        </div>
      </div>

      {/* Badge Section */}
      <div 
        className={`absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[17px] px-[10px] py-[2px] rounded-[25px] ${
          isCreator 
            ? 'top-[calc(50%+15.5px)] translate-y-[-50%]' 
            : 'bottom-0 top-[62%]'
        }`}
        style={{ backgroundColor: config.bgColor }}
      >
        <div className="flex flex-col font-markl font-bold justify-center leading-[0] not-italic relative shrink-0 text-brand-black text-[12px] text-center whitespace-nowrap">
          <p className="leading-normal">{config.label}</p>
        </div>
      </div>
    </div>
  );
}

