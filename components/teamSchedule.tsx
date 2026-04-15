"use client"

import { useState, useEffect, useMemo, useRef, Suspense } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { matchesData } from "@/data/matches-data"
import Image from "next/image"
import { MapPin, ChevronDown, X } from "lucide-react"
import whiteLogo from "@/public/images/newlogo.png"
import Link from "next/link"
import { teamsData } from "@/data/teamData"



const matches = [
  {
    date: "October 17",
    match: "Janakpur Bolts vs Kathmandu Gorkhas",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
    venueLink: "/npl-venue/tribhuvan-university-cricket-ground-kirtipur/",
  },
  {
    date: "October 18",
    match: "Karnali Yaks vs Chitwan Rhinos",
    time: "11:00 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 18",
    match: "Biratnagar Kings vs Pokhara Avengers",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 19",
    match: "Sudurpaschim Royals vs Kathmandu Gorkhas",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 20",
    match: "Chitwan Rhinos vs Lumbini Lions",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 21",
    match: "Sudurpaschim Royals vs Pokhara Avengers",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 22",
    match: "Lumbini Lions vs Karnali Yaks",
    time: "11:00 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 22",
    match: "Kathmandu Gorkhas vs Biratnagar Kings",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 24",
    match: "Biratnagar Kings vs Janakpur Bolts",
    time: "11:00 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 24",
    match: "Sudurpaschim Royals vs Karnali Yaks",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 25",
    match: "Kathmandu Gorkhas vs Lumbini Lions",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 26",
    match: "Chitwan Rhinos vs Biratnagar Kings",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
    venueLink: "/npl-venue/tribhuvan-university-cricket-ground-kirtipur/",
  },
  {
    date: "October 27",
    match: "Lumbini Lions vs Sudurpaschim Royals",
    time: "11:00 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 27",
    match: "Janakpur Bolts vs Pokhara Avengers",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 28",
    match: "Chitwan Rhinos vs Kathmandu Gorkhas",
    time: "11:00 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 28",
    match: "Biratnagar Kings vs Karnali Yaks",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 29",
    match: "Lumbini Lions vs Pokhara Avengers",
    time: "10:30 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "October 29",
    match: "Janakpur Bolts vs Sudurpaschim Royals",
    time: "02:45 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "Nov 30",
    match: "Karnali Yaks vs Kathmandu Gorkhas",
    time: "02:45 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 02",
    match: "Chitwan Rhinos vs Janakpur Bolts",
    time: "11:00 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 02",
    match: "Karnali Yaks vs Pokhara Avengers",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 03",
    match: "Biratnagar Kings vs Lumbini Lions",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 04",
    match: "Kathmandu Gorkhas vs Pokhara Avengers",
    time: "11:00 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 04",
    match: "Chitwan Rhinos vs Sudurpaschim Royals",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 05",
    match: "Janakpur Bolts vs Lumbini Lions",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 06",
    match: "Biratnagar Kings vs Sudurpaschim Royals",
    time: "10:30 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 06",
    match: "Chitwan Rhinos vs Pokhara Avengers",
    time: "02:45 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 07",
    match: "Janakpur Bolts vs Karnali Yaks",
    time: "02:45 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 09",
    match: "Qualifier 1",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 10",
    match: "Eliminator",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 11",
    match: "Qualifier 2",
    time: "03:15 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 13",
    match: "Final",
    time: "02:45 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
]

type TeamInfo = (typeof teamsData)[number]

function ordinalMatch(n: number): string {
  const j = n % 10
  const k = n % 100
  if (j === 1 && k !== 11) return `${n}st`
  if (j === 2 && k !== 12) return `${n}nd`
  if (j === 3 && k !== 13) return `${n}rd`
  return `${n}th`
}

function formatFixtureDateLabel(dateStr: string): string {
  const d = new Date(`${dateStr}, 2026`)
  if (Number.isNaN(d.getTime())) return dateStr
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${weekdays[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} '${String(d.getFullYear()).slice(-2)}`
}

function venueShortLabel(venue: string): string {
  if (venue.toLowerCase().includes("kirtipur")) return "Kirtipur"
  const parts = venue.split(",").map((p) => p.trim())
  return parts[parts.length - 1] || venue
}

function parseVsTeams(matchLabel: string): { home: string; away: string } | null {
  const parts = matchLabel.split(/\s+vs\s+/i)
  if (parts.length !== 2) return null
  return { home: parts[0].trim(), away: parts[1].trim() }
}

function findTeamByScheduleName(name: string): TeamInfo | undefined {
  const n = name.toLowerCase().trim()
  const byExact = teamsData.find((t) => t.teamName.toLowerCase() === n)
  if (byExact) return byExact
  const byId = teamsData.find((t) => t.id === n.replace(/\s+/g, "-"))
  if (byId) return byId
  if (n.includes("gorkhas") || n.includes("gurkhas")) {
    return teamsData.find((t) => t.id === "kathmandu-gurkhas")
  }
  if (n.includes("sudur")) {
    return teamsData.find((t) => t.id === "sudurpaschim-royals")
  }
  return teamsData.find((t) => n.includes(t.id.replace(/-/g, " ")) || t.teamName.toLowerCase().includes(n.split(/\s+/)[0] ?? ""))
}

export default function NPLScheduleTeamWise({ initialTeam }: { initialTeam?: string }) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading schedule...</div>}>
      <ScheduleContent initialTeam={initialTeam} />
    </Suspense>
  )
}

