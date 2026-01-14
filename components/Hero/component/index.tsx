"use client"

import React, { useState, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import hero1 from '@/public/images/hero/hero1.avif'
import hero2 from '@/public/images/hero/hero2.avif'
import hero3 from '@/public/images/hero/hero3.avif'
import hero4 from '@/public/images/hero/hero4.avif'
import Link from "next/link"
import Image from "next/image"
import { AnimatedScrollingText } from "./AnimatedScrollingText"
import { motion, AnimatePresence } from "framer-motion"

const carouselData = [
  {
    id: "CPL-reg-198",
    backgroundImage: hero1,
    title: "CPL 2026 Schedule",
    subtitle: "Coastal Premier League Match Fixtures",
    description: "Experience the thrill of cricket at its finest. View the full schedule of matches for the upcoming season.",
    buttonText: "View Schedule",
    link: "/schedule",
    tag: "LIVE FIXTURES"
  },
  {
    id: "CPL-tickets-2765",
    backgroundImage: hero2,
    title: "CPL TICKETS",
    subtitle: "Get Your Tickets Now",
    description: "Don't miss the action! Secure your seats for CPL 2026. Early bird discounts available for a limited time.",
    buttonText: "CPL 2026 Tickets",
    link: "/blog/CPL-tickets/",
    tag: "BOOK NOW"
  },
  {
    id: "CPL-fixtures-398765",
    backgroundImage: hero4,
    title: "CPL Points Table",
    subtitle: "Coastal Premier League Standings",
    description: "Keep track of your favorite teams. Real-time updates on standings and performance statistics.",
    buttonText: "View Standings",
    link: "/points-table",
    tag: "RANKINGS"
  },
  {
    id: "CPL-fantasy-98756",
    backgroundImage: hero3,
    title: "CPL Live Score",
    subtitle: "Coastal Premier League Live Match Score",
    description: "Stay updated with ball-by-ball commentary and live scores. Never miss a single moment of the game.",
    buttonText: "View Live Score",
    link: "/matches",
    tag: "MATCH CENTER"
  },
]

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full h-[85vh] md:h-[70vh] max-h-[800px] md:max-h-[700px] min-h-[550px] md:min-h-[500px]">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 8000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full h-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="h-full -ml-0">
            {carouselData.map((slide, index) => (
              <CarouselItem key={slide.id} className="pl-0 basis-full">
                <div className="relative w-full h-[80vh] md:h-[70vh] max-h-[800px] md:max-h-[700px] min-h-[550px] md:min-h-[500px] overflow-hidden">
                  {/* Background Image with Motion */}
                  <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: current === index ? 1 : 1.1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="absolute inset-0 w-full h-full z-0"
                  >
                    <Image
                      src={slide.backgroundImage}
                      alt={slide.title}
                      fill
                      className="object-cover object-center"
                      priority={index === 0}
                      quality={100}
                      sizes="100vw"
                    />
                    {/* Dynamic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
                  </motion.div>

                  {/* Content Container */}
                  <div className="relative z-20 w-full h-full pt-14 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                      <div className="max-w-4xl">
                        <AnimatePresence mode="wait">
                          {current === index && (
                            <div className="space-y-6">
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex items-center gap-3"
                              >
                                <span className="bg-[#f26522] text-black text-[10px] font-black tracking-[0.2em] px-3 py-1 uppercase rounded-sm shadow-[0_0_15px_rgba(242,101,34,0.3)]">
                                  {slide.tag}
                                </span>
                                <div className="h-[1px] w-12 bg-[#f26522]/50" />
                              </motion.div>

                              <div className="space-y-4">
                                <motion.h1
                                  initial={{ opacity: 0, x: -30 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white tracking-tighter"
                                >
                                  {slide.title.split(' ').map((word, i) => (
                                    <span key={i} className={i % 2 !== 0 ? "text-transparent stroke-text" : ""}>
                                      {word}{' '}
                                    </span>
                                  ))}
                                </motion.h1>

                                <motion.h3
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.6, delay: 0.5 }}
                                  className="text-xl sm:text-2xl md:text-3xl font-light text-[#f26522] italic"
                                >
                                  {slide.subtitle}
                                </motion.h3>

                                {slide.description && (
                                  <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    className="text-white/60 text-sm sm:text-lg max-w-xl leading-relaxed font-light"
                                  >
                                    {slide.description}
                                  </motion.p>
                                )}
                              </div>

                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                className="flex flex-wrap gap-4 pt-4"
                              >
                                <Link 
                                  href={slide.link || "#"}
                                  className="group relative px-8 py-4 bg-[#f26522] overflow-hidden rounded-sm transition-all duration-300 active:scale-95 shadow-lg shadow-[#f26522]/20"
                                >
                                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                  <span className="relative z-10 text-black font-black text-sm uppercase tracking-wider group-hover:text-black">
                                    {slide.buttonText}
                                  </span>
                                </Link>
                                
                                <Link 
                                  href="/teams"
                                  className="group px-8 py-4 border border-white/20 hover:border-[#f26522] rounded-sm transition-all duration-300 active:scale-95"
                                >
                                  <span className="text-white font-black text-sm uppercase tracking-wider group-hover:text-[#f26522]">
                                    Discover Teams
                                  </span>
                                </Link>
                              </motion.div>
                            </div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Luxury Navigation Controls */}
          <div className="absolute bottom-12 right-4 sm:right-12 flex items-center gap-6 z-40">
            <div className="flex items-center gap-4 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
              <span className="text-[10px] font-black text-[#f26522] tracking-[0.2em]">
                {String(current + 1).padStart(2, '0')}
              </span>
              <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  key={current}
                  transition={{ duration: 8, ease: "linear" }}
                  className="absolute inset-0 bg-[#f26522]"
                />
              </div>
              <span className="text-[10px] font-black text-white/40 tracking-[0.2em]">
                {String(carouselData.length).padStart(2, '0')}
              </span>
            </div>
            
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md hover:bg-[#f26522] hover:text-black transition-all duration-500 shadow-xl" />
              <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md hover:bg-[#f26522] hover:text-black transition-all duration-500 shadow-xl" />
            </div>
          </div>
        </Carousel>

        <style jsx global>{`
          .stroke-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
          }
        `}</style>
      </div>
    </section>
  )
}
