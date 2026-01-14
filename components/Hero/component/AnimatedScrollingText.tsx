"use client"

import { motion } from "@/lib/motion"
import Image from 'next/image'
import chevron from '@/public/images/AnimatedChevronWhite.svg'

const scrollingTexts = [
  "CPL",
  "CPL Point Table",
  "CPLt20league.com",
  "CPL Live Score",
  "CPL 2026 Schedule",
  "CPL Match",
  "CPL Today Match",
  "Coastal Premier League 2026",
  "Today CPL Match"

]

// Create multiple duplicates for a smoother infinite loop
const duplicatedTexts = [...scrollingTexts, ...scrollingTexts, ...scrollingTexts, ...scrollingTexts]

export function AnimatedScrollingText() {
  return (
    <div className="min-w-screen  -ml-6  overflow-hidden bg-transparent py-4 mt-15 md:mt-5 relative ">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 30,
          repeatDelay: 0,
        }}
      >
        {duplicatedTexts.map((text, index) => (
          <div
            key={index}
            className="flex items-center mx-8 gap-4 md:gap-6 lg:gap-8"
          >
            <span className="text-white font-bold sm:text-base md:text-xl tracking-wider whitespace-nowrap">
              {text}
            </span>
            <Image 
              src={chevron.src}
              height={20} 
              width={20} 
              alt="Animated chevron" 
              className="mt-1 animate-bounce"
              loading="lazy"
              priority={false}
              
            />

            
            
          </div>
        ))}
      </motion.div>
    </div>
  )
}