function ScheduleContent({ initialTeam }: { initialTeam?: string }) {
  const adInitialized = useRef(false);
  const adContainerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const teamParam = searchParams.get('team');
  const [selectedTeam, setSelectedTeam] = useState<string>(initialTeam || teamParam || "all");

  useEffect(() => {
    if (teamParam && teamParam !== selectedTeam) {
      setSelectedTeam(teamParam);
    }
  }, [teamParam]);

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedTeam(val);
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (val === "all") {
      current.delete('team');
    } else {
      current.set('team', val);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`, { scroll: false });
  };

  const filteredMatches = useMemo(() => {
    const withOriginalIndices = matches.map((m, i) => ({ ...m, originalIndex: i }));
    if (!selectedTeam || selectedTeam === "all") return withOriginalIndices;
    return withOriginalIndices.filter(match => {
      const parsed = parseVsTeams(match.match);
      if (!parsed) return false;
      const homeTeam = findTeamByScheduleName(parsed.home);
      const awayTeam = findTeamByScheduleName(parsed.away);
      return homeTeam?.id === selectedTeam || awayTeam?.id === selectedTeam;
    });
  }, [selectedTeam]);

  // Initialize Google AdSense ad after script loads
  useEffect(() => {
    if (adInitialized.current) return;

    const initializeAd = () => {
      try {
        if (
          typeof window !== 'undefined' &&
          (window as any).adsbygoogle &&
          !adInitialized.current &&
          adContainerRef.current
        ) {
          // Check if ad element exists in DOM
          const adElement = adContainerRef.current.querySelector('.adsbygoogle');
          if (adElement && !adElement.hasAttribute('data-adsbygoogle-status')) {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            adInitialized.current = true;
          }
        }
      } catch (err) {
        console.error('Error initializing AdSense:', err);
      }
    };

    // Check if adsbygoogle is already available
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      // Wait a bit for DOM to be ready
      setTimeout(initializeAd, 100);
    } else {
      // Wait for script to load (script is loaded globally in layout.tsx)
      const checkAdSense = setInterval(() => {
        if (typeof window !== 'undefined' && (window as any).adsbygoogle && adContainerRef.current) {
          initializeAd();
          clearInterval(checkAdSense);
        }
      }, 100);

      // Cleanup interval after 15 seconds
      setTimeout(() => {
        clearInterval(checkAdSense);
        // Try one more time after timeout
        if (!adInitialized.current) {
          initializeAd();
        }
      }, 15000);
    }
  }, []);

  return (
    <div className="min-h-screen p-2 md:p-4 font-inter" style={{ backgroundColor: "#122754" }}>
      <div className="max-w-7xl mx-auto space-y-2">



        {/* Second Section: Title & Filter */}
        <div className=" w-full items-center justify-between gap-6 py-4 border-b border-white/10">
          <h1 className="text-1xl md:text-3xl text-center font-black text-white tracking-normal">
            <span className="text-[#f26522]"> NPL 2026</span> Team-Wise Schedule & Fixtures
            {/* BPL 2026 Schedule – Full &nbsp; Match<span className="text-[#f26522]">  Fixtures</span> */}
          </h1>


        </div>
        <div className="mb-8">
          <p className="text-white text-center mb-4">
            The Nepal Premier League 2026 season 3 brings a complete NPL 2026 schedule for fans who want quick access to team-wise fixtures, match dates, and upcoming clashes. Whether you are looking for the full NPL schedule or checking the NPL today match schedule, this section helps you stay updated with every game.


          </p>
          <p className="text-white text-center">
            Each team will compete in a round-robin format, making every match important for points table standings and playoff qualification. Fans searching for NPL today match schedule or upcoming fixtures can easily track their favorite teams and key matches throughout the tournament.

          </p>

        </div>


        {/* Fixtures — white cards, text in main page blue (#122754) */}
        <div className="space-y-2">
          {filteredMatches.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-white text-lg">No matches found for the selected team.</p>
            </div>
          ) : (
            filteredMatches.map((match, index) => {
              const pairs = parseVsTeams(match.match)
              const venueLabel = venueShortLabel(match.venue)
              const dateLabel = formatFixtureDateLabel(match.date)
              const matchNo = ordinalMatch(match.originalIndex + 1)

              return (
                <div
                  key={`${match.date}-${index}-${match.match}`}
                  className="flex flex-col sm:flex-row w-full md:w-[80%] rounded-sm mx-auto overflow-hidden border border-[#122754]/18 bg-white shadow-md shadow-[#122754]/8"
                >
                  <div className="shrink-0 px-4 py-2 flex items-center justify-center sm:py-5 sm:w-[160px] border-b sm:border-b-0 sm:border-r border-[#122754]/12">
                    <p className="text-xs sm:text-sm font-medium leading-snug tracking-wide text-[#122754]">{dateLabel}</p>
                  </div>

                  <div className="flex-1 min-w-0 px-4 py-2 sm:py-5">
                    <p className="text-[11px] sm:text-xs text-[#122754]/75 mb-3 uppercase tracking-[0.06em] leading-relaxed">
                      <span className="font-semibold text-[#122754]">Upcoming</span>
                      <span className="mx-1.5 text-[#122754]/40">•</span>
                      <span>{matchNo} Match</span>
                      <span className="mx-1.5 text-[#122754]/40">•</span>
                      <span>{venueLabel}</span>
                      <span className="mx-1.5 text-[#122754]/40">•</span>
                      <span>Nepal Premier League</span>
                    </p>

                    {pairs ? (
                      <div className="space-y-1">
                        {[pairs.home, pairs.away].map((side) => {
                          const team = findTeamByScheduleName(side)
                          const display = team?.teamName ?? side
                          // Deterministically alternate between profileLink and outboundLink based on match index (even vs odd)
                          const isEven = parseInt(matchNo) % 2 === 0;
                          console.log("match number no ", isEven)
                          const href = isEven
                            ? (team?.profileLink || "#")
                            : (team?.outboundLink || "#");

                          const logo = team?.logo ?? "/placeholder.svg"

                          return (
                            <div key={side} className="flex items-center justify-between gap-3">
                              <Link href={href} className="flex items-center gap-2 min-w-0">
                                <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden ring-1 ring-[#122754]/15 bg-slate-50">
                                  <Image
                                    src={logo}
                                    alt={`${display} logo`}
                                    fill
                                    className="object-contain p-0.5"
                                    sizes="40px"
                                  />
                                </div>
                                <span className="text-sm sm:text-base font-semibold text-[#122754] truncate">
                                  {display}{" "}
                                  <span className="font-normal text-[#122754]/65">(NPL)</span>
                                </span>

                              </Link>

                            </div>
                          )
                        })}
                        <span className="text-sm flex items-center justify-end relative -top-4 text-[#122754]/90">
                          {match.time}
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-sm sm:text-base font-semibold text-[#122754]">{match.match}</p>
                        <p className="text-xs text-[#122754]/80">{match.time}</p>
                        {match.venueLink ? (
                          <a
                            href={match.venueLink}
                            className="text-xs text-[#122754] underline underline-offset-2"
                          >
                            {match.venue}
                          </a>
                        ) : (
                          <p className="text-xs text-[#122754]/75">{match.venue}</p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center items-center gap-4 sm:gap-2 shrink-0 px-2 w-full md:w-[160px] py-4 sm:py-5 ">
                    <div className="bg-black/20 h-full w-[1px]"></div>
                    <div className="flex md:flex-col justify-center items-center gap-2">
                      <Link href="/teams/" className="text-sm font-semibold text-[#122754] hover:underline">
                        teams &
                      </Link>
                      <Link href="/points-table/" className="text-sm font-semibold text-[#122754]">
                        Points Table
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }))}
        </div>
      </div>
    </div>
  )
}
