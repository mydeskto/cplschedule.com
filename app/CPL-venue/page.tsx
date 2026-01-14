import type { Metadata } from "next"
import Link from "next/link"
import { VenueCard } from "@/components/venue-card"
import { venuesData } from "@/data/vanue-data"
import { Breadcrumb } from "@/components/breadcrumb"
export const metadata: Metadata = {
  title: "CPL 2026 Venues: Stadiums, Locations, Capacities & Schedule",
  description:
    "Explore CPL 2026 venues with stadiums, locations, capacities, and match schedule for Dhaka, Sylhet, and Chattogram.",
  keywords: [
    "CPL 2026 venues",
    "CPL venues",
    "CPL stadiums",
    "Coastal Premier League venues",
    "CPL cricket venues"
  ],
   robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false
      }
    },
  openGraph: {
    title: "CPL 2026 Venues - Coastal Premier League Cricket Grounds",
    description:
      "Explore all CPL 2026 Cricket Grounds and view capacity, location, and match schedules for Coastal Premier League 2026 venues",
    type: "website",
  },
  alternates:{
    canonical: "https://CPLt20league.com/CPL-venue",
  },

}

export default function VenuesPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://CPLt20league.com/CPL-venue#collectionpage",
      "name": "Coastal Premier League 2026 Venues - Stadiums, Capacity & Match Schedule",
      "description": "Explore all CPL 2026 venues including Shere Bangla National Stadium, Sylhet International Cricket Stadium, and Zahur Ahmed Chowdhury Stadium.",
      "url": "https://CPLt20league.com/CPL-venue",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://CPLt20league.com/#website"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "@id": "https://CPLt20league.com/CPL-venue#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://CPLt20league.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "CPL Venues",
            "item": "https://CPLt20league.com/CPL-venue"
          }
        ]
      },
      "mainEntity": {
        "@type": "ItemList",
        "@id": "https://CPLt20league.com/CPL-venue#venues",
        "name": "Coastal Premier League 2026 Cricket Venues",
        "numberOfItems": venuesData.venues.length,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "itemListElement": venuesData.venues.map((venue, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "SportsActivityLocation",
            "@id": `https://CPLt20league.com/CPL-venue/${venue.slug}#stadium`,
            "name": venue.name,
            "url": `https://CPLt20league.com/CPL-venue/${venue.slug}`,
            "description": `Cricket stadium with a seating capacity of ${venue.capacity}, hosting Coastal Premier League matches.`,
            "maximumAttendeeCapacity": venue.capacity,
            "sport": "Cricket",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": venue.address.fullAddress,
              "addressLocality": venue.address.addressLocality,
              "addressRegion": venue.address.addressRegion,
              "addressCountry": venue.address.addressCountry
            }
          }
        }))
      },
      "about": {
        "@id": "https://CPLt20league.com/#sportsleague"
      }
    })
  }}
/>


            <main className="min-h-screen bg-[#122754] text-white pt-20">
        {/* Breadcrumb */}
        <div className="w-full px-4 md:px-6 pt-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'CPL Venues', href: '/CPL-venue' , isCurrent: true }
            ]}
          />
        </div>

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 font-font-inter ">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">CPL 2026 Venues</h1>
            {/* <p className="text-lg text-white max-w-2xl mx-auto mb-6">
              Explore the Coastal Premier League 2026 Venues - Stadiums, Capacity & Match Schedule
            </p> */}
            
            {/* Intro Paragraph */}
            <div className="max-w-full mx-auto text-center">
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                The Coastal Premier League 2025–26 will take place from <strong className="text-white">26 December 2025 to 23 January 2026</strong>, featuring <strong className="text-white">34 exciting T20 matches</strong> across the country's three main stadiums: Shere Bangla National Stadium in Dhaka, Sylhet International Cricket Stadium, and Zahur Ahmed Chowdhury Stadium in Chattogram. This <strong className="text-white">12th edition of the CPL</strong> includes league-stage matches, playoffs, and the grand final, all officially scheduled by the <strong className="text-white"><Link href="https://www.tigercricket.com.bd/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#c49563] underline transition-colors">Bangladesh Cricket Board</Link>  (BCB)</strong>.
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                For CPL cricket fans, this page provides complete details about the <Link href="/CPL-venue" className="text-white hover:text-[#c49563] underline transition-colors">Coastal Premier League 2026 venues</Link>, including stadium locations, capacities, pitch conditions, and <Link href="/schedule" className="text-white hover:text-[#c49563] underline transition-colors">match schedule</Link>, helping you plan your visit or follow the tournament closely.
              </p>
            </div>
          </div>

          {/* CPL 2026 Venues Section */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
              CPL 2026 Venues – Stadiums, Locations & Details
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-full mx-auto mb-8">
              The three selected stadiums feature excellent pitches and have hosted previous editions of the Coastal Premier League, with all CPL 2026 matches taking place across Dhaka, Sylhet, and Chattogram.
            </p>

            {/* Venues Table */}
            <div className="overflow-x-auto scrollbar-none">
              <table className="w-full border-collapse bg-white/5  border-white/10 ">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-6 py-4 text-left text-white font-semibold border-b border-white/10">Name</th>
                    <th className="px-6 py-4 text-left text-white font-semibold border-b border-white/10">Location</th>
                    <th className="px-6 py-4 text-left text-white font-semibold border-b border-white/10">Capacity</th>
                    <th className="px-6 py-4 text-left text-white font-semibold border-b border-white/10">Pitch Type</th>
                    <th className="px-6 py-4 text-left text-white font-semibold border-b border-white/10">Matches Hosted</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white border-b border-white/10">
                      <Link href="/CPL-venue/shere-bangla-national-stadium-dhaka" className="text-white hover:text-[#c49563] underline transition-colors">
                        Shere Bangla National Stadium
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-300 border-b border-white/10">Mirpur, Dhaka</td>
                    <td className="px-6 py-4 text-gray-300 border-b border-white/10">25,000</td>
                    <td className="px-6 py-4 text-gray-300 border-b border-white/10">Balanced (batsmen & bowlers)</td>
                    <td className="px-6 py-4 text-gray-300 border-b border-white/10">League-stage & Playoffs</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white border-b border-white/10">
                      <Link href="/CPL-venue/sylhet-international-cricket-stadium" className="text-white hover:text-[#c49563] underline transition-colors">
                        Sylhet International Cricket Stadium
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-300 border-b border-white/10">Sylhet</td>
                    <td className="px-6 py-4 text-gray-300 border-b border-white/10">18,500</td>
                    <td className="px-6 py-4 text-gray-300 border-b border-white/10">Batting-friendly, high-scoring</td>
                    <td className="px-6 py-4 text-gray-300 border-b border-white/10">League-stage matches</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white border-b border-white/10">
                      <Link href="/CPL-venue/zahur-ahmed-chowdhury-stadium-chattogram" className="text-white hover:text-[#c49563] underline transition-colors">
                        Zahur Ahmed Chowdhury Stadium
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-300 border-b border-white/10">Chattogram</td>
                    <td className="px-6 py-4 text-gray-300 border-b border-white/10">22,000</td>
                    <td className="px-6 py-4 text-gray-300 border-b border-white/10">Competitive, balanced</td>
                    <td className="px-6 py-4 text-gray-300">League-stage matches</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venuesData.venues.map((venue) => (
              <VenueCard
                key={venue.id}
                name={venue.name}
                slug={venue.slug}
                capacity={venue.capacity}
                image={venue.image}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}


