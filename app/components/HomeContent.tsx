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

const TEAM_SCHEDULE_LINKS = [
  { name: "Biratnagar Kings", href: "/npl_team_vise_schedule?team=biratnagar-kings" },
  { name: "Chitwan Rhinos", href: "/npl_team_vise_schedule?team=chitwan-rhinos" },
  { name: "Janakpur Bolts", href: "/npl_team_vise_schedule?team=janakpur-bolts" },
  { name: "Karnali Yaks", href: "/npl_team_vise_schedule?team=karnali-yaks" },
  { name: "Kathmandu Gorkhas", href: "/npl_team_vise_schedule?team=kathmandu-gurkhas" },
  { name: "Lumbini Lions", href: "/npl_team_vise_schedule?team=lumbini-lions" },
  { name: "Pokhara Avengers", href: "/npl_team_vise_schedule?team=pokhara-avengers" },
  { name: "Sudurpaschim Royals", href: "/npl_team_vise_schedule?team=sudurpaschim-royals" },
];

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
              The <a href="https://nplt20league.com/" className="hover:underline text-[#f26522]">Nepal Premier League Season 3</a> will feature 8 strong teams competing for the title. Fans can follow their favorite squads and track every match they play.
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


      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[#f26522]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
              Team Wise <span className="text-[#f26522]">Schedules</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full" />
            <p className="text-white/80 pt-2 text-center text-sm md:text-base max-w-2xl mx-auto font-light">
              Don't miss a single match. Choose your favorite team below to view their complete NPL 2026 tournament fixtures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
            {TEAM_SCHEDULE_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 px-4 py-3 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:border-[#f26522]/50 hover:shadow-md hover:shadow-[#f26522]/10"
              >
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <span className="text-xs md:text-sm font-bold text-white tracking-tight uppercase group-hover:text-[#f26522] transition-colors line-clamp-1">
                    {link.name}
                  </span>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f26522]/10 text-[#f26522] transition-transform duration-300 group-hover:bg-[#f26522] group-hover:text-black group-hover:scale-110">
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
                
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f26522]/0 via-[#f26522]/0 to-[#f26522]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
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
          {/* venue details section */}
          <div className="mb-10 w-full md:w-[80%] mx-auto overflow-hidden rounded-sm border border-white/10 bg-white shadow-md shadow-[#122754]/8">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#122754]">
                  <th className="px-4 py-3 text-xs sm:text-sm font-black uppercase tracking-widest text-white w-[38%] sm:w-[32%] border-r border-white/10">
                    Detail
                  </th>
                  <th className="px-4 py-3 text-xs sm:text-sm font-black uppercase tracking-widest text-white">
                    Info
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#122754]">
                {[
                  { detail: "Also known as", info: "Kirtipur Cricket Ground" },
                  { detail: "Established", info: "1998" },
                  { detail: "Capacity", info: "~20,000" },
                  { detail: "Ends", info: "Pavilion End, Chobhar End" },
                  { detail: "Curator", info: "Tribhuvan University" },
                  { detail: "Home team", info: "Nepal national cricket team" },
                  { detail: "Timezone", info: "UTC +5:45 (NPT)" },
                  {
                    detail: "Pitch",
                    info: "Generally batting-friendly; teams batting first have historically scored well",
                  },
                  {
                    detail: "Highest total (NPL)",
                    info: "Biratnagar Kings, 220/6 vs Pokhara Avengers, 18 Nov 2025",
                  },
                  {
                    detail: "Lowest total (NPL)",
                    info: "Janakpur Bolts, 51/10 vs Sudurpaschim Royals, 11 Dec 2024",
                  },
                  {
                    detail: "Highest individual score (NPL)",
                    info: "Mark Watt, 114* vs Lumbini Lions, 22 Nov 2025",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.detail}
                    className={`border-t border-[#122754]/12 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="px-4 py-3 text-xs sm:text-sm font-bold align-top border-r border-[#122754]/12">
                      {row.detail}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-sm font-medium leading-relaxed">
                      {row.info}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
