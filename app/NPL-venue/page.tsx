import type { Metadata } from "next"
import Link from "next/link"
import { VenueCard } from "@/components/venue-card"
import { venuesData } from "@/data/vanue-data"
import { Breadcrumb } from "@/components/breadcrumb"
export const metadata: Metadata = {
  title: "Nepal Premier League 2026 Venues | Stadiums & Match Locations",
  description:
    "Explore all Nepal Premier League 2026 venues including stadium names, locations, capacity, pitch reports and match schedules for NPL 2026.",
  keywords: [
    "NPL 2026 venues",
    "NPL venues",
    "NPL stadiums",
    "Nepal Premier League venues",
    "NPL cricket venues"
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
    title: "NPL 2026 Venues - Nepal Premier League Cricket Grounds",
    description:
      "Explore all NPL 2026 Cricket Grounds and view capacity, location, and match schedules for Nepal Premier League 2026 venues",
    type: "website",
  },
  alternates: {
    canonical: "https://nplschedule.com/NPL-venue",
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
            "@id": "https://nplschedule.com/NPL-venue#collectionpage",
            "name": "Nepal Premier League 2026 Venues - Stadiums, Capacity & Match Schedule",
            "description": "Explore all NPL 2026 venues including Shere Bangla National Stadium, Sylhet International Cricket Stadium, and Zahur Ahmed Chowdhury Stadium.",
            "url": "https://nplschedule.com/NPL-venue",
            "inLanguage": "en-US",
            "isPartOf": {
              "@id": "https://nplschedule.com/#website"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "@id": "https://nplschedule.com/NPL-venue#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://nplschedule.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "NPL Venues",
                  "item": "https://nplschedule.com/NPL-venue"
                }
              ]
            },
            "mainEntity": {
              "@type": "ItemList",
              "@id": "https://nplschedule.com/NPL-venue#venues",
              "name": "Nepal Premier League 2026 Cricket Venues",
              "numberOfItems": venuesData.venues.length,
              "itemListOrder": "https://schema.org/ItemListOrderAscending",
              "itemListElement": venuesData.venues.map((venue, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "SportsActivityLocation",
                  "@id": `https://nplschedule.com/NPL-venue/${venue.slug}#stadium`,
                  "name": venue.name,
                  "url": `https://nplschedule.com/NPL-venue/${venue.slug}`,
                  "description": `Cricket stadium with a seating capacity of ${venue.capacity}, hosting Nepal Premier League matches.`,
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
              "@id": "https://nplschedule.com/#sportsleague"
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
              { label: 'NPL Venues', href: '/NPL-venue', isCurrent: true }
            ]}
          />
        </div>

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 font-font-inter ">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Nepal Premier League 2026 Venues | NPL 2026 Venue</h1>
            {/* <p className="text-lg text-white max-w-2xl mx-auto mb-6">
              Explore the Coastal Premier League 2026 Venues - Stadiums, Capacity & Match Schedule
            </p> */}

            {/* Intro Paragraph */}
            <div className="max-w-full mx-auto text-center">
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                The Nepal Premier League 2026 (NPL 2026) venue for all matches is the University Cricket Ground, known for its excellent pitch conditions, competitive playing surface, and lively crowd atmosphere. This venue has hosted major domestic tournaments, making it a top location for exciting NPL 2026 matches.
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                Fans can use this information to plan their visit, follow the match schedule, and track pitch conditions. Stay updated with the latest details on the NPL 2026 venue, stadium facilities, and tickets.
              </p>
            </div>
          </div>

          {/* CPL 2026 Venues Section */}
         

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


