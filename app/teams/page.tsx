import { TeamsGrid } from "@/components/teams-grid"
import { pointsData } from "@/data/points-data"
import { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import Link from "next/link"



export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "CPL 2026 Squads: Full Player Lists for All Six Teams After Auction",
    description: "Get the full CPL 2026 squads for all six teams after the Coastal Premier League auction. View complete player lists, roles, country details, and overseas stars.",
    keywords: ["CPL 2026 all team list", "CPL 2026 all team Squad, players list", "CPL 2026 all team players list", "CPL 2026 squads", "CPL 2026 team players list"],
    robots: {
      index: true, // This will override the root layout robots for this route only
      follow: true
    }
    , alternates: {
      canonical: 'https://CPLt20league.com/teams',
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

      <div className="min-h-screen bg-slate-950 relative overflow-hidden pt-20">


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
          <p className="text-gray-400 text-sm">The Coastal Premier League 2026 squads are now finalized after the official CPL auction. This page provides the complete and updated player lists for all six teams, including local stars, overseas players, and squad roles. Each team’s squad is verified and presented in a clean format, making it easy to check confirmed players, team combinations, and final selections for the <Link href="/" className="text-white hover:text-[#c49563] underline transition-colors">CPL 2026</Link> season.</p>
          <div className="max-w-7xl mx-auto">
            <TeamsGrid items={hoverItems} />
          </div>
        </div>
      </div>
    </>
  );
}

