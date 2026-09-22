
import { useState, useEffect, useMemo, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { teamsData } from "@/data/teamData"
import { matches } from "@/data/matches"




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

const TEAM_FILTERS = [
  "All matches",
  "Janakpur Bolts",
  "Kathmandu Gurkhas",
  "Chitwan Rhinos",
  "Karnali Yaks",
  "Biratnagar Kings",
  "Pokhara Avengers",
  "Lumbini Lions",
  "Sudurpaschim Royals",
] as const

export default function NPLSchedule({ initialTeam }: { initialTeam?: string }) {
  const adInitialized = useRef(false)
  const adContainerRef = useRef<HTMLDivElement>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [teamFilter, setTeamFilter] = useState(() => {
    if (!initialTeam) return "All matches"
    const decoded = decodeURIComponent(initialTeam).replace(/-/g, " ")
    const match = TEAM_FILTERS.find(
      (t) => t.toLowerCase() === decoded.toLowerCase() || t.toLowerCase().includes(decoded.toLowerCase())
    )
    return match ?? "All matches"
  })

  const filteredMatches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return matches.filter((m) => {
      const hay = `${m.match} ${"fixture" in m && m.fixture ? m.fixture : ""}`.toLowerCase()
      const teamOk =
        teamFilter === "All matches" ||
        hay.includes(teamFilter.toLowerCase()) ||
        (teamFilter.includes("Gurkhas") && (hay.includes("gurkhas") || hay.includes("gorkhas")))
      const searchOk = !q || hay.includes(q)
      return teamOk && searchOk
    })
  }, [searchQuery, teamFilter])

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
    <div className="p-2 md:p-4 bg-transparent">
      <div className="max-w-7xl mx-auto space-y-2">

       

        {/* Second Section: Title & Filter */}
        <div id="schedule" className=" w-full items-center justify-between gap-6 py-4 border-b border-white/10 scroll-mt-24">
          <h2 className="text-1xl md:text-3xl text-center font-black text-white tracking-normal">
            <span className="text-[#c8102e]">Nepal Premier League (NPL) 2026</span> Schedule: Full Fixtures & Match Dates
          </h2>


        </div>
        <div>
          
          <p className="text-white text-center">
          NPL 2026 runs October 26 – November 21, 2026, with all 32 matches (28 league + 4 playoff) played at Tribhuvan University International Cricket Ground, Kirtipur. Eight teams compete, with Lumbini Lions defending their 2025 title.

          </p>

        </div>


      
        <div className="npl-fixtures-section mb-4">
          <div className="my-4 text-center">
            <p className="text-[#f2a93b] font-black text-2xl tracking-wide">NPL 2026 Schedule & Full Fixtures</p>
          </div>
          <p className="text-white text-center mb-6">

            The <a  href="/" className="hover:underline text-[#c8102e]">NPL 2026 schedule</a> features 32 matches across 8 teams from October 26 to November 21, 2026, all played at <a href="/npl-venue/tribhuvan-university-cricket-ground-kirtipur/" className="hover:underline text-[#c8102e]">Tribhuvan University International Cricket Ground, Kirtipur.</a> The tournament opens with Lumbini Lions vs Sudurpaschim Royals and closes with the Final on November 21.

          </p>

          <div className="npl-controls w-full md:w-[80%] mx-auto">
            <div className="npl-search-row">
              <div className="npl-search-box">
                <span aria-hidden>🔍</span>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search team name…"
                  aria-label="Search fixtures by team name"
                />
              </div>
            </div>
            <div className="npl-filter-row" role="group" aria-label="Filter by team">
              {TEAM_FILTERS.map((team) => (
                <button
                  key={team}
                  type="button"
                  className={`npl-chip${teamFilter === team ? " active" : ""}`}
                  onClick={() => setTeamFilter(team)}
                >
                  {team}
                </button>
              ))}
            </div>
          </div>

          {/* Fixtures — white cards, text in main page blue (#111528) */}
          <div className="space-y-2">
            {filteredMatches.length === 0 ? (
              <p className="npl-no-results">No fixtures match that search. Try a different team name.</p>
            ) : null}
            {filteredMatches.map((match, index) => {
            const pairs = parseVsTeams(match.match)
            const venueLabel = venueShortLabel(match.venue)
            const dateLabel = formatFixtureDateLabel(match.date)
            const originalIndex = matches.indexOf(match)
            const matchNo = ordinalMatch(originalIndex + 1)
            const matchLabel =
              "fixture" in match && match.fixture
                ? match.match
                : `${matchNo} Match`

            return (
              <div
                key={`${match.date}-${originalIndex}-${match.match}`}
                className="flex flex-col sm:flex-row w-full md:w-[80%] rounded-sm mx-auto overflow-hidden border border-[#111528]/18 bg-white shadow-md shadow-[#111528]/8"
              >
                <div className="shrink-0 px-4 py-2 flex items-center justify-center sm:py-5 sm:w-[160px] border-b sm:border-b-0 sm:border-r border-[#111528]/12">
                  <p className="text-xs sm:text-sm font-medium leading-snug tracking-wide text-[#111528]">{dateLabel}</p>
                </div>

                <div className="flex-1 min-w-0 px-4 py-2 sm:py-5">
                  <p className="text-[11px] sm:text-xs text-[#111528]/75 mb-3 uppercase tracking-[0.06em] leading-relaxed">
                    <span className="font-semibold text-[#111528]">Upcoming</span>
                    <span className="mx-1.5 text-[#111528]/40">•</span>
                    <span>{matchLabel}</span>
                    <span className="mx-1.5 text-[#111528]/40">•</span>
                    <span>{venueLabel}</span>
                    <span className="mx-1.5 text-[#111528]/40">•</span>
                    <span>Nepal Premier League</span>
                  </p>

                  {pairs ? (
                    <div className="space-y-1">
                      {[pairs.home, pairs.away].map((side) => {
                        const team = findTeamByScheduleName(side)
                        const display = team?.teamName ?? side
                        const logo = team?.logo ?? "/placeholder.svg"


                        const isEven = parseInt(matchNo) % 2 === 0
                          const href = isEven
                            ? (team?.profileLink || "#")
                            : (team?.outboundLink || "#")


                        return (
                          <div key={side} className="flex items-center justify-between gap-3">
                            <Link href={href} className="flex items-center gap-2 min-w-0">
                              <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden ring-1 ring-[#111528]/15 bg-slate-50">
                                <Image
                                  src={logo}
                                  alt={`${display} logo`}
                                  fill
                                  className="object-contain p-0.5"
                                  sizes="40px"
                                />
                              </div>
                              <span className="text-sm sm:text-base font-semibold text-[#111528] truncate">
                                {display}{" "}
                                <span className="font-normal text-[#111528]/65">(NPL)</span>
                              </span>

                            </Link>
                            
                          </div>
                        )
                      })}
                      <span className="text-sm flex items-center justify-end relative -top-4 text-[#111528]/90">
                      {match.time}
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm sm:text-base font-semibold text-[#111528]">{match.match}</p>
                      {"fixture" in match && match.fixture ? (
                        <p className="text-sm text-[#111528]/85">{match.fixture}</p>
                      ) : null}
                      <p className="text-xs text-[#111528]/80">{match.time}</p>
                      {match.venueLink ? (
                        <a
                          href={match.venueLink}
                          className="text-xs text-[#111528] underline underline-offset-2"
                        >
                          {match.venue}
                        </a>
                      ) : (
                        <p className="text-xs text-[#111528]/75">{match.venue}</p>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex justify-center items-center gap-4 sm:gap-2 shrink-0 px-2 w-full md:w-[160px] py-4 sm:py-5 ">
                  <div className="bg-black/20 h-full w-[1px]"></div>
                  <div className="flex md:flex-col justify-center items-center gap-2">
                  <Link href="/teams/" className="text-sm font-semibold text-[#111528] hover:underline">
                    Teams &
                  </Link>
                  <Link href="/points-table/" className="text-sm font-semibold text-[#111528]">
                    Points Table
                  </Link>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </div>

       
      </div>
    </div>
  )
}



