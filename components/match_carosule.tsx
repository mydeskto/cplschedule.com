"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { matchesData } from "@/data/matches-data"
import chevronImage from '@/public/images/AnimatedChevronWhite.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// Helper for window dimensions (simplified)
const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  useEffect(() => {
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight })
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return dimensions
}

interface Match {
  id: number
  matchId?: string
  matchNumber: string
  date: string
  time: string
  venue: string
  status?: string
  matchType?: string
  team1: {
    name: string
    logo: string
    score?: string
    overs?: string
  }
  team2: {
    name: string
    logo: string
    score?: string
    overs?: string
    target?: string
  }
  result?: string
  winner?: string
  keywords?: string[]
}

const MatchCard = ({ match }: { match: Match }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="w-full"
  >
    <Card className="bg-[#1a1f3c] border-white/10 text-white overflow-hidden hover:border-[#f26522]/50 transition-colors duration-300 shadow-xl">
       <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
             <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                match.status === "live" ? "bg-red-600 text-white animate-pulse" : 
                match.status === "completed" ? "border border-[#f26522] text-[#f26522]" : "bg-slate-700 text-white"
             }`}>
                {match.status === "completed" ? "RESULT" : match.status === "live" ? "LIVE" : "UPCOMING"}
             </span>
              <div className="flex items-center text-xs text-slate-400 gap-1">
                 <MapPin className="w-3 h-3" />
                 <span>{match.venue}</span>
              </div>
          </div>

          <div className="space-y-4">
              {/* Team 1 */}
              <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 relative bg-white/10 rounded-full p-1.5 flex items-center justify-center">
                        <img src={match.team1.logo} alt={match.team1.name} className="w-full h-full object-contain" />
                     </div>
                     <span className="font-bold text-lg">{match.team1.name}</span>
                  </div>
                  <div className="text-right">
                     <span className="font-mono font-bold text-xl">{match.team1.score || "-"}</span>
                     {match.team1.overs && <span className="text-xs text-slate-400 block">{match.team1.overs} ov</span>}
                  </div>
              </div>

              {/* Team 2 */}
              <div className="flex justify-between items-center">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 relative bg-white/10 rounded-full p-1.5 flex items-center justify-center">
                        <img src={match.team2.logo} alt={match.team2.name} className="w-full h-full object-contain" />
                     </div>
                     <span className="font-bold text-lg">{match.team2.name}</span>
                  </div>
                  <div className="text-right">
                     <span className="font-mono font-bold text-xl">{match.team2.score || "-"}</span>
                     {match.team2.overs && <span className="text-xs text-slate-400 block">{match.team2.overs} ov</span>}
                  </div>
              </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2">
             <div className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {match.date} • {match.time}
             </div>
             <p className="text-sm font-medium text-[#f26522] text-center">
                {match.result || match.matchType}
             </p>
          </div>
       </CardContent>
    </Card>
  </motion.div>
)

export default function MatchCarousel() {
  const pathname = usePathname()
  const { width } = useWindowDimensions()

  const pathIncludesMatches = pathname?.includes('matches')
  const pathIncludesLive = pathname?.includes('live')
  const initialTab = pathIncludesMatches ? "matches" : pathIncludesLive ? "live" : "live" // Default to LIVE per user preference
  
  const [activeTab, setActiveTab] = useState<"matches" | "upcoming" | "live">(initialTab)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Data
  const matches: Match[] = matchesData.matches as any
  const completedMatches = matches.filter(m => m.status === "completed").reverse()
  const upcomingMatches = matches.filter(m => !m.status || (m.status !== "completed" && m.status !== "live"))
  
  // Live matches mock (in reality this would fetch from API as in previous code, simplified here for robustness)
  // Check if any match in data is marked live, otherwise show empty or placeholder
  const liveMatches = matches.filter(m => m.status === "live")
  
  // Use API fetching for Live if needed, but for now allow fallback to data
  const displayedMatches = activeTab === "matches" ? completedMatches : activeTab === "live" ? liveMatches : upcomingMatches

  const nextSlide = () => {
    if (displayedMatches.length === 0) return
    setCurrentIndex((prev) => (prev + 1) >= displayedMatches.length ? 0 : prev + 1)
  }

  const prevSlide = () => {
    if (displayedMatches.length === 0) return
    setCurrentIndex((prev) => (prev - 1) < 0 ? displayedMatches.length - 1 : prev - 1)
  }

  return (
    <div className="w-full bg-[#122754] py-8 relative overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto mb-6 px-4">
        <div className="flex items-center justify-between mb-4 text-[#f26522]">
          <h2 className="text-3xl font-bold text-[#f26522]">MATCHES</h2>
          <div className="flex space-x-1">
             {[...Array(4)].map((_, i) => (
                <Image key={i} src={chevronImage} height={20} width={30} alt="" className="-mt-2 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
             ))}
          </div>
        </div>
        <h2 className="text-lg font-bold text-[#f26522] mb-4">CPL Live Score 2026 Today Time Table</h2>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-[#f26522]/30 overflow-x-auto scrollbar-none">
          <button onClick={() => setActiveTab("live")} className={`px-6 py-2 font-semibold transition-colors whitespace-nowrap ${activeTab === "live" ? "text-[#f26522] border-b-2 border-[#f26522]" : "text-gray-400 hover:text-[#f26522]"}`}>
            Live ({liveMatches.length})
          </button>
          <button onClick={() => setActiveTab("matches")} className={`px-6 py-2 font-semibold transition-colors whitespace-nowrap ${activeTab === "matches" ? "text-[#f26522] border-b-2 border-[#f26522]" : "text-gray-400 hover:text-[#f26522]"}`}>
            Matches ({completedMatches.length})
          </button>
          <button onClick={() => setActiveTab("upcoming")} className={`px-6 py-2 font-semibold transition-colors whitespace-nowrap ${activeTab === "upcoming" ? "text-[#f26522] border-b-2 border-[#f26522]" : "text-gray-400 hover:text-[#f26522]"}`}>
            Upcoming ({upcomingMatches.length})
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 min-h-[400px]">
         <AnimatePresence mode="wait">
            {displayedMatches.length > 0 ? (
               activeTab === "matches" ? (
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
                    {displayedMatches.map(match => (
                       <MatchCard key={match.id} match={match} />
                    ))}
                 </div>
               ) : (
                 // Carousel for Live and Upcoming
                 <div className="relative">
                    <div className="overflow-hidden">
                       <motion.div 
                          className="flex gap-4"
                          animate={{ x: -currentIndex * (width >= 1024 ? 50 : 100) + "%" }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                       >
                          {displayedMatches.map((match) => (
                             <div key={match.id} className="min-w-full lg:min-w-[50%] p-2">
                                <MatchCard match={match} />
                             </div>
                          ))}
                       </motion.div>
                    </div>

                    {/* Controls */}
                    {displayedMatches.length > 1 && (
                      <div className="flex justify-center mt-6 gap-4">
                        <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-[#122754]">
                           <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-[#122754]">
                           <ChevronRight className="w-5 h-5" />
                        </Button>
                      </div>
                    )}
                 </div>
               )
            ) : (
               <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                  <p className="text-xl">No matches available in this category.</p>
               </div>
            )}
         </AnimatePresence>
      </div>
    </div>
  )
}


