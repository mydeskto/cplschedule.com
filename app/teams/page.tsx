import { TeamsGrid } from "@/components/teams-grid"
import { pointsData } from "@/data/points-data"
import { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import Link from "next/link"



export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "Nepal Premier League 2026 Teams & Squads | Full Players List & Captains",
    description: "Get the complete Nepal Premier League 2026 teams and squads list, including full players, captains, overseas signings and updated squad details for NPL 2026.",
    keywords: ["NPL 2026 all team list", "NPL 2026 all team Squad, players list", "NPL 2026 all team players list", "NPL 2026 squads", "NPL 2026 team players list"],
    robots: {
      index: true, // This will override the root layout robots for this route only
      follow: true
    }
    , alternates: {
      canonical: 'https://nplschedule.com/teams',
    }
  }
}

export default function TeamsPage() {
  const hoverItems = pointsData.map((team) => ({
    title: team.team,
    logo: team.logo,
    link: `/teams/${encodeURIComponent(team.team.toLowerCase().replace(/\s+/g, "-"))}`,
  }))



  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": "https://CPLt20league.com/teams#teamlist",
            "name": "CPL 2026 Teams - Full Squad List, Captains & Players",
            "description": "Explore all CPL 2026 teams with full squad lists, captains, key players, and stats. Get the latest updates on every Coastal Premier League T20 team.",
            "url": "https://CPLt20league.com/teams",
            "itemListOrder": "https://schema.org/ItemListOrderAscending",
            "itemListElement": pointsData.map((team, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "SportsTeam",
                "@id": `https://CPLt20league.com/teams/${encodeURIComponent(team.team.toLowerCase().replace(/\s+/g, "-"))}#team`,
                "name": team.team,
                "description": `${team.team} - Coastal Premier League 2026 Squad`,
                "url": `https://CPLt20league.com/teams/${encodeURIComponent(team.team.toLowerCase().replace(/\s+/g, "-"))}`,
                "memberOf": {
                  "@type": "SportsLeague",
                  "@id": "https://CPLt20league.com/#sportsleague",
                  "name": "Coastal Premier League"
                }
              }
            }))
          })
        }}
      />

      <div className="min-h-screen bg-[#122754] relative overflow-hidden pt-20">


        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-4 relative z-10">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Teams', href: '/teams' , isCurrent: true }
            ]}
          />
        </div>

        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_50%,transparent_75%)] animate-shimmer"></div>
      </div> */}

        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">Nepal Premier League 2026 Teams & Squads</h1>
          <p className="text-gray-400 text-sm">The Nepal Premier League 2026 features competitive franchise teams built around Nepal’s top domestic talent and international players. Each team squad includes specialist batters, all-rounders, bowlers, and experienced captains aiming for the championship.</p>
          <p className="text-gray-400 text-sm">Explore detailed squad breakdowns, player roles, captain information, and team updates for the NPL 2026 season.</p>
          <div className="max-w-7xl mx-auto">
            <TeamsGrid items={hoverItems} />
          </div>
        </div>
      </div>
    </>
  );
}

