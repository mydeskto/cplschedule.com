"use client"
import Link from "next/link"
import dynamic from "next/dynamic"
import { BarChart3, MapPin, Users, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import NPLSchedule from "@/components/SchedulePage"
import { teamsData } from "@/data/teamData"
import { venuesData } from "@/data/vanue-data"
import { VenueCard } from "@/components/venue-card"
import { SiteHero } from "@/components/Hero/SiteHero"

const NewsPageForHome = dynamic(() => import("@/components/news"), {
  ssr: false,
})

const PointsTable = dynamic(() => import("../points-table/components/points-table"), {
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
]

const PLAYOFF_ROADMAP = [
  {
    step: "1",
    label: "League Stage",
    meta: "17 Nov – 7 Dec",
  },
  {
    step: "2",
    label: "Qualifier 1",
    meta: "9 Dec · 1st vs 2nd",
  },
  {
    step: "3",
    label: "Eliminator",
    meta: "10 Dec · 3rd vs 4th",
  },
  {
    step: "4",
    label: "Qualifier 2",
    meta: "11 Dec · Loser Q1 vs Winner Eliminator",
  },
  {
    step: "5",
    label: "Final",
    meta: "13 Dec · NPL 2026 Title",
    final: true,
  },
]

export const HomeContent = () => {
  const featuredVenue = venuesData.venues[0]

  return (
    <>
      <SiteHero />

      <div id="schedule">
        <NPLSchedule />
      </div>

      <section className="npl-roadmap" id="playoffs" aria-label="NPL 2026 playoff roadmap">
        <div className="npl-roadmap-head">
          <div>
            <div className="npl-roadmap-kicker">Road to the title</div>
            <h2>
              NPL 2026 Playoff Schedule and <em>Final</em>
            </h2>
            <p>
              After 28 league matches, the top four sides advance. Qualifier 1,
              the Eliminator, Qualifier 2, and the Final decide the Season 3
              champion at TU Cricket Ground, Kirtipur.
            </p>
          </div>
          <a href="/teams" className="npl-roadmap-link">
            View Teams →
          </a>
        </div>

        <div className="npl-roadmap-track">
          {PLAYOFF_ROADMAP.map((item) => (
            <div
              key={item.step}
              className={`npl-roadmap-step${item.final ? " is-final" : ""}`}
            >
              <div className="npl-roadmap-node">{item.step}</div>
              <div>
                <div className="npl-roadmap-label">{item.label}</div>
                <div className="npl-roadmap-meta">{item.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="npl-section">
        <div className="npl-section-head">
          <h2>
            The <em>eight</em>
          </h2>
          <p>
            One franchise per region — follow every squad through Season 3.
          </p>
        </div>
        <div className="npl-wrap">
          <p className="text-[var(--slate)] text-sm mb-6 max-w-2xl">
            The{" "}
            <a href="https://nplt20league.com/" className="text-[var(--marigold)] underline underline-offset-2">
              Nepal Premier League Season 3
            </a>{" "}
            will feature 8 strong teams competing for the title. Fans can follow their favorite squads and track every match they play.
          </p>
          <div className="npl-team-grid">
            {teamsData.map((team) => (
              <Link key={team.id} href={team.profileLink} className="npl-team-card">
                <div className="name">{team.teamName}</div>
                <div className="text-[12px] text-[var(--slate)] mt-2 npl-mono">View squad →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="npl-section">
        <div className="npl-section-head">
          <h2>
            Team Wise <em>Schedules</em>
          </h2>
          <p>
            Choose your favorite team to view their complete NPL 2026 fixtures.
          </p>
        </div>
        <div className="npl-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TEAM_SCHEDULE_LINKS.map((link) => (
            <Link key={link.name} href={link.href} className="npl-link-card">
              <span className="line-clamp-1">{link.name}</span>
              <ChevronRight className="h-4 w-4 text-[var(--marigold)] shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      <section className="npl-section">
        <div className="npl-section-head">
          <h2>
            Home of <em>NPL</em>
          </h2>
          <p>One ground hosts the entire season.</p>
        </div>
        <div className="npl-wrap">
          <div className="npl-venue-card mb-8">
            <div className="npl-venue-info">
              <div className="pin">📍 Venue</div>
              <h3>Tribhuvan University Cricket Ground</h3>
              <p>Kirtipur, Kathmandu, Nepal</p>
            </div>
            <div className="npl-venue-stats">
              <div className="npl-v-stat">
                <div className="v">~20k</div>
                <div className="l">Capacity</div>
              </div>
              <div className="npl-v-stat">
                <div className="v">Grass</div>
                <div className="l">Surface</div>
              </div>
              <div className="npl-v-stat">
                <div className="v">Day/Night</div>
                <div className="l">Match type</div>
              </div>
            </div>
          </div>

          <div className="npl-data-table-wrap mb-8">
            <table className="npl-data-table">
              <thead>
                <tr>
                  <th>Detail</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
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
                ].map((row) => (
                  <tr key={row.detail}>
                    <td>{row.detail}</td>
                    <td>{row.info}</td>
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

      <section className="npl-section">
        <div className="npl-section-head">
          <h2>
            What Are You <em>Looking For?</em>
          </h2>
          <p>Jump to standings, venues, or full team lists.</p>
        </div>
        <div className="npl-wrap grid grid-cols-1 md:grid-cols-3 gap-4">
          {NAV_ITEMS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link href={item.href} className="npl-panel block p-6 h-full hover:border-[var(--crimson)] border border-[var(--line)] transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[var(--crimson)] text-[var(--paper)] mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl uppercase text-[var(--paper)] mb-2" style={{ fontFamily: "var(--font-teko)" }}>
                  {item.label}
                </h3>
                <p className="text-[var(--slate)] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="npl-mono text-[11px] uppercase tracking-wider text-[var(--marigold)] inline-flex items-center gap-1">
                  Explore <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <NewsPageForHome />
      <FAQSection />
    </>
  )
}

HomeContent.displayName = "HomeContent"
