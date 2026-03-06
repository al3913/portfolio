'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, defaultTransition } from "@/lib/animations";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-[40px] justify-start items-center w-full"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInUp}
      transition={defaultTransition}
    >
      <div className="flex flex-col text-headline text-brand-light-blue items-center w-full">
        <p>
          If you have a problem worth solving —
          <span className="font-black"> big, </span>
          <span className="font-light"> small, </span>
          or in between
        </p>
        <p className="mt-[30px]">
          I&apos;d love to hear your story.
        </p>
      </div>
      <a href="https://linkedin.com/in/andylin21" target="_blank" rel="noopener noreferrer" className="w-fit">
        <motion.button
          className="bg-brand-light-blue px-[30px] py-[15px] rounded-[59.6px] text-button text-brand-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Let&apos;s connect
        </motion.button>
      </a>
    </motion.div>
  );
}