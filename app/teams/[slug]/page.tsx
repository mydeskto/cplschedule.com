import { Metadata } from "next"
import { pointsData } from "@/data/points-data"
import { playersData } from "@/data/players-data"
import Link from "next/link";
import PlayerCard from './components/PlayerCard';
import { Breadcrumb } from "@/components/breadcrumb"
import { HoverEffectForTeam } from "@/components/cardsForTeam"
import { teamsData } from "@/data/teamData"


export async function generateStaticParams() {
     return pointsData.map((team) => ({
          slug: team.team.toLowerCase().replace(/\s+/g, "-"),
     }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
     const { slug } = await params
     const normalizedSlug = slug?.toLowerCase()
     const team = pointsData.find((t) => t.team.toLowerCase().replace(/\s+/g, "-") === normalizedSlug)

     return {
          title: team ? `${team.team} Squad 2026 | Full Players List & Captain` : "Team - Nepal Premier League",
          description: team
               ? `  Check the ${team.team} squad for NPL 2026. Explore players, captain details, and team updates`
               : "Nepal Premier League team information and statistics",
          keywords: [team?.team || "NPL Team", "Nepal Premier League", "Cricket Team", "NPL Squad"],
          robots: {
               index: true, // This will override the root layout robots for this route only
               follow: true
          }
          , alternates: {
               canonical: `https://nplschedule.com/teams/${slug}`,
          }
     }
}

interface Player {
     name: string
     image: string
     role: string
}

function getPlayersForTeam(teamSlug: string): Player[] {
     // Normalize the slug to match the format in playersData
     const normalizedSlug = teamSlug.toLowerCase().replace(/\s+/g, "-")
     const teamData = playersData[normalizedSlug as keyof typeof playersData]
     console.log('Team Slug:', normalizedSlug, 'Team Data:', teamData) // Debug log
     if (!teamData) return []

     return teamData.players.map((player: any) => ({
          name: player.name,
          image: typeof player.image === "string" ? player.image : player.image?.src ?? "/placeholder.svg",
          role: player.role,
          country: player.country,

     }))
}

interface TeamPageProps {
     params: Promise<{
          slug: string
     }>
}

export default async function TeamPage({ params }: TeamPageProps) {
     const { slug } = await params
     const normalizedSlug = slug?.toLowerCase()
     const team = pointsData.find((t) => t.team.toLowerCase().replace(/\s+/g, "-") === normalizedSlug)


     const players = getPlayersForTeam(slug || '')

     const teamData = {
          position: team?.position ?? 0,
          points: team?.points ?? 0,
          matches: team?.matches ?? 0,
          won: team?.won ?? 0,
          lost: team?.loss ?? 0,
     }

     if (!team) {
          return (
               <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                    <div className="text-white text-xl">Team not found.</div>
               </div>
          )
     }
     const hoverItems = pointsData.map((team) => ({
          title: team.team,
          logo: team.logo,
          link: `/teams/${encodeURIComponent(team.team.toLowerCase().replace(/\s+/g, "-"))}`,
     }))

     // Find team info from teamsData
     const teamInfo = teamsData.find((t) => t.id === slug) || teamsData[0];

     // JSON-LD Schema for SEO
     const teamSchema = {
          "@context": "https://schema.org",
          "@type": "SportsTeam",
          name: team?.team || teamInfo?.teamName,
          sport: "Cricket",
          memberOf: {
               "@type": "SportsOrganization",
               name: "Nepal Premier League"
          },
          coach: teamInfo?.coach ? {
               "@type": "Person",
               name: teamInfo.coach
          } : undefined,
          athlete: teamInfo?.captain ? {
               "@type": "Person",
               name: teamInfo.captain
          } : undefined,
          logo: teamInfo?.logo || team?.logo,
          description: `${team?.team || teamInfo?.teamName} - Nepal Premier League 2026 team profile, squad, and statistics`,
          url: `https://nplschedule.com/teams/${slug}`
     };

     const breadcrumbSchema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
               {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://nplschedule.com/"
               },
               {
                    "@type": "ListItem",
                    position: 2,
                    name: "Teams",
                    item: "https://nplschedule.com/teams"
               },
               {
                    "@type": "ListItem",
                    position: 3,
                    name: team?.team || "Team",
                    item: `https://nplschedule.com/teams/${slug}`
               }
          ]
     };

     return (
          <>
               {/* JSON-LD Schema */}
               <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
               />
               <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
               />
               <div className="min-h-screen bg-slate-950 relative overflow-hidden pt-20 font-inter ">


               {/* Breadcrumb */}
               <div className="w-full px-4 md:px-6 pt-4 relative z-10">
                    <Breadcrumb
                         items={[
                              { label: 'Home', href: '/' },
                              { label: 'Teams', href: '/teams' },
                              { label: team?.team || "Team Detail", href: `` }
                         ]}
                    />
               </div>

               <HoverEffectForTeam items={hoverItems} />

               <div className="w-full px-4 md:px-6 py-8">
                    {teamsData.map((teamInfo , index) => {
                         const teamSlug = teamInfo.id
                         if (teamSlug === slug) {
                              return (
                                   <div className="w-full rounded-3xl overflow-hidden reveal-animation " key={index}>
                                        {/* Main Grid: Left Panel (Logo/Name) + Right Panel (Details) */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 font-inter ">
                                             {/* LEFT PANEL - Logo and Team Name Section */}
                                             <div className="lg:col-span-1 p-12 flex items-center justify-center gap-5">
                                                  {/* Team Logo Container */}
                                                  <div className="w-30 h-30 mb-6 relative reveal-animation reveal-delay-1">
                                                       <img
                                                            src={teamInfo.logo || "/placeholder.svg"}
                                                            alt={`${teamInfo.teamName} logo`}
                                                            className="w-30 h-30 object-contain drop-shadow-2xl"
                                                       />
                                                  </div>

                                                  <div className="h-45 w-[2px] bg-gray-500 reveal-animation reveal-delay-2"></div>

                                                  <div className="flex flex-col reveal-animation reveal-delay-2">
                                                       {/* Team Name */}
                                                       <h1 className="text-3xl work-san text-white mb-4 text-center leading-tight">
                                                            {teamInfo.teamName}
                                                       </h1>

                                                       {/* Championship Wins Badge */}
                                                       <div className="px-4 py-2 flex items-center gap-2">
                                                            <span className="text-white -ml-8 text-5xl font-semibold absolute">🏆</span>
                                                            <span className="text-white text-sm font-semibold border-2 pl-8 px-2 py-2 rounded-r-3xl border-white">
                                                                 {teamInfo?.nplWin || 0} Championship{teamInfo?.nplWin !== 1 ? "s" : ""}
                                                            </span>
                                                       </div>

                                                       {/* Official Team Site Button */}
                                                       <Link href={teamInfo?.website || "#"} target="_blank" className="mt-6 px-6 py-3 w-60 h-8 font-bold transform -skew-x-12 bg-red-500 hover:bg-red-600 text-white transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95">
                                                            <span className="work-san">Official Team Site</span>
                                                            <span>↗</span>
                                                       </Link>
                                                  </div>
                                             </div>

                                             {/* RIGHT PANEL - Team Details Section */}
                                             <div className="p-8 flex flex-col justify-center reveal-animation reveal-delay-3">
                                                  {/* Team Details Grid */}
                                                  <div className="p-4 w-[80%] h-fit rounded-md bg-[#122754] reveal-animation reveal-delay-4">
                                                       {/* Captain */}
                                                       <div className="pb-4 flex gap-5 reveal-animation reveal-delay-4">
                                                            <p className="text-white font-normal tracking-widest text-[14px] leading-[21px]">
                                                                 Captain - <span className="text-white underline"><a href={teamInfo.captainProfileLink} target="_blank">{teamInfo.captain}</a></span>
                                                            </p>
                                                       </div>
                                                       <div className="bg-black h-[2px] w-[calc(100%+32px)] relative -left-4 mb-2"/>

                                                       {/* Coach */}
                                                       <div className="flex gap-5 reveal-animation reveal-delay-4">
                                                            <p className="text-white font-normal tracking-widest text-[14px] leading-[21px] mb-2">
                                                                 Coach - <span className="text-white">{teamInfo.coach}</span>
                                                            </p>
                                                       </div>
                                                       <div className="bg-black h-[2px] w-[calc(100%+32px)] relative -left-4 mb-2"/>

                                                       {/* Owner */}
                                                       <div className="pb-4 flex gap-5 reveal-animation reveal-delay-5">
                                                            <p className="text-white font-normal tracking-widest text-[14px] leading-[21px]">
                                                                 Owner - <span className="text-white">{teamInfo.owner}</span>
                                                            </p>
                                                       </div>
                                                       <div className="bg-black h-[2px] w-[calc(100%+32px)] relative -left-4 "/>

                                                       {/* Venue */}
                                                       <div className="pb-4 flex gap-5 reveal-animation reveal-delay-5">
                                                            <p className="text-white font-normal tracking-widest pt-2 text-[14px] leading-[21px] mb-2">
                                                                 Venue - <span className="text-white">{teamInfo.venue}</span>
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              )
                         }
                         return null
                    })}
               </div>

               <h2 className="text-3xl font-bold text-white mb-6 text-center pb-2">{team?.team} Squad | NPL 2026</h2>
               <h2 className="text-md font-bold text-white mb-6 text-center pb-2">{team?.description} </h2>

               <div className="w-full flex justify-center mb-8">
                    {team?.quickLinks && team.quickLinks.length > 0 && (
                         <div className="w-full max-w-3xl bg-gradient-to-r from-slate-900/40 to-slate-900/20 border border-white/10 rounded-2xl px-6 py-4 flex flex-wrap items-center justify-center gap-4 shadow-[0_10px_30px_rgba(2,6,23,0.8)]">
                              <h3 className="text-white font-semibold mr-3">Quick Links</h3>

                              <div className="flex flex-wrap gap-3">
                                   {team.quickLinks.map((link, index) => (
                                        <Link
                                             key={index}
                                             href={link.link}
                                             className="group inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-xl shadow-md transition-transform duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-400"
                                             aria-label={`Open ${link.name}`}
                                        >
                                             <span className="text-sm font-medium">{link.name}</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3 h-3 opacity-90 ml-1 transition-transform group-hover:translate-x-0.5">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                                             </svg>
                                        </Link>
                                   ))}
                              </div>
                         </div>
                    )}
               </div>
               
               <div className="w-full px-4 md:px-6 py-8 relative z-10">
                    {/* Teams player section */}
                    <div className="space-y-12">
                         {/* Batsmen Section */}
                         {players.some(player => 
                              player.role?.toLowerCase().includes('batsman') || 
                              player.role?.toLowerCase().includes('captain')
                         ) && (
                              <div className="reveal-animation">
                                   <h2 className="text-2xl font-bold text-white mb-6 text-left border-b border-white/20 pb-2">
                                        Batsmen & Captain
                                   </h2>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
                                        {players
                                             .filter(player => 
                                                  player.role?.toLowerCase().includes('batsman') || 
                                                  player.role?.toLowerCase().includes('captain')
                                             )
                                             .map((player, index) => (
                                                  <PlayerCard key={index} player={player} />
                                             ))}
                                   </div>
                              </div>
                         )}

                         {/* All-rounders Section */}
                         {players.some(player => 
                              player.role?.toLowerCase().includes('all') || 
                              player.role?.toLowerCase().includes('rounder')
                         ) && (
                              <div className="reveal-animation reveal-delay-1">
                                   <h2 className="text-2xl font-bold text-white mb-6 text-left border-b border-white/20 pb-2">
                                        All-rounders
                                   </h2>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
                                        {players
                                             .filter(player => 
                                                  player.role?.toLowerCase().includes('all') || 
                                                  player.role?.toLowerCase().includes('rounder')
                                             )
                                             .map((player, index) => (
                                                  <PlayerCard key={index} player={player} />
                                             ))}
                                   </div>
                              </div>
                         )}

                         {/* Bowlers Section */}
                         {players.some(player => player.role?.toLowerCase().includes('bowler')) && (
                              <div className="reveal-animation reveal-delay-2">
                                   <h2 className="text-2xl font-bold text-white mb-6 text-left border-b border-white/20 pb-2">
                                        Bowlers
                                   </h2>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
                                        {players
                                             .filter(player => player.role?.toLowerCase().includes('bowler'))
                                             .map((player, index) => (
                                                  <PlayerCard key={index} player={player} />
                                             ))}
                                   </div>
                              </div>
                         )}

                         {/* Other Squad Members Section */}
                         {players.some(player => 
                              !player.role ||
                              !(
                                   player.role.toLowerCase().includes('batsman') ||
                                   player.role.toLowerCase().includes('bowler') ||
                                   player.role.toLowerCase().includes('all') ||
                                   player.role.toLowerCase().includes('rounder') ||
                                   player.role.toLowerCase().includes('captain')
                              )
                         ) && (
                              <div className="reveal-animation reveal-delay-3">
                                   <h2 className="text-2xl font-bold text-white mb-6 text-left border-b border-white/20 pb-2">
                                        Other Squad Members
                                   </h2>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
                                        {players
                                             .filter(player => 
                                                  !player.role ||
                                                  !(
                                                       player.role.toLowerCase().includes('batsman') ||
                                                       player.role.toLowerCase().includes('bowler') ||
                                                       player.role.toLowerCase().includes('all') ||
                                                       player.role.toLowerCase().includes('rounder') ||
                                                       player.role.toLowerCase().includes('captain')
                                                  )
                                             )
                                             .map((player, index) => (
                                                  <PlayerCard key={index} player={player} />
                                             ))}
                                   </div>
                              </div>
                         )}
                    </div>
               </div>
               </div>
          </>
     )
}

