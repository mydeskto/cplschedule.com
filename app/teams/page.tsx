import { TeamsGrid } from "@/components/teams-grid"
import { pointsData } from "@/data/points-data"
import { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import Link from "next/link"
import { PageHero } from "@/components/Hero/PageHero"



export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "NPL 2026 Squads & Full Players List of All Teams ",
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
    des: team.des
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
            "@id": "https://nplschedule.com/teams#teamlist",
            "name": "NPL 2026 Teams - Full Squad List, Captains & Players",
            "description": "Explore all NPL 2026 teams with full squad lists, captains, key players, and stats. Get the latest updates on every Nepal Premier League T20 team.",
            "url": "https://nplschedule.com/teams",
            "itemListOrder": "https://schema.org/ItemListOrderAscending",
            "itemListElement": pointsData.map((team, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "SportsTeam",
                "@id": `https://nplschedule.com/teams/${encodeURIComponent(team.team.toLowerCase().replace(/\s+/g, "-"))}#team`,
                "name": team.team,
                "description": `${team.team} - Nepal Premier League 2026 Squad`,
                "url": `https://nplschedule.com/teams/${encodeURIComponent(team.team.toLowerCase().replace(/\s+/g, "-"))}`,
                "memberOf": {
                  "@type": "SportsLeague",
                  "@id": "https://nplschedule.com/#sportsleague",
                  "name": "Nepal Premier League"
                }
              }
            }))
          })
        }}
      />

      <div className="min-h-screen bg-transparent relative overflow-hidden">
        <PageHero
          title="NPL"
          accent="Teams"
          sub="All eight Nepal Premier League 2026 franchises — full squads, captains, overseas signings, and player lists for Season 3."
          ctas={[
            { label: "View squads", href: "#teams-grid", primary: true },
            { label: "Points table", href: "/points-table" },
          ]}
        />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-4 relative z-10">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Teams', href: '/teams' , isCurrent: true }
            ]}
          />
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <p className="text-gray-400 text-sm mb-2">The Nepal Premier League 2026 (NPL 2026) features eight franchise teams, continuing the format from previous seasons. The tournament runs from November to December 2026, bringing together Nepal’s top domestic cricketers and selected international players for thrilling T20 action.</p>
          <p className="text-gray-400 text-sm mb-6">Each team has a balanced squad of specialist batters, all-rounders, bowlers, and experienced captains. Fans can follow the full NPL 2026 team squads, player details, captain updates, and <Link href="/" className="text-[#c8102e] hover:underline">match line-ups</Link> throughout the season. Stay up to date with key players, squad lists, and <Link href="/news" className="text-[#c8102e] hover:underline">tournament news</Link> to never miss a moment of NPL 2026 action.</p>
          <div id="teams-grid" className="max-w-7xl mx-auto">
            <TeamsGrid items={hoverItems} />
          </div>
        </div>
      </div>
    </>
  );
}

