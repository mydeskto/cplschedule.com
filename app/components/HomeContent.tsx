"use client"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Calendar, BarChart3, MapPin, Users, ChevronRight } from "lucide-react"
import { pointsData } from "@/data/points-data"
import { motion } from "framer-motion"
import NPLSchedule from "@/components/SchedulePage"
import { teamsData } from "@/data/teamData"
import { venuesData } from "@/data/vanue-data"
import { VenueCard } from "@/components/venue-card"

// Lazy load heavy components for better code splitting with loading states
const HeroComponent = dynamic(() => import("@/components/Hero/home").then(mod => ({ default: mod.HeroComponent })), {
  ssr: true,
  loading: () => <div className="h-[30vh] md:h-[65vh] bg-slate-900 animate-pulse" />,
})

const PointsTableCard = dynamic(() => import("@/components/points-Card").then(mod => ({ default: mod.PointsTableCard })), {
  ssr: false,
})

const NewsPageForHome = dynamic(() => import("@/components/news"), {
  ssr: false,
})

const PointsTable = dynamic(() => import("../points-table/components/points-table"), {
  ssr: false,
})

const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
})

const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => ({ default: mod.FAQSection })), {
  ssr: false,
})

const NAV_ITEMS = [

  {
    href: "/points-table",
    label: "Points Table",
    icon: BarChart3,
    description: "View real-time team standings and performance stats."
  },
  {
    href: "/npl-venue",
    label: "Venues",
    icon: MapPin,
    description: "Explore the world-class stadiums hosting NPL 2026."
  },
  {
    href: "/teams",
    label: "All Teams",
    icon: Users,
    description: "Meet the powerhouse squads competing for glory."
  }
]

export const HomeContent = () => {
  const featuredVenue = venuesData.venues[0]

  return (
    <div className="bg-[#122754] min-h-screen">
      <HeroComponent />
      <NPLSchedule />

      <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
              NPL 2026 <span className="text-[#f26522]">Teams</span>
            </h2>
            
            <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full" />
            <p className="text-white pt-2 text-center text-sm">
              The Nepal Premier League Season 3 will feature 8 strong teams competing for the title. Fans can follow their favorite squads and track every match they play.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamsData.map((team) => (
              <li key={team.id}>
                <Link
                  href={team.profileLink}
                  className="group flex items-center justify-center min-h-[3.25rem] rounded-lg px-4 py-3  bg-white/5 border border-white/10 text-center text-white font-bold uppercase tracking-tight text-sm md:text-base hover:border-[#f26522]/50 hover:bg-white/10 hover:text-[#f26522] transition-all duration-300"
                >
                  {team.teamName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>



      <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
              NPL 2026 <span className="text-[#f26522]">Venue</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full" />
            <p className="text-white pt-2 text-center text-sm">
              All 32 matches of NPL 2026 will be played at a single venue:

            </p>
          </div>

          {featuredVenue && (
            <VenueCard
              name={featuredVenue.name}
              slug={featuredVenue.slug}
              capacity={featuredVenue.capacity}
              image={featuredVenue.image}
            />
          )}
        </div>
      </section>
      <PointsTable />

      {/* What Are You Looking For Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase"
            >
              What Are You <span className="text-[#f26522]">Looking For?</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-1 w-24 bg-[#f26522] mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group relative block p-8 rounded-sm bg-white/5 border border-white/10 hover:border-[#f26522]/50 transition-all duration-500 h-full hover:bg-white/10"
                >
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-[#f26522] text-black transition-transform duration-500 group-hover:scale-110 shadow-lg shadow-[#f26522]/20">
                      <item.icon className="w-7 h-7" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-black text-white group-hover:text-[#f26522] transition-colors uppercase tracking-tight">
                        {item.label}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center text-[#f26522] text-xs font-black tracking-widest uppercase pt-2">
                      Explore
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 right-2 w-[1px] h-4 bg-[#f26522]" />
                    <div className="absolute top-2 right-2 h-[1px] w-4 bg-[#f26522]" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtle background texture */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/5 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f26522]/5 blur-[120px] rounded-full -ml-48 -mb-48" />
      </section>


      <NewsPageForHome />
      <FAQSection />
    </div>
  )
}

HomeContent.displayName = 'HomeContent'
