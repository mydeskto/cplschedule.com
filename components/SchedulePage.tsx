
import { useState, useEffect, useMemo, useRef } from "react"
import { matchesData } from "@/data/matches-data"
import Image from "next/image"
import { MapPin, ChevronDown, X } from "lucide-react"
import whiteLogo from "@/public/images/newlogo.png"
import Link from "next/link"
import { teamsData } from "@/data/teamData"



const matches = [
  {
    date: "November 17",
    match: "Janakpur Bolts vs Kathmandu Gurkhas",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
    venueLink: "/npl-venue/tribhuvan-university-cricket-ground-kirtipur/",
  },
  {
    date: "November 18",
    match: "Chitwan Rhinos vs Karnali Yaks",
    time: "11:45 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 18",
    match: "Biratnagar Kings vs Pokhara Avengers",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 19",
    match: "Kathmandu Gurkhas vs Sudurpaschim Royals",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 20",
    match: "Lumbini Lions vs Chitwan Rhinos",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 21",
    match: "Pokhara Avengers vs Sudurpaschim Royals",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 22",
    match: "Karnali Yaks vs Lumbini Lions",
    time: "11:15 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 22",
    match: "Kathmandu Gurkhas vs Biratnagar Kings",
    time: "3:30 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 24",
    match: "Janakpur Bolts vs Biratnagar Kings",
    time: "11:45 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 24",
    match: "Sudurpaschim Royals vs Karnali Yaks",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 25",
    match: "Kathmandu Gurkhas vs Lumbini Lions",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 26",
    match: "Biratnagar Kings vs Chitwan Rhinos",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
    venueLink: "/npl-venue/tribhuvan-university-cricket-ground-kirtipur/",
  },
  {
    date: "November 27",
    match: "Lumbini Lions vs Sudurpaschim Royals",
    time: "11:45 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 27",
    match: "Janakpur Bolts vs Pokhara Avengers",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 28",
    match: "Chitwan Rhinos vs Kathmandu Gurkhas",
    time: "11:45 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 28",
    match: "Karnali Yaks vs Biratnagar Kings",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 29",
    match: "Pokhara Avengers vs Lumbini Lions",
    time: "11:15 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 29",
    match: "Sudurpaschim Royals vs Janakpur Bolts",
    time: "3:30 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "November 30",
    match: "Karnali Yaks vs Kathmandu Gurkhas",
    time: "3:30 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 2",
    match: "Janakpur Bolts vs Chitwan Rhinos",
    time: "11:45 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 2",
    match: "Pokhara Avengers vs Karnali Yaks",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 3",
    match: "Biratnagar Kings vs Lumbini Lions",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 4",
    match: "Pokhara Avengers vs Kathmandu Gurkhas",
    time: "11:45 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 4",
    match: "Sudurpaschim Royals vs Chitwan Rhinos",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 5",
    match: "Lumbini Lions vs Janakpur Bolts",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 6",
    match: "Sudurpaschim Royals vs Biratnagar Kings",
    time: "11:15 AM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 6",
    match: "Chitwan Rhinos vs Pokhara Avengers",
    time: "3:30 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 7",
    match: "Karnali Yaks vs Janakpur Bolts",
    time: "3:30 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 9",
    match: "Qualifier 1",
    fixture: "1st vs 2nd (League Table)",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 10",
    match: "Eliminator",
    fixture: "3rd vs 4th (League Table)",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 11",
    match: "Qualifier 2",
    fixture: "Loser Q1 vs Winner Eliminator",
    time: "4:00 PM",
    venue: "Tribhuvan University Cricket Ground, Kirtipur",
  },
  {
    date: "December 13",
    match: "Final",
    fixture: "TBD vs TBD",
    time: "3:30 PM",
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

export default function NPLSchedule({ initialTeam }: { initialTeam?: string }) {
 const adInitialized = useRef(false);
  const adContainerRef = useRef<HTMLDivElement>(null);

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
            <span className="text-[#f26522]">Nepal Premier League (NPL) 2026</span> Schedule: Full Fixtures & Match Dates
            {/* BPL 2026 Schedule – Full &nbsp; Match<span className="text-[#f26522]">  Fixtures</span> */}
          </h1>


        </div>
        <div>
          <p className="text-white text-center mb-4">

          The NPL 2026 Schedule is the complete timetable for Nepal Premier League Season 3 — every match date, fixture, team, venue, and start time in one place. Track today's match, the next five fixtures, the full 32-match schedule, and the live points table as the season unfolds.
          </p>
          <p className="text-white text-center">
          NPL 2026 runs November 17 – December 13, 2026, with all 32 matches (28 league + 4 playoff) played at Tribhuvan University International Cricket Ground, Kirtipur. Eight teams compete, with Lumbini Lions defending their 2025 title.

          </p>

        </div>


        {/* overview section */}
        <div className="py-6 md:py-8">
          <h2 className="text-center text-[#f26522] font-black text-lg md:text-2xl tracking-wide mb-4">
            Nepal Premier League 2026 Overview
          </h2>
          <div className="w-full md:w-[80%] mx-auto overflow-hidden rounded-sm border border-white/10 bg-white shadow-md shadow-[#122754]/8">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#122754]">
                  <th className="px-4 py-3 text-xs sm:text-sm font-black uppercase tracking-widest text-white w-[40%] sm:w-[35%] border-r border-white/10">
                    Field
                  </th>
                  <th className="px-4 py-3 text-xs sm:text-sm font-black uppercase tracking-widest text-white">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#122754]">
                {[
                  { field: "Tournament", details: "Siddhartha Bank Nepal Premier League (NPL)" },
                  { field: "Season", details: "Season 3 (2026)" },
                  { field: "Organizer", details: "Cricket Association of Nepal (CAN)" },
                  { field: "Teams", details: "8" },
                  { field: "Matches", details: "32 (28 league + 4 playoff)" },
                  { field: "Venue", details: "Tribhuvan University International Cricket Ground, Kirtipur" },
                  { field: "Defending Champion", details: "Lumbini Lions (2025)" },
                  { field: "Format", details: "Single round-robin + 4-team playoffs" },
                  { field: "Start Date", details: "November 17, 2026" },
                  { field: "Final Date", details: "December 13, 2026" },
                  { field: "Official Status", details: "Fixture-level dates pending final CAN confirmation" },
                ].map((row, i) => (
                  <tr
                    key={row.field}
                    className={`border-t border-[#122754]/12 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="px-4 py-3 text-xs sm:text-sm font-bold align-top border-r border-[#122754]/12 whitespace-nowrap">
                      {row.field}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-sm font-medium leading-relaxed">
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-8 ">
          <div className="my-4 text-center">
            <p className="text-orange-500 font-black text-2xl tracking-wide">NPL 2026 Schedule & Full Fixtures</p>
          </div>
          <p className="text-white text-center">

            The <a  href="/" className="hover:underline text-[#f26522]">NPL 2026 schedule</a> features 32 matches across 8 teams from November 17 to December 13, 2026, all played at <a href="/npl-venue/tribhuvan-university-cricket-ground-kirtipur/" className="hover:underline text-[#f26522]">Tribhuvan University International Cricket Ground, Kirtipur.</a> The tournament opens with Janakpur Bolts vs Kathmandu Gurkhas and closes with the Final on December 13.

          </p>
          {/* <div>
            <span className="text-white font-black text-md">Schedule 2025</span>
          </div> */}
        </div>
        

        {/* Fixtures — white cards, text in main page blue (#122754) */}
        <div className="space-y-2">
          {matches.map((match, index) => {
            const pairs = parseVsTeams(match.match)
            const venueLabel = venueShortLabel(match.venue)
            const dateLabel = formatFixtureDateLabel(match.date)
            const matchNo = ordinalMatch(index + 1)
            const matchLabel =
              "fixture" in match && match.fixture
                ? match.match
                : `${matchNo} Match`

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
                    <span>{matchLabel}</span>
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
                        const logo = team?.logo ?? "/placeholder.svg"


                        const isEven = parseInt(matchNo) % 2 === 0;
                          console.log("match number no ", isEven)
                          const href = isEven
                            ? (team?.profileLink || "#")
                            : (team?.outboundLink || "#");


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
                      {"fixture" in match && match.fixture ? (
                        <p className="text-sm text-[#122754]/85">{match.fixture}</p>
                      ) : null}
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
                    Teams &
                  </Link>
                  <Link href="/points-table/" className="text-sm font-semibold text-[#122754]">
                    Points Table
                  </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* schedule statistics */}
        <section id="stats" className="scroll-mt-24 py-4">
          <h2 className="text-center text-[#f26522] font-black text-lg md:text-2xl tracking-wide mb-6">
            Schedule Statistics
          </h2>
          <div className="w-full md:w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              { value: "32", label: "Matches" },
              { value: "8", label: "Teams" },
              { value: "1", label: "Venue" },
              { value: "28", label: "League Matches" },
              { value: "4", label: "Playoff Matches" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1.5 rounded-sm border border-white/10 bg-white px-3 py-5 sm:py-6 shadow-md shadow-[#122754]/8 text-center"
              >
                <span className="text-3xl sm:text-4xl font-black tabular-nums leading-none text-[#f26522]">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#122754]/75 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* tournament format */}
        <section id="format" className="scroll-mt-24 py-4">
          <h2 className="text-center text-[#f26522] font-black text-lg md:text-2xl tracking-wide mb-6">
            NPL 2026 Tournament Format
          </h2>
          <div className="w-full md:w-[80%] mx-auto rounded-sm border border-white/10 bg-white shadow-md shadow-[#122754]/8 px-5 py-5 sm:px-8 sm:py-7">
            <ul className="space-y-4 list-none">
              {[
                {
                  title: "League Stage",
                  text: "All 8 teams play each other once — 28 matches total. Points: 2 for a win, 0 for a loss, 1 each for no result. Net Run Rate (NRR) breaks ties.",
                },
                {
                  title: "Top 4",
                  text: "The top four teams by points (NRR as tiebreaker) advance to the playoffs.",
                },
                {
                  title: "Qualifier 1",
                  text: "1st-placed team vs 2nd-placed team. Winner goes straight to the Final.",
                },
                {
                  title: "Eliminator",
                  text: "3rd-placed team vs 4th-placed team. Loser is knocked out.",
                },
                {
                  title: "Qualifier 2",
                  text: "Loser of Qualifier 1 vs winner of the Eliminator. Winner advances to the Final.",
                },
                {
                  title: "Final",
                  text: "Winner of Qualifier 1 vs winner of Qualifier 2 — for the NPL 2026 title.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex gap-3 sm:gap-4 border-b border-[#122754]/10 last:border-b-0 pb-4 last:pb-0"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f26522]"
                    aria-hidden
                  />
                  <p className="text-sm sm:text-base leading-relaxed text-[#122754]">
                    <span className="font-bold text-[#122754]">{item.title}:</span>{" "}
                    <span className="font-medium text-[#122754]/85">{item.text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}



