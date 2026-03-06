'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Cursor from '../Cursor';
import Typewriter from '../Typewriter';
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  springTransition,
} from '@/lib/animations';

const words = ["challenges", "frustrations", "painpoints"];

export default function Hero() {
  return (
    <div className="flex flex-col gap-[140px] items-start justify-center pb-0 relative w-full bg-brand-black">
      {/* Headline Section */}
      <motion.div
        className="relative w-full max-w-6xl"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="text-display font-bold relative text-brand-light-blue text-[32px] md:text-[40px] lg:text-[48px] leading-[1.25] lg:leading-[64px]"
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} transition={defaultTransition}>
            I build software by starting
          </motion.p>
          <motion.p variants={fadeInUp} transition={defaultTransition}>
            with people, their <Typewriter words={words} />
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Body Section */}
      <div className="relative w-full max-w-2xl">
        <motion.div
          className="text-body relative text-brand-light-blue max-w-[589px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, delay: 0.25 }}
        >
          <p>
            {"The best software isn't just powerful, it feels like it was made for you. "}
            {"I focus on understanding people first, then designing and building in a way "}
            {"that makes the solution clear, usable, and enjoyable."}
          </p>
        </motion.div>

        {/* Cursor component */}
        <motion.div
          className="absolute -bottom-8 md:right-25 lg:right-125"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.5 }}
        >
          <div className="h-[50px] relative w-[66.886px]">
            <Cursor variant="Andy" />
          </div>
        </motion.div>
      </div>

      {/* Artwork Image */}
      <motion.div
        className="absolute right-[60px] md:right-[-45] w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[319px] lg:h-[319px] top-[50%] -translate-y-3/4"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...defaultTransition, delay: 0.35 }}
      >
        <Image
          src="/chibis/chibi-left.png"
          alt="Character artwork"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
