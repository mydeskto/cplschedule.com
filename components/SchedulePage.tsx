"use client"

import { useState, useEffect, useMemo } from "react"
import { matchesData } from "@/data/matches-data"
import Image from "next/image"
import { MapPin, ChevronDown } from "lucide-react"
import whiteLogo from "@/public/images/bpl-logo.avif"

export default function NPLSchedule() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [selectedTeam, setSelectedTeam] = useState("All Teams")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Countdown Logic
  useEffect(() => {
    const targetDate = new Date("August 15, 2026 13:00:00").getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(timer)
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const teams = useMemo(() => {
    const allTeams = new Set<string>()
    matchesData.matches.forEach(m => {
      allTeams.add(m.team1.name)
      allTeams.add(m.team2.name)
    })
    return ["All Teams", ...Array.from(allTeams).sort()]
  }, [])

  const filteredMatches = useMemo(() => {
    if (selectedTeam === "All Teams") return matchesData.matches
    return matchesData.matches.filter(m => 
      m.team1.name === selectedTeam || m.team2.name === selectedTeam
    )
  }, [selectedTeam])

  const formatDate = (dateStr: string) => {
    const [month, day] = dateStr.split(" ")
    const monthMap: { [key: string]: string } = {Jan: "January", Feb: "February", Mar: "March", Apr: "April", May: "May", Jun: "June", Jul: "July", Aug: "August", Sep: "September", Oct: "October", Nov: "November", Dec: "December" }
    return `${day} ${monthMap[month] || month}, 2026`
  }

  return (
    <div className="min-h-screen p-2 md:p-4 font-inter" style={{ backgroundColor: "#122754" }}>
      <div className="max-w-7xl mx-auto space-y-2">
        
        {/* Top Section: Logo & Countdown */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-lg p-2 md:p-6 backdrop-blur-sm gap-8">
          <div className="relative w-48 h-12 md:w-64 md:h-16">
            <Image
              src={whiteLogo}
              alt="CPL Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex gap-4 md:gap-8">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="bg-white/10 border border-white/10 rounded-sm w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mb-2 shadow-xl">
                  <span className="text-white text-xl md:text-3xl font-black">{item.value.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#f26522]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Section: Title & Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4 border-b border-white/10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Scores & <span className="text-[#f26522]">Fixtures</span>
          </h2>

          <div className="relative w-full md:w-72">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full bg-white/5 border border-white/10 hover:border-[#f26522]/50 text-white rounded-sm px-5 py-4 flex items-center justify-between transition-all group"
            >
              <span className="text-xs font-black uppercase tracking-widest">{selectedTeam}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''} group-hover:text-[#f26522]`} />
            </button>

            {isFilterOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-sm overflow-hidden z-[100] shadow-2xl max-h-80 overflow-y-auto thin-scrollbar">
                {teams.map((team) => (
                  <button
                    key={team}
                    onClick={() => {
                      setSelectedTeam(team)
                      setIsFilterOpen(false)
                    }}
                    className={`w-full text-left px-5 py-3 text-[10px] font-black uppercase tracking-widest transition-all hover:bg-white/10 ${
                      selectedTeam === team ? 'text-[#f26522] bg-white/5' : 'text-white/60'
                    }`}
                  >
                    {team}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
          {filteredMatches.map((match) => (
            <div 
              key={match.id} 
              className="bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col border border-white/10"
            >
              <div className="flex items-center justify-between p-6 ">
                {/* Team 1 */}
                <div className="flex flex-col items-center gap-4 w-1/3 text-center">
                  <div className="relative w-16 h-16 md:w-24 md:h-24">
                    <Image
                      src={match.team1.logo}
                      alt={match.team1.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-black font-black text-xs md:text-sm uppercase tracking-tight leading-tight min-h-[2.5rem] flex items-center justify-center">
                    {match.team1.name}
                  </h3>
                </div>

                {/* Match Info */}
                <div className="flex flex-col items-center w-1/3 text-center px-2">
                  <span className="text-[#CC0000] font-black text-[10px] md:text-xs uppercase tracking-widest mb-1">
                    Group Stage
                  </span>
                  <span className="text-black font-bold text-[11px] md:text-sm mb-0.5 whitespace-nowrap">
                    {formatDate(match.date)}
                  </span>
                  <span className="text-gray-600 font-bold text-[10px] md:text-xs mb-4">
                    {match.time}
                  </span>
                  <div className="bg-gray-100 rounded-full w-12 h-6 md:w-16 md:h-8 flex items-center justify-center border border-gray-200">
                    <span className="text-[#CC0000] font-black text-[10px] md:text-xs italic">
                      VS
                    </span>
                  </div>
                </div>

                {/* Team 2 */}
                <div className="flex flex-col items-center gap-4 w-1/3 text-center">
                  <div className="relative w-16 h-16 md:w-24 md:h-24">
                    <Image
                      src={match.team2.logo}
                      alt={match.team2.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-black font-black text-xs md:text-sm uppercase tracking-tight leading-tight min-h-[2.5rem] flex items-center justify-center">
                    {match.team2.name}
                  </h3>
                </div>
              </div>

              {/* Venue Footer */}
              <div className="border-t border-gray-100 bg-white py-5 flex items-center justify-center gap-3">
                <MapPin className="text-[#CC0000] w-3 h-3 md:w-4 md:h-4 fill-[#CC0000]" />
                <span className="text-gray-400 font-black text-[9px] md:text-xs uppercase tracking-widest">
                  {match.venue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



