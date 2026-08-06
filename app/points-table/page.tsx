import { Metadata } from 'next'
import PointsTable from './components/points-table'
import { Breadcrumb } from '@/components/breadcrumb'
import { teamsData } from '@/data/teamData'
import { PageHero } from '@/components/Hero/PageHero'

export const metadata: Metadata = {
     title: "Nepal Premier League 2026 Points Table : Standings & Ranking",
     description: "Follow the Nepal Premier League 2026 standings live. Track rankings, results, wins, losses, and Net Run Rate (NRR) in real time.",
     keywords: [
          "NPL 2026 Points Table",
          "Nepal Premier League standings",
          "NPL team rankings",
          "NPL T20 standings",
          "NPL points table",

     ],
     robots: {
          index: true,
          follow: true,
     },
     alternates: {
          canonical: "https://nplschedule.com/points-table",
     },
}

export default function PointsTablePage() {

     const breadcrumbSchema = {
          "@type": "ItemList",
          "itemListOrder": "https://schema.org/ItemListOrderAscending",
          "itemListElement": teamsData.map((team: any, index: number) => ({
               "@type": "ListItem",
               "position": index + 1,
               "item": {
                    "@type": "SportsTeam",
                    "name": team.name,
                    "url": `https://nplschedule.com/team/${team.slug}`,
                    "memberOf": {
                         "@type": "SportsLeague",
                         "name": "Nepal Premier League"
                    },
                    "numberOfWins": team.wins,
                    "numberOfLosses": team.losses,
                    "ranking": index + 1,
                    "points": team.points,
                    "netRunRate": team.nrr
               }
          }))
     }


     return (
          <>
               {/* JSON-LD Schema */}
               <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                         __html: JSON.stringify({
                              "@context": "https://schema.org",
                              "@type": "WebPage",
                              "@id": "https://nplschedule.com/points-table#webpage",
                              "name": "NPL 2026 Points Table",
                              "description": "NPL 2025-26 Points Table: Live Team Rankings and Standings for Nepal Premier League",
                              "url": "https://nplschedule.com/points-table",
                              "inLanguage": "en-US",
                              "isPartOf": {
                                   "@id": "https://nplschedule.com/#website"
                              },
                              "about": {
                                   "@type": "SportsLeague",
                                   "@id": "https://nplschedule.com/#sportsleague",
                                   "name": "Nepal Premier League",
                                   "sport": "Cricket"
                              },
                              "breadcrumb": {
                                   "@type": "BreadcrumbList",
                                   "@id": "https://nplschedule.com/points-table#breadcrumb",
                                   "itemListElement": [
                                        {
                                             "@type": "ListItem",
                                             "position": 1,
                                             "name": "Home",
                                             "item": "https://nplschedule.com/"
                                        },
                                        {
                                             "@type": "ListItem",
                                             "position": 2,
                                             "name": "Points Table",
                                             "item": "https://nplschedule.com/points-table"
                                        }
                                   ]
                              }
                         })
                    }}
               />

               <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
               />
               <div className="min-h-screen bg-transparent relative overflow-hidden">
                    <PageHero
                         title="NPL"
                         accent="Standings"
                         sub="Live Nepal Premier League 2026 points table — rankings, wins, losses, points, and Net Run Rate as Season 3 unfolds."
                         ctas={[
                              { label: "View table", href: "#points-table", primary: true },
                              { label: "Fixtures", href: "/" },
                         ]}
                    />

                    {/* Breadcrumb */}
                    <div className="w-full px-4 md:px-6 pt-4 relative z-10">
                         <Breadcrumb
                              items={[
                                   { label: 'Home', href: '/' },
                                   { label: 'Points Table', href: '/points-table', isCurrent: true }
                              ]}
                         />
                    </div>

                    <div id="points-table" className='flex flex-col items-left justify-center m-4'>
                    <p className="text-gray-400 text-sm">Track team rankings, wins, losses, points, and Net Run Rate throughout the tournament.</p>
                    </div>

                    {/* Points Table Component */}
                    <PointsTable />
               </div>
          </>
     )
}

