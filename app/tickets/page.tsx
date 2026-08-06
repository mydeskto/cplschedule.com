import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Teko, Work_Sans, IBM_Plex_Mono } from "next/font/google"
import Link from "next/link"
import {
  ticketsSeo,
  ticketsIntro,
  quickFactsRows,
  expectedPriceRows,
  expectedPriceNote,
  whereToBuySection,
  howToBookSection,
  confirmedPricingSection,
  priceHistoryRows,
  priceHistoryNote,
  seasonPassSection,
  teamsScheduleSection,
  stadiumSection,
  ticketsFaqs,
  ticketsFaqSchema,
} from "@/data/tickets-2026-data"
import "./tickets-theme.css"

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-teko",
  display: "swap",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: ticketsSeo.title,
  description: ticketsSeo.description,
  alternates: {
    canonical: ticketsSeo.canonical,
  },
  openGraph: {
    title: ticketsSeo.title,
    description: ticketsSeo.description,
    url: ticketsSeo.canonical,
    type: "article",
  },
}

function SectionHead({
  title,
  accent,
  aside,
}: {
  title: string
  accent?: string
  aside?: string
}) {
  return (
    <div className="section-head">
      <h2>
        {title}
        {accent ? (
          <>
            {" "}
            <em>{accent}</em>
          </>
        ) : null}
      </h2>
      {aside ? <p>{aside}</p> : null}
    </div>
  )
}

function Prose({ children }: { children: ReactNode }) {
  return <p className="prose-p">{children}</p>
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: ReactNode[][]
}) {
  return (
    <div className="data-table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={`${i}-${j}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function TicketsPage() {
  return (
    <div
      className={`tickets-theme ${teko.variable} ${workSans.variable} ${ibmPlexMono.variable}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ticketsFaqSchema) }}
      />

      {/* Hero — design from index (1).html */}
      <section className="hero">
        <svg
          className="hero-stadium"
          viewBox="0 0 800 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <ellipse
            cx="400"
            cy="190"
            rx="380"
            ry="40"
            fill="none"
            stroke="#f2ede1"
            strokeWidth="2"
          />
          <ellipse
            cx="400"
            cy="190"
            rx="300"
            ry="26"
            fill="none"
            stroke="#f2ede1"
            strokeWidth="1.5"
          />
          <path
            d="M20,190 Q400,60 780,190"
            fill="none"
            stroke="#f2ede1"
            strokeWidth="1.5"
          />
        </svg>

        <div className="eyebrow">Season 3 · Nov 17 – Dec 13, 2026</div>
        <h1>
          NPL <em>Tickets</em>
        </h1>
        <p className="sub">
          How to buy Nepal Premier League Season 3 tickets online — prices,
          Khalti booking, venues, and what to expect at the gate.
        </p>

        <div className="hero-cta">
          <a
            href="https://events.khalti.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Buy on Khalti
          </a>
          <a href="#faqs" className="btn secondary">
            Ticket FAQs
          </a>
        </div>
      </section>

      <main>
        <section className="content-section">
          {ticketsIntro.map((p) => (
            <Prose key={p.slice(0, 48)}>{p}</Prose>
          ))}
        </section>

        <section className="content-section" id="quick-facts">
          <SectionHead
            title="NPL Season 3"
            accent="Quick Facts"
            aside="Tournament basics before you book."
          />
          <DataTable
            headers={["Detail", "Information"]}
            rows={quickFactsRows.map((r) => [r.detail, r.information])}
          />
        </section>

        <section className="content-section" id="prices">
          <SectionHead
            title="Expected NPL 2026"
            accent="Ticket Price"
            aside="Budgeting guide — check Khalti for live prices."
          />
          <DataTable
            headers={["Match Type", "Projected General", "Projected VIP"]}
            rows={expectedPriceRows.map((r) => [r.matchType, r.general, r.vip])}
          />
          <Prose>{expectedPriceNote}</Prose>
        </section>

        <section className="content-section" id="where-to-buy">
          <SectionHead
            title="Where to Buy"
            accent="NPL Tickets"
            aside="Official channel only — avoid third-party resale."
          />
          <Prose>{whereToBuySection.intro}</Prose>
          <Prose>{whereToBuySection.thatMeans}</Prose>
          <BulletList items={whereToBuySection.bullets} />
          <Prose>
            Official booking:{" "}
            <a
              href="https://khalti.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              khalti.com
            </a>
            {" / "}
            <a
              href="https://events.khalti.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Khalti Events
            </a>
          </Prose>
        </section>

        <section className="content-section" id="how-to-book">
          <SectionHead
            title="How to Book on Khalti"
            accent="Step-by-Step"
            aside="From install to QR code at the gate."
          />
          <ol className="step-list">
            {howToBookSection.steps.map((step, i) => (
              <li key={i}>
                <span className="step-num">{i + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <Prose>{howToBookSection.closing}</Prose>
        </section>

        <section className="content-section">
          <SectionHead
            title="What's Confirmed and"
            accent="What Isn't"
            aside="Prior-season figures are reference points, not 2026 rates."
          />
          {confirmedPricingSection.paragraphs.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
          <BulletList items={confirmedPricingSection.bullets} />
        </section>

        <section className="content-section">
          <SectionHead
            title="Price History"
            accent="Season 1 vs 2"
            aside="How ticket tiers moved between the first two seasons."
          />
          <DataTable
            headers={[
              "Match Type",
              "Season 1 (2024) General / VIP",
              "Season 2 (2025) General / VIP",
            ]}
            rows={priceHistoryRows.map((r) => [
              r.matchType,
              r.season1,
              r.season2,
            ])}
          />
          <Prose>{priceHistoryNote}</Prose>
        </section>

        <section className="content-section">
          <SectionHead
            title="Season Passes"
            accent="Explained"
            aside="When an all-access pass is worth it."
          />
          {seasonPassSection.paragraphs.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
        </section>

        <section className="content-section">
          <SectionHead
            title="Teams & Schedule"
            accent="Snapshot"
            aside="Eight franchises, one ground, 32 matches."
          />
          <Prose>{teamsScheduleSection.intro}</Prose>
          <BulletList items={teamsScheduleSection.teams} />
          {teamsScheduleSection.paragraphs.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
          <div style={{ marginTop: 20 }}>
            <Link href="/" className="btn primary">
              Check full NPL 2026 schedule →
            </Link>
          </div>
        </section>

        <section className="content-section">
          <SectionHead
            title="At the Stadium"
            accent="What to Bring"
            aside="Gates, timing, weather, and entry rules."
          />
          <BulletList items={stadiumSection.bullets} />
        </section>

        <section className="content-section" id="faqs">
          <SectionHead
            title="Frequently Asked"
            accent="Questions"
            aside="Booking, prices, venue, and refunds."
          />
          <div className="faq-list">
            {ticketsFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="faq-item"
                open={index === 0}
              >
                <summary>
                  <span className="faq-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </summary>
                <div className="faq-body">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
