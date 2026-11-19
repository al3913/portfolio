'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/app/data/experience";
import ExperienceCard from "../ExperienceCard";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
} from "@/lib/animations";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col w-full"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
    >
      <div className="flex w-full justify-between items-center">
        <motion.div
          className="flex flex-col h-[412px] items-start justify-start gap-[32px]"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <div className="flex gap-[12px] items-center h-[68px]">
            <p className="text-headline text-brand-light-blue">
              {"Who's this guy?"}
            </p>
            <motion.div
              variants={fadeInUp}
              transition={defaultTransition}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Image src="/chibis/chibi-down.png" alt="Chibi Andy pointing down" width={68} height={68} className="h-[58px] object-cover object-top"/>
            </motion.div>
          </div>
                    <p className="text-body text-brand-light-blue max-w-[471px] text-[18px]">
                        {"I’m a software engineer who blends full-stack development with a strong focus on design and usability. Whether it’s building tools that save hours of work or creating apps that feel intuitive from the first tap, I aim for solutions that leave a lasting impact on the people who use them."}
                    </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          <Image src="/other/About Me Photo.svg" alt="Picture of Andy" width={530} height={412}/>
        </motion.div>
      </div>
      <div className="grid grid-cols-[11px_1fr] gap-[48px]">
        <motion.div
          className="flex flex-col w-full h-full relative justify-between items-center py-[60.305px]"
          variants={staggerContainer}
        >
          <div className="absolute top-0 bottom-0 w-[1px] bg-white"></div>
          {experience.map((_, i) => (
            <motion.div
              key={i}
              className="w-full h-[11px] bg-[#D9D9D9] outline outline-2 rounded-full z-10"
              variants={fadeInUp}
              transition={defaultTransition}
            />
          ))}
        </motion.div>
        <motion.div
          className="flex flex-col"
          variants={staggerContainer}
        >
          {experience.map((_, i) => (
            <motion.div key={i} variants={fadeInUp} transition={defaultTransition}>
              <ExperienceCard className="last:border-b" {..._} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}